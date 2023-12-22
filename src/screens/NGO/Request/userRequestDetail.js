import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
const theme = {
  colors: {
    primary: '#1CB5FD',
    grey: '#9B9B9B',
  },
};
const UserRequestDetail = ({navigation}) => {
  const route = useRoute().params;
  const routee = route.item;

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
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 25, color: 'black'}}>Donation Details</Text>
        <Entypo
          name="dots-three-vertical"
          size={25}
          color="transparent"
        />
      </View>
      <Image
        source={routee.image}
        style={{alignSelf: 'center', width: '90%'}}
      />
      <View style={{margin: 5, paddingHorizontal: 12}}>
        <Text style={styles.category}>{routee.donation_category}</Text>
        <View style={styles.categoryView}>
          <Text style={{ color: 'black'}}>Donation Quantity</Text>
          <Text style={{color: '#20B7FE'}}>{routee.quantity}</Text>
        </View>
        <View style={styles.categoryView}>
          <Text style={{ color: 'black'}}>Phone Number</Text>
          <Text style={{color: '#20B7FE'}}>{routee.phoneNo}</Text>
        </View>
        <View style={styles.categoryView}>
          <Text style={{ color: 'black'}}>Location</Text>
          <Text style={{color: '#20B7FE'}}>{routee.location}</Text>
        </View>
        <View style={styles.descView}></View>
        <Text style={{fontWeight: 'bold',  color: 'black'}}>Donation Description</Text>
        <Text style={styles.desc}>{routee.description}</Text>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Accept
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.goBack()}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Reject
          </Text>
        </TouchableOpacity>
      </View>
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
    color: 'black'
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
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 10,
  },
});
export default UserRequestDetail;
