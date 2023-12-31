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
        <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
          Setting
        </Text>
      </View>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('NGOStack', {
            screen: 'ChangePassword',
          })
        }
        >
        <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
          Change Password
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('NGOStack', {
            screen: 'Terms',
          })
        }>
        <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
          Terms & Condition
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('NGOStack', {
            screen: 'ChangeEmail',
          })
        }>
        <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
          Change Email Address
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('NGOStack', {
            screen: 'ChangeLocation',
          })
        }>
        <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
          Change Location
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('NGOStack', {
            screen: 'DeleteAccount',
          })
        }>
        <Text style={{fontSize: 16, fontWeight: '400', color: 'black'}}>
          Delete Account
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() => {
          dispatch(logout());
          navigation.replace('Login');
        }}>
        <Text style={{fontSize: 16, color: 'red', fontWeight: '400'}}>
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
