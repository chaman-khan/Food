import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  SafeAreaView,
  Alert,
} from 'react-native';
import styles from './Login_Styles';
import {loginManager} from '../../redux/actions/auth';
import {useDispatch} from 'react-redux';
const LoginScreen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const dispatch = useDispatch();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleLogin = () => {
    if (!userName) {
      setUserName(true);
    } else {
      setUserName(false);
    }
    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (userNameError || passwordError) {
      Alert.alert(
        'Warning',
        'Please enter a valid user name or password.',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        {cancelable: false},
      );
    } else {
      const data = {
        username: userName,
        password: password,
      };
      dispatch(loginManager(data, handleSuccess));
      navigation.navigate('BottomTab');
    }
    const handleSuccess = val => {
      console.log('response from api.................. =>');
      console.log(val);
      Alert.alert(
        val.status === 'failed' ? 'Error' : 'Success',
        val.message,
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        {cancelable: false},
      );
    };
  };
  // const handleLogin = () => {
  //   const emailRegex =
  //     /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/;

  //   if (!emailRegex.test(email)) {
  //     setEmailError(true);
  //   } else {
  //     setEmailError(false);
  //   }

  //   if (!password) {
  //     setPasswordError(true);
  //   } else {
  //     setPasswordError(false);
  //   }
  //   if (emailError || passwordError) {
  //     Alert.alert(
  //       'Warning',
  //       'Please enter a valid email or password.',
  //       [
  //         {
  //           text: 'OK',
  //           onPress: () => console.log('OK Pressed'),
  //         },
  //       ],
  //       {cancelable: false},
  //     );
  //   } else {
  //     const data = {
  //       username: nam,
  //       password: '12345678',
  //     };
  //     // navigation.navigate('NGOBottomTab');
  //     // return false;
  //   }
  //   // navigation.navigate('BottomTab');
  // };
  return (
    <KeyboardAvoidingView
      enabled={true}
      keyboardVerticalOffset={20}
      style={{flex: 1, backgroundColor: '#FFFFFF'}}
      behavior={Platform.OS === 'android' ? '' : 'height'}>
      <SafeAreaView
        style={{flex: 1, backgroundColor: '#FFFFFF'}}
        contentContainerStyle={{flexGrow: 1}}>
        <ScrollView>
          <View style={styles.Display}>
            <View style={styles.Hearder_Box}>
              <Image
                source={require('../../Images/heart.png')}
                style={styles.image}
              />
              <Text style={styles.Sign_In_Text}>Sign In</Text>
              <Text style={styles.Welcome_Text}>
                Welcome Sign In to Your Account.
              </Text>
            </View>
            <View style={styles.Input_Box}>
              {/* <View style={styles.Email_Box}>
                <Text style={styles.User_Password_Texts}>Email</Text>
                <View style={styles.User_Input_Container}>
                  <Image
                    source={require('../../Images/User.png')}
                    style={styles.UserIcon}
                  />
                  <TextInput
                    onChangeText={Text => setEmail(Text)}
                    placeholderTextColor={'#818181'}
                    style={styles.User_input}
                    placeholder="Email"
                  />
                </View>
                {emailError ? (
                  <Text style={styles.Error_Text}>* Enter valid Email</Text>
                ) : null}
              </View> */}
              <View style={styles.Email_Box}>
                <Text style={styles.User_Password_Texts}>Email</Text>
                <View style={styles.User_Input_Container}>
                  <Image
                    source={require('../../Images/User.png')}
                    style={styles.UserIcon}
                  />
                  <TextInput
                    onChangeText={Text => setUserName(Text)}
                    placeholderTextColor={'#818181'}
                    style={styles.User_input}
                    placeholder="User name"
                  />
                </View>
              </View>
              <View style={styles.Password_Box}>
                <Text style={styles.User_Password_Texts}>Password</Text>
                <View style={styles.User_Input_Container}>
                  <Image
                    source={require('../../Images/password.png')}
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
                          ? require('../../Images/eye-on.png')
                          : require('../../Images/eye-off.png')
                      }
                    />
                  </TouchableOpacity>
                </View>
                {passwordError ? (
                  <Text style={styles.Error_Text}>* Enter Valid password</Text>
                ) : null}
              </View>
            </View>
            <Text style={styles.Help_text}>
              You need help accessing the account Password?
              <Text
                onPress={() => navigation.navigate('RecoverStack')}
                style={styles.Recover_Text}>
                {' '}
                Recover it
              </Text>
            </Text>
            <View style={styles.Button_Box}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.Button}
                onPress={handleLogin}>
                <Text style={styles.Next_Text}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.Line_Box}>
              <View style={styles.Line}></View>
              <View style={styles.Line_Text_Box}>
                <Text style={styles.Line_Text}>or sign in with</Text>
              </View>
              <View style={styles.Line}></View>
            </View>
            <TouchableOpacity style={styles.Google_Box}>
              <Image
                style={styles.Google_Png}
                source={require('../../Images/google.png')}
              />
              <Text style={styles.Google_Text}>Google</Text>
            </TouchableOpacity>
            <Text style={styles.Account}>
              Don't have an account?
              <Text
                onPress={() => navigation.navigate('Sign Up')}
                style={styles.Register_Text}>
                {' '}
                Register Now
              </Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
