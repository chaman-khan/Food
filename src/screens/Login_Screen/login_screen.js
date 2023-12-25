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
import {
  authLoad,
  loginManager,
  loginSuccess,
  loginUser,
} from '../../redux/actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import {Loading} from '../../components/loading';
const LoginScreen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const {authLoading} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleLogin = () => {
    if (!userName) {
      setUserNameError(true);
    } else {
      setUserNameError(false);
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
      dispatch(authLoad(true));

      var raw = JSON.stringify({
        username: userName,
        password: password,
      });
      console.log('raw;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;');
      console.log(raw);
      console.log(';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;raw');
      dispatch(loginUser(raw, onSuccess, onError));
    }
  };

  const onSuccess = val => {
    console.log('====================================');
    console.log(val);
    console.log('====================================');
    dispatch(authLoad(false));
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
            dispatch(loginSuccess(val));
            if (val.status === 'success' && val.isVerified === false) {
              navigation.navigate('SignupVerify');
            } else if (val.status === 'success') {
              val.data.role === 'user'
                ? navigation.navigate('BottomTab')
                : val.data.role === 'ngo'
                ? navigation.navigate('NGOBottomTab')
                : navigation.navigate('FoodBottomTab');
            }
          },
        },
      ],
      {cancelable: false},
    );
  };
  const onError = err => {
    dispatch(authLoad(false));
    console.log(err);
  };
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
              <View style={styles.Email_Box}>
                <Text style={styles.User_Password_Texts}>Username</Text>
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
              Don't have an account?{' '}
              <Text
                onPress={() => navigation.navigate('Sign Up')}
                style={styles.Register_Text}>
                Register Now
              </Text>
            </Text>
          </View>
        </ScrollView>
        <Loading visible={authLoading} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
