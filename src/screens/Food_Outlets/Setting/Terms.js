import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../../../theme/theme';

const FoodTerms = ({navigation}) => {
  return (
    <View style={{width: '95%', alignSelf: 'center'}}>
      <View style={styles.topBar}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>
          Terms & Conditions
        </Text>
      </View>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() => navigation.navigate('FoodStack', {screen: 'FAQs'})}>
        <Text>FAQ's</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        activeOpacity={1}
        onPress={() => navigation.navigate('FoodStack', {screen: 'AboutUs'})}>
        <Text>About Us</Text>
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
    marginBottom: 30,
  },
  item: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderColor: theme.colors.grey,
    borderRadius: 10,
    borderWidth: 0.5,
    backgroundColor: '#FDFEFF',
    marginBottom: 15,
  },
});

export default FoodTerms;
