import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../../../theme/theme';
const FoodOutlet_Setting = ({navigation}) => {
  return (
    <View style={{width: '95%', alignSelf: 'center'}}>
      <View style={styles.topBar}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>Category</Text>
      </View>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('FoodStack', {
            screen: 'ChangePassword',
          })
        }>
        <Text style={{fontSize: 16, fontWeight: '0'}}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('FoodStack', {
            screen: 'Terms',
          })
        }>
        <Text style={{fontSize: 16, fontWeight: '0'}}>Terms & Condition</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('FoodStack', {
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
          navigation.navigate('FoodStack', {
            screen: 'ChangeLocation',
          })
        }>
        <Text style={{fontSize: 16, fontWeight: '0'}}>Change Location</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() =>
          navigation.navigate('FoodStack', {
            screen: 'DeleteAccount',
          })
        }>
        <Text style={{fontSize: 16, fontWeight: '0'}}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() => navigation.navigate('Login')}>
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
export default FoodOutlet_Setting;
