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
import {Loading} from '../../../components/loading';
import {NGOdeleteUserDonationRequest} from '../../../redux/actions/home';
import {useDispatch, useSelector} from 'react-redux';
const theme = {
  colors: {
    primary: '#1CB5FD',
    grey: '#9B9B9B',
  },
};
const NGODonationDetail = ({navigation}) => {
  const {item} = useRoute().params;
  const [clicked, setClicked] = useState(false);
  console.log(item);
  const {authLoading, loginData} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(authLoad(true));
    dispatch(NGOdeleteUserDonationRequest(loginData, item, onSuccess, onError));
    navigation.navigate('NGOStack', {
      screen: 'NGOMyDonation',
    });
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 15,
          height: 50,
          alignItems: 'center',
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
          onPress={() => setClicked(true)}
          style={{color: 'black'}}
        />
      </View>
      <Image source={{uri: item.image}} style={{width: '100%', height: 240}} />
      <View style={{margin: 5, paddingHorizontal: 7}}>
        <Text style={styles.category}>{item.donation_category}</Text>
        <Text style={{marginVertical: 7, color: 'black', fontWeight: '600'}}>
          {item.user_name}
        </Text>
        <View style={styles.categoryView}>
          <Text style={{color: 'black'}}>Donation Amount </Text>
          <Text style={{color: '#20B7FE'}}>{item.donation_amount}</Text>
        </View>

        <View style={styles.descView}></View>
        <Text style={{fontWeight: 'bold', color: 'black'}}>
          Donation Description
        </Text>
        <Text style={styles.desc}>{item.donation_desc}</Text>
      </View>

      {clicked && (
        <Modal transparent>
          <View style={{flex: 1, backgroundColor: 'rgba(50, 50, 50,0.9)'}}>
            <View style={styles.modell}>
              <View style={styles.request}>
                <TouchableOpacity
                  style={styles.button1}
                  onPress={() => {
                    handleDelete;
                    setClicked(false);
                  }}>
                  <Text style={{}}>Delete Request</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button1}
                  onPress={() => {
                    setClicked(false);
                    navigation.navigate('NGOStack', {screen: 'NGOEditRequest'});
                  }}>
                  <Text style={{color: 'black'}}>Edit Request</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.cancel}
                onPress={() => setClicked(false)}>
                <Text style={{color: 'red'}}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Loading visible={authLoading} />
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
