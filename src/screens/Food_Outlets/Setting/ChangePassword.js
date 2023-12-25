import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../theme/theme';
import {useDispatch, useSelector} from 'react-redux';
import {changePassword} from '../../../redux/actions/home';
import {authLoad} from '../../../redux/actions/auth';
import {Loading} from '../../../components/loading';

const ChangeFoodPassword = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  const {authLoading, loginData} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleconfirm = () => {
    var raw = JSON.stringify({
      password: password,
      confirm_password: confirmPassword,
    });
    console.log(raw);

    if (password === '' || confirmPassword === '') {
      Alert.alert(
        'Error',
        'Fill all fields',
        [
          {
            text: 'OK',
            onPress: () => {
              console.log('OK Pressed');
            },
          },
        ],
        {cancelable: false},
      );
    } else if (password !== confirmPassword) {
      Alert.alert(
        'Error',
        'Passwords donot match.',
        [
          {
            text: 'OK',
            onPress: () => {
              console.log('OK Pressed');
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      dispatch(authLoad(true));
      dispatch(changePassword(loginData, raw, onSuccess, onError));
    }
  };

  const onSuccess = val => {
    console.log('val.............');
    console.log(val);
    navigation.goBack();
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
    <View style={{width: '95%', alignSelf: 'center'}}>
      <View style={styles.topBar}>
        <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
          Change Password
        </Text>
      </View>
      <View style={{marginTop: 60, gap: 20}}>
        <Text style={{fontSize: 25, fontWeight: '400', color: 'black'}}>
          Change Password
        </Text>
        <Text style={{lineHeight: 20, marginBottom: 20, color: 'black'}}>
          You can choose strong and new Password.
        </Text>
      </View>
      <View style={styles.Password_Box}>
        <Text style={styles.Head_Texts}>New Password</Text>
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
            placeholder="New Password"
            value={password}
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
      <View style={styles.Password_Box}>
        <Text style={styles.Head_Texts}>Confirm Password</Text>
        <View style={styles.User_Input_Container}>
          <Image
            source={require('../../../Images/password.png')}
            style={styles.UserIcon}
          />
          <TextInput
            onChangeText={Text => setConfirmPassword(Text)}
            secureTextEntry={!passwordVisible1}
            placeholderTextColor={'#818181'}
            style={styles.Password_input}
            placeholder="Confirm Password"
            value={confirmPassword}
          />
          <TouchableOpacity
            style={styles.ToggleButton}
            onPress={togglePasswordVisibility1}>
            <Image
              style={{width: 18, height: 18, marginRight: 20}}
              source={
                passwordVisible1
                  ? require('../../../Images/eye-on.png')
                  : require('../../../Images/eye-off.png')
              }
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => handleconfirm()}>
        <Text style={{color: 'white'}}>Save Change</Text>
      </TouchableOpacity>

      <Loading visible={authLoading} />
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

export default ChangeFoodPassword;
