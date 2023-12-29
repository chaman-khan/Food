import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import {
  NGOUpdateRequest,
  NGOdeleteUserDonationRequest,
} from '../../../redux/actions/home';
import {Loading} from '../../../components/loading';
import {authLoad} from '../../../redux/actions/auth';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
const theme = {
  colors: {
    primary: '#1CB5FD',
    grey: '#9B9B9B',
  },
};

const {width, height} = Dimensions.get('screen');
const UserRequestDetail = ({navigation}) => {
  const route = useRoute().params;
  const routee = route.item;
  const [showMap, setShowMap] = useState(false);
  const [latitudeDelta, setLatitudeDelta] = useState(0.0922);
  const [longitudeDelta, setLongitudeDelta] = useState(0.0421);
  const [latitude, setLatitude] = useState(Number(routee.latitude));
  const [longitude, setlongitude] = useState(Number(routee.longitude));

  console.log(
    '==========tttttttttttttttttttttttttttttttttttttt==========================',
  );
  console.log(routee);
  console.log('====================================');

  const dispatch = useDispatch();
  const {authLoading, loginData} = useSelector(state => state.auth);

  const handleAccepted = () => {
    var raw = JSON.stringify({
      userRequestId: routee._id,
      ngoId: loginData.data._id,
      status: true,
    });
    dispatch(authLoad(true));
    dispatch(NGOUpdateRequest(loginData, raw, onSuccess, onError));
  };

  const handleRejected = () => {
    var raw = JSON.stringify({
      userRequestId: routee._id,
      ngoId: loginData.data._id,
      status: false,
    });
    dispatch(authLoad(true));
    dispatch(NGOUpdateRequest(loginData, raw, onSuccess, onError));
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
            val.status === 'success' && navigation.goBack();
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

  const onRegionChange = region => {
    setLatitude(region.latitude);
    setlongitude(region.longitude);
    // setLatitudeDelta(region.latitudeDelta);
    // setLongitudeDelta(region.longitudeDelta);
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 15,
        }}>
        <Ionicons
          name="arrow-back"
          size={25}
          style={{color: 'black'}}
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 25, color: 'black'}}>Donation Details</Text>
        <Entypo name="dots-three-vertical" size={25} color="transparent" />
      </View>
      <Image
        source={{uri: routee.image}}
        style={{alignSelf: 'center', width: '90%', height: 180}}
      />
      <View style={{margin: 5, paddingHorizontal: 12}}>
        <Text style={styles.category}>{routee.donation_category}</Text>
        <View style={styles.categoryView}>
          <Text style={{color: 'black'}}>Donation Quantity</Text>
          <Text style={{color: '#20B7FE'}}>{routee.donation_amount}</Text>
        </View>
        <View style={styles.categoryView}>
          <Text style={{color: 'black'}}>Phone Number</Text>
          <Text style={{color: '#20B7FE'}}>{routee.phone_number}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.categoryView}
          onPress={() => setShowMap(true)}>
          <Text style={{color: 'black'}}>Location</Text>
          <Text style={{color: '#20B7FE'}}>{routee.location}</Text>
        </TouchableOpacity>
        <View style={styles.descView}></View>
        <Text style={{fontWeight: 'bold', color: 'black'}}>
          Donation Description
        </Text>
        <Text style={styles.desc}>{routee.donation_desc}</Text>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={handleAccepted}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Accept
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={handleRejected}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Reject
          </Text>
        </TouchableOpacity>
      </View>
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
              latitudeDelta: latitudeDelta,
              longitudeDelta: longitudeDelta,
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
              }}>
              <Text style={styles.Sign_Up_Text}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <Loading visible={authLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    marginVertical: 5,
    color: '#20B7FE',
    fontWeight: 'bold',
  },
  categoryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  descView: {
    width: '100%',
    borderBottomColor: theme.colors.grey,
    borderWidth: 0.5,
    marginVertical: 10,
  },
  desc: {
    borderWidth: 0.5,
    borderColor: theme.colors.grey,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    lineHeight: 20,
    color: 'black',
  },
  button: {
    width: '47%',
    alignSelf: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    alignItems: 'center',
    padding: 13,
  },
  button1: {
    width: '47%',
    alignSelf: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    padding: 13,
  },
  cancel: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
  },
  buttonGroup: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 10,
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
export default UserRequestDetail;
