import React from 'react';
import {View, Text, Image} from 'react-native';
import {theme} from '../../../theme/theme';
import {StyleSheet} from 'react-native';

const NGOCategory = () => {
  return (
    <View style={{width: '90%', alignSelf: 'center'}}>
      <View style={styles.topBar}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>Category</Text>
      </View>
      <View style={styles.container}>
        <View style={[styles.category, {backgroundColor: '#E9EDFD'}]}>
          <Image source={require('../../../Images/food.png')} />
          <Text style={{fontSize: 20, fontWeight: '400'}}>Food</Text>
        </View>
        <View style={[styles.category, {backgroundColor: '#FFE7FE'}]}>
          <Image source={require('../../../Images/leftover.png')} />
          <Text style={{fontSize: 20, fontWeight: '400'}}>LeftOver</Text>
        </View>
      </View>
      <View style={[styles.category, {backgroundColor: '#E9FDF6'}]}>
        <Image source={require('../../../Images/medicinec.png')} />
        <Text style={{fontSize: 20, fontWeight: '400'}}>Medicine</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    borderColor: theme.colors.grey,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 35,
    width: '47%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  topBar: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
});
export default NGOCategory;
