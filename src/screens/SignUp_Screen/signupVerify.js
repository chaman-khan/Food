import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {authLoad, verifyAccount, verifyOTP} from '../../redux/actions/auth';
import {Loading} from '../../components/loading';
// import verification from '../../Images/verification.svg'
const SignupVerify = ({navigation}) => {
  const [verificationCode, setVerificationCode] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
  ]);
  const {authLoading} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const inputRefs = useRef([]);
  const handleVerificationCodeChange = (text, index) => {
    // Ensure only numeric input
    if (/^[0-9]+$/.test(text) || text === '') {
      const newCode = [...verificationCode];
      newCode[index] = text;
      setVerificationCode(newCode);

      // Move to the next input
      if (text !== '' && index < verificationCode.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleVerifyCode = () => {
    const code = verificationCode.join('');
    if (code.length === 6) {
      dispatch(authLoad(true));

      var raw = JSON.stringify({
        otp: '4033',
      });

      console.log(raw);
      dispatch(verifyAccount(raw, onSuccess, onError));
    } else {
      Alert.alert('Incorrect', 'Please enter a 6-digit verification code.');
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
        <Image source={require('../../Images/verification.png')} />
      </View>
      <View style={styles.Text_Box}>
        <Text style={styles.Text1}>Verification</Text>
        <Text style={styles.Text2}>
          Enter the 6 digit code that you recieved on your Email.
        </Text>
      </View>
      <View style={styles.Input_Box}>
        <View style={styles.codeContainer}>
          {verificationCode.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputRefs.current[index] = ref)}
              style={styles.input}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={text => handleVerificationCodeChange(text, index)}
            />
          ))}
        </View>
      </View>
      <View style={styles.Button_Box}>
        <TouchableOpacity
          onPress={handleVerifyCode}
          style={styles.Button}
          activeOpacity={0.7}>
          <Text style={styles.Verify_Text}>Verify</Text>
        </TouchableOpacity>
      </View>
      <Loading visible={authLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  Display: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  Png_Box: {
    // borderWidth: 2,
    width: 78,
    height: 78,
    borderColor: '#000000',
    marginTop: 86,
  },
  Text_Box: {
    width: 290,
    height: 95,
    // borderWidth:1,
    marginTop: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Text1: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: 0.28,
    lineHeight: 24,
  },
  Text2: {
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    letterSpacing: 0.28,
    lineHeight: 21,
    marginTop: 21,
  },
  Input_Box: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
    marginTop: 50,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // marginBottom: 20,
    alignItems: 'center',
    // borderWidth:1
  },
  input: {
    height: 48,
    width: 48,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    textAlign: 'center',
    marginHorizontal: 5,
    fontSize: 18,
    marginHorizontal: 8,
    borderRadius: 12,
    backgroundColor: '#F8F8F8',
    color: '#000000',
    fontSize: 12,
  },
  Button_Box: {
    // borderWidth:2,
    width: '100%',
    height: 48,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    width: 376,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1CB5FD',
    borderRadius: 11,
  },
  Verify_Text: {
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
export default SignupVerify;
