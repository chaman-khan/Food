import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../../../theme/theme';
import {useDispatch} from 'react-redux';
import {logout} from '../../../redux/actions/auth';
const Donor_Setting = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={{width: '95%', alignSelf: 'center'}}>
      <View style={styles.topBar}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>Category</Text>
      </View>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('DonorStack', {
            screen: 'ChangePassword',
          })
        }>
        <Text style={{fontSize: 16, fontWeight: '0'}}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('DonorStack', {
            screen: 'Terms',
          })
        }>
        <Text style={{fontSize: 16, fontWeight: '0'}}>Terms & Condition</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('DonorStack', {
            screen: 'ChangeEmail',
          })
        }>
        <Text style={{fontSize: 16, fontWeight: '0'}}>
          Change Email Address
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('DonorStack', {
            screen: 'ChangeLocation',
          })
        }>
        <Text style={{fontSize: 16, fontWeight: '0'}}>Change Location</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('DonorStack', {
            screen: 'DeleteAccount',
          })
        }>
        <Text style={{fontSize: 16, fontWeight: '0'}}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() => {
          dispatch(logout());
          navigation.navigate('Login');
        }}>
        <Text style={{fontSize: 16, color: 'red', fontWeight: '0'}}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  topBar: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  item: {
    height: 50,
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderColor: theme.colors.grey,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
});
export default Donor_Setting;
