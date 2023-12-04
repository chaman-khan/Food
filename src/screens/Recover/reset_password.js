import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './reset_password_styles';
import {useDispatch, useSelector} from 'react-redux';
import {authLoad, resetPassword} from '../../redux/actions/auth';
import {Loading} from '../../components/loading';
// import verification from '../../Images/verification.svg'
const Reset_Password_Screen = ({navigation, route}) => {
  const {otp} = route.params;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const {authLoading} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    dispatch(authLoad(false));
  }, []);
  const Handle_update = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(true);
      Alert.alert(
        'Password Error',
        'Password must be at least 6 characters long and contain at least one digit, one letter, and one special character.',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        {cancelable: false},
      );
      return;
    } else {
      setPasswordError(false);
      dispatch(authLoad(true));

      var raw = JSON.stringify({
        otp: otp,
        password: password,
        confirm_password: password,
      });

      console.log(raw);
      dispatch(resetPassword(raw, onSuccess, onError));
    }
  };
  const onSuccess = val => {
    console.log(val);
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
            val.status === 'success' && navigation.navigate('Login');
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
    <View style={styles.Display}>
      <View style={styles.Png_Box}>
        <Image source={require('../../Images/privacy.png')} />
      </View>
      <View style={styles.Text_Box}>
        <Text style={styles.Text1}>Reset Password</Text>
        <Text style={styles.Text2}>
          Now you will set a new authentic password.
        </Text>
      </View>
      <View style={styles.Password_Box}>
        <Text style={styles.User_Password_Texts}>New Password</Text>
        <View style={styles.User_Input_Container}>
          <Image
            source={require('../../Images/password.png')}
            style={styles.Password_png}
          />
          <TextInput
            onChangeText={Text => setPassword(Text)}
            secureTextEntry={!passwordVisible}
            placeholderTextColor={'#818181'}
            style={styles.Password_input}
            placeholder="Enter new Password"
          />
          <TouchableOpacity
            style={styles.ToggleButton}
            onPress={togglePasswordVisibility}>
            <Image
              style={{width: 18, height: 18}}
              source={
                passwordVisible
                  ? require('../../Images/eye-on.png')
                  : require('../../Images/eye-off.png')
              }
            />
          </TouchableOpacity>
        </View>
        {passwordError ? (
          <Text style={styles.Error_Text}>* Enter valid password</Text>
        ) : null}
      </View>
      <View style={styles.Button_Box}>
        <TouchableOpacity
          style={styles.Button}
          onPress={Handle_update}
          activeOpacity={0.7}>
          <Text style={styles.Verify_Text}>Update</Text>
        </TouchableOpacity>
      </View>
      <Loading visible={authLoading} />
    </View>
  );
};
export default Reset_Password_Screen;
