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
const RejectedDeatil = ({navigation}) => {
  const route = useRoute().params;
  const routee = route.item;
  const [clicked, setClicked] = useState(false);

  return (
    <View style={{flex: 1}}>
      <View style={styles.topBar}>
        <Ionicons
          name="arrow-back"
          size={25}
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 25}}>Donation Details</Text>
        <Entypo
          name="dots-three-vertical"
          size={25}
          onPress={() => setClicked(true)}
        />
      </View>
      <Image
        source={routee.image}
        style={{alignSelf: 'center', width: '90%'}}
      />
      <View style={{margin: 5, paddingHorizontal: 12}}>
        <Text style={styles.category}>{routee.category}</Text>
        <Text style={{marginVertical: 7}}>{routee.title}</Text>
        <View style={styles.categoryView}>
          <Text>Donation Quantity</Text>
          <Text style={{color: '#20B7FE'}}>{routee.quantity}</Text>
        </View>
        <View style={styles.categoryView}>
          <Text>Phone Number</Text>
          <Text style={{color: '#20B7FE'}}>{routee.phoneNO}</Text>
        </View>
        <View style={styles.categoryView}>
          <Text>Location</Text>
          <Text style={{color: '#20B7FE'}}>{routee.location}</Text>
        </View>
        <View style={styles.descView}></View>
        <Text style={{fontWeight: 'bold'}}>Donation Description</Text>
        <Text style={styles.desc}>{routee.description}</Text>
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
                  setClicked(false);
                  navigation.navigate('NGOStack', {screen: 'AllUserRequests'});
                }}>
                <Text>Delete Request</Text>
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
  },
  cancel: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
  },
});
export default RejectedDeatil;
