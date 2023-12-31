import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
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
const RejectedDeatil = ({navigation}) => {
  const route = useRoute().params;
  const routee = route.item;
  console.log('====================================');
  console.log(routee);
  console.log('====================================');

  const [showMap, setShowMap] = useState(false);
  const [latitudeDelta, setLatitudeDelta] = useState(0.0922);
  const [longitudeDelta, setLongitudeDelta] = useState(0.0421);
  const [latitude, setLatitude] = useState(Number(routee.latitude));
  const [longitude, setlongitude] = useState(Number(routee.longitude));
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();

  const {authLoading, loginData} = useSelector(state => state.auth);

  const handleDelete = () => {
    dispatch(authLoad(true));
    dispatch(deleteUserDonationRequest(loginData, routee, onSuccess, onError));
  };
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
            setClicked(false);
            val.status === 'success' &&
              navigation.navigate('NGOStack', {screen: 'AllUserRequests'});
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
      <View style={styles.topBar}>
        <Ionicons
          name="arrow-back"
          size={25}
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 25, color: 'black'}}>Donation Details</Text>
        <Entypo
          name="dots-three-vertical"
          size={25}
          style={{color: 'black'}}
          onPress={() => setClicked(true)}
        />
      </View>
      <Image
        source={{uri: routee.image}}
        style={{alignSelf: 'center', width: '90%', height: 180}}
      />
      <View style={{margin: 5, paddingHorizontal: 12}}>
        <Text style={styles.category}>{routee.donation_category}</Text>
        <Text style={{marginVertical: 7, color: 'black'}}>
          {routee.user_name}
        </Text>
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
      {clicked && (
        <Modal transparent>
          <View style={{flex: 1, backgroundColor: 'rgba(50, 50, 50,0.9)'}}>
            <View
              style={{
                position: 'absolute',
                bottom: 20,
                height: 120,
                gap: 20,
                width: '95%',
                alignSelf: 'center',
              }}>
              <TouchableOpacity
                style={styles.cancel}
                onPress={() => {
                  handleDelete;
                }}>
                <Text style={{color: 'black'}}>Delete Request</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancel}
                onPress={() => setClicked(false)}>
                <Text style={{color: 'red'}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
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
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  category: {
    marginVertical: 5,
    color: '#20B7FE',
    fontWeight: 'bold',
  },
  categoryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 7,
  },
  descView: {
    width: '100%',
    borderBottomColor: theme.colors.grey,
    borderWidth: 1,
    marginVertical: 10,
  },
  desc: {
    borderWidth: 1,
    borderColor: '#858581',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    color: 'black',
  },
  cancel: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
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
export default RejectedDeatil;
