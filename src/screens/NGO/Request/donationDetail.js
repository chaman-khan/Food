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
const NGODonationDetail = ({navigation}) => {
  const route = useRoute().params;
  const routee = route.item;
  const [clicked, setClicked] = useState(false);

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
        <Text style={{fontSize: 25}}>Donation Details</Text>
        <Entypo
          name="dots-three-vertical"
          size={25}
          onPress={() => setClicked(true)}
        />
      </View>
      <Image source={routee.image} style={{width: '100%'}} />
      <View style={{margin: 5, paddingHorizontal: 7}}>
        <Text style={styles.category}>{routee.category}</Text>
        <Text style={{marginVertical: 7}}>{routee.title}</Text>
        <View style={styles.categoryView}>
          <Text>Required {routee.category}</Text>
          <Text style={{color: '#20B7FE'}}>{routee.totalNumber}</Text>
        </View>
        <View style={styles.categoryView}>
          <Text>Required Raised</Text>
          <Text style={{color: '#20B7FE'}}>00</Text>
        </View>
        <View style={styles.descView}></View>
        <Text style={{fontWeight: 'bold'}}>Donation Description</Text>
        <Text style={styles.desc}>{routee.description}</Text>
      </View>

      {clicked && (
        <Modal transparent>
          <View style={{flex: 1, backgroundColor: 'rgba(50, 50, 50,0.9)'}}>
            <View style={styles.modell}>
              <View style={styles.request}>
                <TouchableOpacity
                  style={styles.button1}
                  onPress={() => {
                    setClicked(false);
                    navigation.navigate('NGOStack', {
                      screen: 'NGOMyDonation',
                    });
                  }}>
                  <Text>Delete Request</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button1}
                  onPress={() => {
                    setClicked(false);
                    navigation.navigate('NGOStack', {screen: 'NGOEditRequest'});
                  }}>
                  <Text>Edit Request</Text>
                </TouchableOpacity>
              </View>
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
    borderWidth: 0.2,
    marginVertical: 10,
  },
  desc: {
    borderWidth: 0.2,
    borderColor: '#858581',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    height: 180,
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
  request: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    backgroundColor: 'white',
  },
  modell: {
    position: 'absolute',
    bottom: 20,
    height: 170,
    gap: 20,
    width: '95%',
    alignSelf: 'center',
  },
  button1: {
    width: '100%',
    height: 50,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default NGODonationDetail;
