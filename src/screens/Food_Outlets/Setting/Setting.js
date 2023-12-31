import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../../../theme/theme';
import {useDispatch} from 'react-redux';
import {logout} from '../../../redux/actions/auth';
const FoodOutlet_Setting = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View style={{width: '95%', alignSelf: 'center'}}>
      <View style={styles.topBar}>
        <Text style={{fontSize: 16, color: 'black', fontWeight: '500'}}>
          Setting
        </Text>
      </View>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('FoodStack', {
            screen: 'ChangePassword',
          })
        }>
        <Text style={{fontSize: 16, color: 'black', fontWeight: '400'}}>
          Change Password
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('FoodStack', {
            screen: 'Terms',
          })
        }>
        <Text style={{fontSize: 16, color: 'black', fontWeight: '400'}}>
          Terms & Condition
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('FoodStack', {
            screen: 'ChangeEmail',
          })
        }>
        <Text style={{fontSize: 16, color: 'black', fontWeight: '400'}}>
          Change Email Address
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('FoodStack', {
            screen: 'ChangeLocation',
          })
        }>
        <Text style={{fontSize: 16, color: 'black', fontWeight: '400'}}>
          Change Location
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('FoodStack', {
            screen: 'DeleteAccount',
          })
        }>
        <Text style={{fontSize: 16, color: 'black', fontWeight: '400'}}>
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
export default FoodOutlet_Setting;
