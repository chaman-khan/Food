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
import Geolocation from '@react-native-community/geolocation';
import {
  NGOcreateUserDonationRequest,
  getAllCategories,
} from '../../../redux/actions/home';
import Entypo from 'react-native-vector-icons/Entypo';
import {Dropdown} from 'react-native-element-dropdown';
import {
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {Loading} from '../../../components/loading';

const theme = {
  colors: {
    primary: '#1CB5FD',
    grey: '#9B9B9B',
  },
};

const categoryData = ['Leftover', 'medicine', 'clothes'];

const NGOCreateRequest = ({navigation}) => {
  const [category, setCategory] = useState('Select');
  const [dropOn, setDropOn] = useState(false);
  const [source, setSource] = useState(null);
  const [currentLocation, setCurrentLocation] = useState('Select Location');
  const [categoryData, setCategoryData] = useState([]);
  const [intro, setintro] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [quatity, setQuantity] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [number, setNumber] = useState('');
  const [des, setDes] = useState('');
  const [latitude, setLatitude] = useState();
  const [longitude, setlongitude] = useState(73.8137992);

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
  }, [longitude, latitude]);

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

  const handleCreate = () => {
    var raw = JSON.stringify({
      ngo_id: loginData.data._id,
      image: source,
      donation_intro: intro,
      donation_category: category.value,
      required_amount: quatity,
      donation_desc: des,
    });

    console.log(
      '========RRRRRRRRRRRRRAAAAAAAAAAAAAAAAAAAAWWWWWWWWWWWWWWWWWWWWWWWWW============================',
    );
    console.log(raw);
    console.log(
      '========RRRRRRRRRRRRRAAAAAAAAAAAAAAAAAAAAWWWWWWWWWWWWWWWWWWWWWWWWW============================',
    );

    if (
      (quatity === '' || number === '' || latitude === undefined,
      des === '' || category === 'Select')
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
      dispatch(
        NGOcreateUserDonationRequest(loginData, raw, onSuccess, onError),
      );
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
              navigation.replace('NGOStack', {screen: 'NGODonation_Done'});
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
    });
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.topBar}>
        <Icon
          name="arrow-left"
          type="feather"
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
          Create Request
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
                  setintro(val);
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
                value={quatity}
                onChangeText={val => {
                  setQuantity(val);
                }}
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
                value={des}
                onChangeText={val => {
                  setDes(val);
                }}
                placeholderTextColor={theme.colors.grey}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: '95%',
            backgroundColor: theme.colors.primary,
            height: 50,
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={handleCreate}>
          <Text style={{color: 'white'}}>Send Request</Text>
        </TouchableOpacity>
      </ScrollView>
      {showMap && (
        <View
          style={{
            height: '100%',
            width: width,
            zIndex: 100,
            position: 'absolute',
            alignSelf: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <MapView
            // provider={PROVIDER_GOOGLE}
            onRegionChange={onRegionChange}
            style={{height: '50%', width: '100%', backgroundColor: 'red'}}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
              title="Current Location"
            />
          </MapView>
          <View style={styles.Button_Box}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.Button}
              onPress={() => {
                setShowMap(false);
                setCurrentLocation('Location picked');
              }}>
              <Text style={styles.Sign_Up_Text}>Pick location</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
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
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
  },
  dropdown: {
    // borderColor:'#E4E4E4',
    // backgroundColor: '',
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
    color: '#000000',
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
  label: {
    color: '#000000',
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: responsiveScreenFontSize(1.6),
  },
  newSection: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#858581',

    borderWidth: 0.55,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  Button: {
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(5.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1CB5FD',
    borderRadius: 11,
  },
});
export default NGOCreateRequest;
