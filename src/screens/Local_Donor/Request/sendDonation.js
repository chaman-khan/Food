import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {sendDonation} from '../../../redux/actions/home';
import {Loading} from '../../../components/loading';
import {authLoad} from '../../../redux/actions/auth';
const {width} = Dimensions.get('screen');

const Send_Donation = ({navigation, route}) => {
  const [currentLocation, setCurrentLocation] = useState('Select Location');
  const [showMap, setShowMap] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setlongitude] = useState(73.8137992);
  const [quatity, setQuantity] = useState(null);

  const [PN, setPN] = useState(null);
  const {item} = route.params;
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
      user_id: loginData.data._id,
      request_id: item._id,
      donation_amount: quatity,
      phone_number: PN,
      location: 'Pakistan',
      latitude: latitude,
      longitude: longitude,
    });
    console.log(raw);

    if (quatity === null || PN === null || latitude === undefined) {
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

      dispatch(sendDonation(loginData, raw, onSuccess, onError));
    }
  };

  const {authLoading, loginData} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const onSuccess = val => {
    console.log('val.............');
    console.log(val);
    navigation.navigate('DonorStack', {
      screen: 'Donation Done',
    });

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
              navigation.navigate('DonorStack', {
                screen: 'Donation Done',
              });
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
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{width: '95%', alignSelf: 'center', gap: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Ionicons
            name="arrow-back"
            size={25}
            onPress={() => navigation.goBack()}
          />
          <Text style={{fontSize: 25, color: 'black'}}>Send Donation</Text>
          <Ionicons name="arrow-back" size={25} color="transparent" />
        </View>
        <View style={{gap: 7}}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            Donation Affordability
          </Text>
          <TextInput
            placeholder="0"
            placeholderTextColor="black"
            style={styles.section}
            value={quatity}
            onChangeText={txt => setQuantity(txt)}
          />
        </View>
        <View style={{gap: 7}}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Phone Number</Text>
          <TextInput
            placeholder="03010549310"
            style={styles.section}
            value={PN}
            onChangeText={txt => setPN(txt)}
          />
        </View>
        <TouchableOpacity
          style={{gap: 7}}
          activeOpacity={1}
          onPress={() => setShowMap(true)}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Location</Text>
          <View style={styles.newSection}>
            <Text placeholder={currentLocation} style={{color: 'black'}}>
              {currentLocation}
            </Text>
            <Entypo name="location-pin" size={20} />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleconfirm();
        }}>
        <Text style={styles.bttnText}>Confirm Donation</Text>
      </TouchableOpacity>
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
  button: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#20B7FE',
    borderRadius: 10,
    alignItems: 'center',
    padding: 13,
    position: 'absolute',
    bottom: 10,
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
  section111: {
    borderColor: '#858581',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
});
export default Send_Donation;
