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
import Entypo from 'react-native-vector-icons/Entypo';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {Dropdown} from 'react-native-element-dropdown';
import {useDispatch, useSelector} from 'react-redux';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {authLoad} from '../../../redux/actions/auth';
import {Loading} from '../../../components/loading';
import {
  createUserDonationRequest,
  getAllCategories,
} from '../../../redux/actions/home';
const theme = {
  colors: {
    primary: '#1CB5FD',
    grey: '#9B9B9B',
  },
};

const {width} = Dimensions.get('screen');

const CreateRequest = ({navigation}) => {
  const [category, setCategory] = useState('Select');
  const [currentLocation, setCurrentLocation] = useState('Select Location');
  const [dropOn, setDropOn] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [showMap, setShowMap] = useState(false);
  const [quatity, setQuantity] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [number, setNumber] = useState('');
  const [des, setDes] = useState('');
  const [source, setSource] = useState(null);
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

  const handleCreate = () => {
    var raw = JSON.stringify({
      user_id: loginData.data._id,
      image: source,
      donation_category: category.value,
      donation_amount: quatity,
      donation_desc: des,
      phone_number: number,
      location: 'Pakistan',
      latitude: latitude,
      longitude: longitude,
    });

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
      dispatch(createUserDonationRequest(loginData, raw, onSuccess, onError));
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
              navigation.replace('DonorStack', {screen: 'Donation Done'});
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
        {/* <Icon
          name="arrow-left"
          type="feather"
          onPress={() => navigation.goBack()}
        /> */}
        <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
          Create Request
        </Text>
        {/* <Icon name="arrow-left" type="feather" color={'transparent'} /> */}
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
        <View style={{zIndex: 0}}>
          <View style={styles.inputWrapperCont}>
            <Text style={{color: 'black'}}>{'Donation Quantity'}</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.inputTitle, {height: 40}]}
                placeholder={'Add'}
                value={quatity}
                onChangeText={val => {
                  setQuantity(val);
                }}
                placeholderTextColor={theme.colors.grey}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View style={styles.inputWrapperCont}>
            <Text style={{color: 'black'}}>{'Phone Number'}</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.inputTitle, {height: 40}]}
                placeholder={'+2634234982739'}
                value={number}
                onChangeText={val => {
                  setNumber(val);
                }}
                placeholderTextColor={theme.colors.grey}
                keyboardType="numeric"
              />
            </View>
          </View>
          {/* <InputFielder title={'Location'} placeholder={'Select Location'} /> */}
          <TouchableOpacity
            style={{gap: 7, width: '95%', alignSelf: 'center', marginTop: 10}}
            activeOpacity={1}
            onPress={() => setShowMap(true)}>
            <Text style={{fontWeight: '400'}}>Location</Text>
            <View style={styles.newSection}>
              <Text placeholder={currentLocation} style={{color: 'black'}}>
                {currentLocation}
              </Text>
              <Entypo name="location-pin" size={20} />
            </View>
          </TouchableOpacity>
          <View style={styles.inputWrapperCont}>
            <Text style={{color: 'black'}}>{'Donation Description'}</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.inputTitle, {height: 120, maxHeight: 120}]}
                placeholder={'Donation Description'}
                value={des}
                multiline
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
          onPress={() => handleCreate()}>
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
              title="Your Location"
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
    justifyContent: 'center',
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
    maxHeight: 100,
  },
  inputTitle: {
    color: 'black',
    textAlignVertical: 'top',
    width: '100%',
  },
  donation: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
    zIndex: 10,
    elevation: 11,
  },
  Button_Box: {
    // borderWidth:2,
    width: '100%',
    height: responsiveScreenHeight(5.5),
    marginTop: responsiveScreenHeight(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    width: responsiveScreenWidth(85),
    height: responsiveScreenHeight(5.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1CB5FD',
    borderRadius: 11,
  },
  Sign_Up_Text: {
    fontFamily: 'Poppins',
    fontSize: responsiveScreenFontSize(1.4),
    fontWeight: '600',
    color: '#FFFFFF',
  },
  section: {
    borderColor: '#858581',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
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
  dropdown: {
    // borderColor:'#E4E4E4',
    backgroundColor: 'white',
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
});
export default CreateRequest;
