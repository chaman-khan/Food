import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../theme/theme';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {changeLocation, sendDonation} from '../../../redux/actions/home';
import {Loading} from '../../../components/loading';
import {authLoad} from '../../../redux/actions/auth';
const {width, height} = Dimensions.get('screen');

const ChangeLocation = ({navigation}) => {
  const [location, setLocation] = useState('Valencia Town');
  const [currentLocation, setCurrentLocation] = useState('Select Location');
  const [showMap, setShowMap] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setlongitude] = useState(73.8137992);

  const {authLoading, loginData} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLatitude(info.coords.latitude);
      setlongitude(info.coords.longitude);
    });
    getCurrentLocation();
    dispatch(authLoad(false));
  }, [longitude, latitude]);
  const getCurrentLocation = () => {
    console.log('........entered here.......');
    Geolocation.getCurrentPosition(info => {
      console.log(info);
      setLatitude(info.coords.latitude);
      setlongitude(info.coords.longitude);
      console.log('........now inside here.......');
    });
    // Geolocation.getCurrentPosition(
    //   position => {
    //     console.log('Current Position:', position);
    //     // Do something with the obtained location data
    //   },
    //   error => {
    //     console.error('Error getting location:', error);
    //   },
    //   {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    // );
    console.log('........exit here.......');
  };
  const onRegionChange = region => {
    setLatitude(region.latitude);
    setlongitude(region.longitude);
  };

  const handleconfirm = () => {
    var raw = JSON.stringify({
      location: 'Pakistan',
      latitude: latitude,
      longitude: longitude,
    });
    console.log(raw);

    if (latitude === undefined) {
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
      dispatch(changeLocation(loginData, raw, onSuccess, onError));
    }
  };

  const onSuccess = val => {
    console.log('val.............');
    console.log(val);
    // navigation.navigate('DonorStack', {
    //   screen: 'Donation Done',
    // });

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
  return (
    <View style={{width: '95%', alignSelf: 'center'}}>
      <View style={styles.topBar}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>Change Email</Text>
      </View>
      <View style={{marginTop: 40, gap: 20}}>
        <Text style={{fontSize: 25, fontWeight: '450', color: 'black'}}>
          Change Your Location
        </Text>
        <Text style={{lineHeight: 20, marginBottom: 20, color: 'black'}}>
          Add here your current location for better approach
        </Text>
      </View>
      <View style={styles.User_Box}>
        <TouchableOpacity
          style={{gap: 7}}
          activeOpacity={1}
          onPress={() => setShowMap(true)}>
          <Text style={{fontWeight: 'bold'}}>Location</Text>
          <View style={styles.newSection}>
            <Text placeholder={currentLocation}>{currentLocation}</Text>
            <Entypo name="location-pin" size={20} />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handleconfirm()}>
        <Text style={{color: 'white'}}>Save Changes</Text>
      </TouchableOpacity>

      {showMap && (
        <View
          style={{
            height: height,
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
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  User_Box: {
    marginTop: responsiveScreenHeight(1.6),
    // borderWidth:2,
    height: responsiveScreenHeight(9),
    width: '100%',
  },
  Head_Texts: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: responsiveScreenFontSize(1.65),
    color: '#000000',
    marginBottom: 6,
  },
  User_Input_Container: {
    borderWidth: 1,
    borderRadius: 12,
    width: '100%',
    height: responsiveScreenHeight(5.5),
    borderColor: '#E4E4E4',
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    alignItems: 'center',
    // paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  UserIcon: {
    width: responsiveScreenWidth(5), // Set the width as needed
    height: responsiveScreenHeight(2.3), // Set the height as needed
    marginLeft: responsiveScreenWidth(1.2),
  },
  User_input: {
    // borderWidth:2,
    height: responsiveScreenHeight(5),
    width: '91%',
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: 'Poppins',
    color: '#000000',
    fontWeight: '400',
  },
  button: {
    marginTop: 50,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
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
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  bttnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
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
});

export default ChangeLocation;
