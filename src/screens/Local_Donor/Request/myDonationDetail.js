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
  Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import {theme} from '../../../theme/theme';
import {Loading} from '../../../components/loading';
import {authLoad} from '../../../redux/actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import {deleteUserDonationRequest} from '../../../redux/actions/home';
const MyDonationDetail = ({navigation}) => {
  const route = useRoute().params;
  const routee = route.item;
  const [clicked, setClicked] = useState(false);
  const {width, height} = Dimensions.get('screen');

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
              navigation.navigate('DonorStack', {screen: 'My Donation'});
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

        <Entypo
          name="dots-three-vertical"
          size={20}
          onPress={() => setClicked(true)}
          style={{color: 'black'}}
        />
      </View>
      <View style={styles.red}>
        <Image source={require('../../../Images/i.png')} tintColor="white" />
        <Text
          style={{width: '90%', color: 'white', fontSize: 13, lineHeight: 20}}>
          Your Request has been sent to NGO. A notification will be sent to you
          when it is accepted
        </Text>
      </View>
      <Image
        source={{uri: routee.image}}
        style={{width: '100%', height: 200}}
      />
      <View style={{margin: 5, paddingHorizontal: 12}}>
        <Text style={styles.category}>{routee.donation_category}</Text>
        <Text style={{marginVertical: 7, color: 'black'}}>
          {routee.user_name}
        </Text>
        <View style={styles.categoryView}>
          <Text style={{color: 'black'}}>Donation amount</Text>
          <Text style={{color: '#20B7FE'}}>{routee.donation_amount}</Text>
        </View>
        {/* <View style={styles.categoryView}>
          <Text>Required Raised</Text>
          <Text style={{color: '#20B7FE'}}>00</Text>
        </View> */}
        <View style={styles.descView}></View>
        <Text style={{fontSize: 17, color: 'black'}}>Donation Description</Text>
        <Text style={styles.desc}>{routee.donation_desc}</Text>
      </View>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('DonorStack', {
            screen: 'Send Donation',
          })
        }>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          Donate
        </Text>
      </TouchableOpacity> */}

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
                  handleDelete();
                }}>
                <Text style={{color: 'black'}}>Cancel Request</Text>
              </TouchableOpacity>
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
    borderBottomColor: theme.colors.grey,
    borderWidth: 0.3,
    marginVertical: 10,
  },
  desc: {
    borderWidth: 0.3,
    borderColor: theme.colors.grey,
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
  red: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    padding: 9,
  },
});
export default MyDonationDetail;
