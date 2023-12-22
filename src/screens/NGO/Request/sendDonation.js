import react from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import { authLoad } from '../../../redux/actions/auth';
const NGOSend_Donation = ({navigation}) => {
  const {authLoading, loginData} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const onSuccess = val => {
    console.log('val.............');
    console.log(val);
    // navigation.navigate('DonorStack', {
    //   screen: 'Donation Done',
    // });

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
    <View style={{flex: 1}}>
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
          <Text style={{fontWeight: 'bold', color: 'black'}}>Donation Affordability</Text>
          <TextInput placeholder="0" style={styles.section} />
        </View>
        <View style={{gap: 7}}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Phone Number</Text>
          <TextInput placeholder="03010549310" style={styles.section} />
        </View>
        <View style={{gap: 7}}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>Location</Text>
          <View style={styles.newSection}>
            <TextInput placeholder="Add" />
            <Entypo name="location-pin" size={20} />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('NGOStack', {
            screen: 'Donation Done',
          })
        }>
        <Text style={styles.bttnText}>Confirm Donation</Text>
      </TouchableOpacity>
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
});
export default NGOSend_Donation;
