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
const theme = {
  colors: {
    primary: '#1CB5FD',
    grey: '#9B9B9B',
  },
};
const UserRequestDetail = ({navigation}) => {
  const route = useRoute().params;
  const routee = route.item;

  console.log('==========tttttttttttttttttttttttttttttttttttttt==========================');
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
  const handleRejected = () => {
    dispatch(authLoad(true));
    dispatch(
      NGOdeleteUserDonationRequest(loginData, routee, onSuccess1, onError1),
    );
    navigation.goBack();
    // navigation.navigate('NGOStack', {
      // screen: 'NGOMyDonation',
    // });
  };

  const onSuccess1 = val => {
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

  const onError1 = err => {
    dispatch(authLoad(false));
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
        <View style={styles.categoryView}>
          <Text style={{color: 'black'}}>Location</Text>
          <Text style={{color: '#20B7FE'}}>{routee.location}</Text>
        </View>
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
});
export default UserRequestDetail;
