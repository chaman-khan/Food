import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../theme/theme';

const DeleteAccount = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <View style={{width: '95%', alignSelf: 'center'}}>
      <View style={styles.topBar}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>Delete Account</Text>
      </View>
      <View style={{marginTop: 60, gap: 50}}>
        <Text style={{fontSize: 25, fontWeight: '450', color: 'black'}}>
          Delete Acount!
        </Text>
        <Text style={{lineHeight: 20, marginBottom: 70, color: 'black'}}>
          Once you delete this account, its data cannot be recovered. Areyou
          sure want to proceed?
        </Text>
      </View>
      <View style={styles.Password_Box}>
        <Text style={styles.Head_Texts}>Password</Text>
        <View style={styles.User_Input_Container}>
          <Image
            source={require('../../../Images/password.png')}
            style={styles.UserIcon}
          />
          <TextInput
            onChangeText={Text => setPassword(Text)}
            secureTextEntry={!passwordVisible}
            placeholderTextColor={'#818181'}
            style={styles.Password_input}
            placeholder="Password"
          />
          <TouchableOpacity
            style={styles.ToggleButton}
            onPress={togglePasswordVisibility}>
            <Image
              style={{width: 18, height: 18, marginRight: 20}}
              source={
                passwordVisible
                  ? require('../../../Images/eye-on.png')
                  : require('../../../Images/eye-off.png')
              }
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={styles.button}>
        <Text style={{color: 'white'}}>Delete Account</Text>
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
  Password_Box: {
    height: responsiveScreenHeight(9),
    width: '100%',
    marginTop: responsiveScreenHeight(1.7),
  },
  Head_Texts: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: responsiveScreenFontSize(1.65),
    color: '#000000',
    marginLeft: responsiveScreenWidth(3),
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
    justifyContent: 'center',
  },
  UserIcon: {
    width: responsiveScreenWidth(5), // Set the width as needed
    height: responsiveScreenHeight(2.3), // Set the height as needed
    marginLeft: responsiveScreenWidth(1.2),
  },
  Password_input: {
    // borderWidth:1,
    height: responsiveScreenHeight(5),
    width: '80%',
    fontSize: responsiveScreenFontSize(1.5),
    fontFamily: 'Poppins',
    color: '#000000',
    fontWeight: '400',
  },
  ToggleButton: {
    width: responsiveScreenWidth(10.5),
    height: responsiveScreenHeight(5),
    // borderWidth:2,
    alignItems: 'center',
    justifyContent: 'center',
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

export default DeleteAccount;
