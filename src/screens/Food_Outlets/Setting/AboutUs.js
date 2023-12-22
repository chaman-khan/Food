import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const AboutUsFood = () => {
  return (
    <View style={{width: '95%', alignSelf: 'center'}}>
      <View style={styles.topBar}>
        <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>About Us</Text>
      </View>
      <View style={{marginTop: 40, gap: 20}}>
        <Text style={{fontSize: 25, fontWeight: '450', color: 'black'}}>
          About Us
        </Text>
        <Text style={{lineHeight: 20, marginBottom: 70, color: 'black'}}>
          Once you delete this account, its data cannot be recovered. Areyou
          sure want to proceed?
        </Text>
      </View>
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
});

export default AboutUsFood;
