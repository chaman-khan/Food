import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
const NGOMyDonationDetail = ({navigation}) => {
  const route = useRoute().params;
  const routee = route.item;

  console.log('====================================');
  console.log(routee);
  console.log('====================================');
  return (
    <View style={{flex: 1}}>
      <View style={styles.topBar}>
        <Icon
          name="arrow-left"
          type="feather"
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
          Donation Detail
        </Text>

        <Entypo name="dots-three-vertical" size={20} color="transparent" />
      </View>
      <Image
        source={routee.image}
        style={{alignSelf: 'center', width: '90%'}}
      />
      <View style={{margin: 5, paddingHorizontal: 12}}>
        <Text style={styles.category}>{routee.category}</Text>
        <Text style={{marginVertical: 7, color: 'black'}}>{routee.title}</Text>
        <View style={styles.categoryView}>
          <Text style={{color: 'black'}}>Required {routee.category}</Text>
          <Text style={{color: '#20B7FE'}}>{routee.totalNumber}</Text>
        </View>
        <View style={styles.categoryView}>
          <Text style={{color: 'black'}}>Required Raised</Text>
          <Text style={{color: '#20B7FE'}}>00</Text>
        </View>
        <View style={styles.descView}></View>
        <Text style={{fontWeight: 'bold', color: 'black'}}>
          Donation Description
        </Text>
        <Text style={styles.desc}>{routee.description}</Text>
      </View>
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
    marginBottom: 10,
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
    borderBottomColor: '#858581',
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
  cancel: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
  },
});
export default NGOMyDonationDetail;
