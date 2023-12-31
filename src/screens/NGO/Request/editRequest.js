import {Icon} from 'react-native-elements';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import {authLoad} from '../../../redux/actions/auth';
import {Loading} from '../../../components/loading';
import {Dropdown} from 'react-native-element-dropdown';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import {NGOEditRequestt, getAllCategories} from '../../../redux/actions/home';
import Geolocation from '@react-native-community/geolocation';
import RNFS from 'react-native-fs';
const theme = {
  colors: {
    primary: '#1CB5FD',
    grey: '#9B9B9B',
  },
};

const categoryData = ['Leftover', 'medicine', 'clothes'];

const NGOEditRequest = ({navigation, route}) => {

  const {item} = route.params;

  console.log('====================================');
  console.log(item.required_amount);
  console.log('====================================');

  const [category, setCategory] = useState(item.donation_category);
  const [source, setSource] = useState(item.image);
  const [intro, setIntro] = useState(item.donation_intro);
  const [quantity, setQuantity] = useState(item.required_amount);
  const [descc, setDescc] = useState(item.donation_desc);
  const [isFocus, setIsFocus] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [number, setNumber] = useState('');
  const [latitude, setLatitude] = useState();
  const [longitude, setlongitude] = useState();

  const dispatch = useDispatch();
  const {authLoading, loginData} = useSelector(state => state.auth);

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLatitude(info.coords.latitude);
      setlongitude(info.coords.longitude);
    });
    getCurrentLocation();
    dispatch(getAllCategories(loginData, categorySuccess, categoryError));
    dispatch(authLoad(false));
  }, []);

  const categorySuccess = val => {
    console.log(val);
    dispatch(authLoad(false));
    let cat = val.data.map(item => {
      return {value: item._id, label: item.name};
    });
    setCategoryData(cat);
  };
  const categoryError = err => {
    dispatch(authLoad(false));
    console.log(err);
  };
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(info => {
      console.log(info);
      setLatitude(info.coords.latitude);
      setlongitude(info.coords.longitude);
    });
  };
  const onRegionChange = region => {
    setLatitude(region.latitude);
    setlongitude(region.longitude);
  };

  const handleUpdate = async () => {
    const imageBase64 = await RNFS.readFile(source, 'base64');
    const imageUri = `data:image/jpeg;base64,${imageBase64}`;
    var raw = JSON.stringify({
      _id: item._id,
      image: imageUri,
      donation_intro: intro,
      donation_category: category.value,
      required_amount: quantity,
      donation_desc: descc,
    });

    console.log(
      '========RRRRRRRRRRRRRAAAAAAAAAAAAAAAAAAAAWWWWWWWWWWWWWWWWWWWWWWWWW============================',
    );
    console.log(raw);
    

    if (
      (quantity === '' || number === '', descc === '' || category === 'Select')
    ) {
      Alert.alert(
        'Error',
        'Fill all fields',
        [
          {
            text: 'OK',
            onPress: () => {
              console.log('OK Pressed');
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      dispatch(authLoad(true));
      dispatch(NGOEditRequestt(loginData, raw, onSuccess, onError));
    }
  };

  const onSuccess = val => {
    Alert.alert(
      val.status === 'success' ? 'Success' : 'Error',
      val.status === 'success'
        ? val.message
        : val.message || val.message.message,
      [
        {
          text: 'OK',
          onPress: () => {
            console.log('OK Pressed');
            val.status === 'success' &&
              navigation.replace('NGOStack', {screen: 'NGOMyDonation'});
          },
        },
      ],
      {cancelable: false},
    );
    dispatch(authLoad(false));
  };
  const onError = err => {
    dispatch(authLoad(false));
    console.log(err);
  };

  const gallery = () => {
    ImagePicker.openPicker({}).then(images => {
      console.log(images);
      setSource(images.path);
      console.log('source');
      console.log(source);
    });
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.topBar}>
        <Icon
          name="arrow-left"
          type="feather"
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
          Edit Request
        </Text>
        <Icon name="arrow-left" type="feather" color={'transparent'} />
      </View>
      <ScrollView>
        <TouchableOpacity
          style={styles.imagePickerWrapper}
          onPress={() => {
            gallery();
          }}>
          {source == null ? (
            <View>
              <Icon
                name="pluscircle"
                type="ant-design"
                color={theme.colors.primary}
                size={30}
              />
              <Text style={{fontSize: 12, marginTop: 8, color: 'black'}}>
                Tap to upload
              </Text>
            </View>
          ) : (
            <Image
              source={{uri: source}}
              style={{width: '100%', height: '100%', borderRadius: 10}}
            />
          )}
        </TouchableOpacity>
        <View style={{zIndex: 0}}>
          <View style={styles.inputWrapperCont}>
            <Text style={{color: 'black'}}>{'Donation Introduction'}</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.inputTitle, {height: 40}]}
                placeholder={'Write'}
                value={intro}
                onChangeText={val => {
                  setIntro(val);
                }}
                placeholderTextColor={theme.colors.grey}
              />
            </View>
            <View style={styles.donation}>
              <Text style={{color: 'black'}}>Donation Categroy</Text>

              <Dropdown
                style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={categoryData}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select Type' : '...'}
                value={category.value}
                itemTextStyle={styles.DropDown_Item}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  console.log(item);
                  setCategory(item);
                  setIsFocus(false);
                }}
              />
            </View>
          </View>

          <View style={styles.inputWrapperCont}>
            <Text style={{color: 'black'}}>{'Add Required'}</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.inputTitle, {height: 40}]}
                placeholder={'Add'}
                value={quantity}
                onChangeText={val => {
                  setQuantity(val);
                }}
                keyboardType="numeric"
                placeholderTextColor={theme.colors.grey}
              />
            </View>
          </View>
          <View style={styles.inputWrapperCont}>
            <Text style={{color: 'black'}}>{'Donation Description'}</Text>
            <View style={{...styles.inputWrapper}}>
              <TextInput
                style={[styles.inputTitle, {height: 100}]}
                placeholder={'Donation Description'}
                multiline
                value={descc}
                onChangeText={val => {
                  setDescc(val);
                }}
                placeholderTextColor={theme.colors.grey}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={{color: 'white'}}>Save Change</Text>
        </TouchableOpacity>
      </ScrollView>
      <Loading visible={authLoading} />
    </View>
  );
};
const styles = StyleSheet.create({
  topBar: {
    width: '95%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  imagePickerWrapper: {
    height: 120,
    width: 120,
    borderColor: theme.colors.grey,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  dropTab: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    borderColor: theme.colors.grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
    paddingHorizontal: 10,
    marginTop: 10,
    zIndex: 1,
  },
  containerWrapper: {
    height: 120,
    position: 'relative',
    width: '100%',
    backgroundColor: 'white',
    top: 0,
    zIndex: 2,
  },
  containerItem: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: theme.colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  inputWrapperCont: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
    zIndex: 0,
  },
  inputWrapper: {
    width: '100%',
    borderRadius: 10,
    borderColor: theme.colors.grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
    paddingHorizontal: 10,
    marginTop: 10,
    zIndex: 0,
  },
  inputTitle: {
    color: 'black',
    textAlignVertical: 'top',
    width: '100%',
  },
  donation: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 20,
    zIndex: 10,
    elevation: 11,
  },
  button: {
    width: '95%',
    backgroundColor: theme.colors.primary,
    height: 50,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdown: {
    // borderColor:'#E4E4E4',
    // backgroundColor: 'red',
    color: '#000000',
    height: responsiveScreenHeight(5),
    borderColor: 'gray',
    borderWidth: 0.5,
    paddingHorizontal: 8,
    width: '100%',
    marginRight: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  DropDown_Item: {
    height: responsiveScreenHeight(2),
    width: '91%',
    fontSize: responsiveScreenFontSize(1.6),
    fontFamily: 'Poppins',
    color: 'black',
    fontWeight: '400',
  },
  placeholderStyle: {
    fontFamily: 'Poppins',
    color: '#818181',
    fontSize: responsiveScreenFontSize(1.6),
  },
  selectedTextStyle: {
    fontSize: 14,
    color: 'black',
  },
  inputWrapperCont: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
    zIndex: 0,
  },
  inputWrapper: {
    width: '100%',
    borderRadius: 10,
    borderColor: theme.colors.grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
    paddingHorizontal: 10,
    marginTop: 10,
    zIndex: 0,
  },
  inputTitle: {
    color: 'black',
    textAlignVertical: 'top',
    width: '100%',
  },
});
export default NGOEditRequest;
