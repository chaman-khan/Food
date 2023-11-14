import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../theme/theme';

const ChangeLocation = () => {
  const [location, setLocation] = useState('Valencia Town');

  return (
    <View style={{width: '95%', alignSelf: 'center'}}>
      <View style={styles.topBar}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>Change Email</Text>
      </View>
      <View style={{marginTop: 40, gap: 20}}>
        <Text style={{fontSize: 25, fontWeight: '450', color: 'black'}}>
          Change Your Location
        </Text>
        <Text style={{lineHeight: 20, marginBottom: 20, color: 'black'}}>
          Add here your current location for better approach
        </Text>
      </View>
      <View style={styles.User_Box}>
        <Text style={styles.Head_Texts}>Location</Text>
        <View style={styles.User_Input_Container}>
          <TextInput
            onChangeText={Text => setLocation(Text)}
            placeholderTextColor={'#818181'}
            // placeholderStyle={styles.placeholderStyle}
            style={styles.User_input}
            placeholder="Location"
            value={location}
          />
          <Image source={require('../../../Images/search.png')} />
        </View>
      </View>
      <View style={styles.button}>
        <Text style={{color: 'white'}}>Save Changes</Text>
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
  User_Box: {
    marginTop: responsiveScreenHeight(1.6),
    // borderWidth:2,
    height: responsiveScreenHeight(9),
    width: '100%',
  },
  Head_Texts: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: responsiveScreenFontSize(1.65),
    color: '#000000',
    marginBottom: 6,
  },
  User_Input_Container: {
    borderWidth: 1,
    borderRadius: 12,
    width: '100%',
    height: responsiveScreenHeight(5.5),
    borderColor: '#E4E4E4',
    backgroundColor: '#F8F8F8',
    flexDirection: 'row',
    alignItems: 'center',
    // paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  UserIcon: {
    width: responsiveScreenWidth(5), // Set the width as needed
    height: responsiveScreenHeight(2.3), // Set the height as needed
    marginLeft: responsiveScreenWidth(1.2),
  },
  User_input: {
    // borderWidth:2,
    height: responsiveScreenHeight(5),
    width: '91%',
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: 'Poppins',
    color: '#000000',
    fontWeight: '400',
  },
  button: {
    marginTop: 50,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
  },
});

export default ChangeLocation;
