import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {styles} from './recover_style';
// import { TextInput } from 'react-native-gesture-handler';
// import { Text } from 'react-native-reanimated/lib/typescript/Animated';
const Recover_Screen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailEror, setEmailError] = useState(false);
  Handle_send = () => {
    const emailRegex =
      /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/;

    if (!emailRegex.test(email)) {
      setEmailError(true);
      Alert.alert(
        'Email Error',
        'Please enter a valid email address.',
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
      setEmailError(false);
      navigation.navigate('Verification Screen');
    }
  };
  return (
    <View style={styles.Display}>
      <View style={styles.Png_Box}>
        <Image
          style={styles.Png}
          source={require('../../Images/privacy.png')}
        />
      </View>
      <View style={styles.Text_Box}>
        <Text style={styles.Text1}>Forgot Password</Text>
        <Text style={styles.Text2}>
          Enter your Email we will send you 6 digit verification code.
        </Text>
      </View>
      <View style={styles.Email_Box}>
        <Text style={styles.Email_Text}>Email</Text>
        <View style={styles.Email_Input_Box}>
          <Image
            style={styles.Mail_png}
            source={require('../../Images/mail.png')}
          />
          <TextInput
            onChangeText={Text => setEmail(Text)}
            style={styles.Email_Inner_Input}
            placeholderTextColor={'#818181'}
            placeholder="Email"
          />
        </View>
        {emailEror ? (
          <Text style={styles.Error_Text}> * Enter valid email</Text>
        ) : null}
      </View>
      <View style={styles.Button_Box}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.Button}
          onPress={Handle_send}>
          <Text style={styles.Sign_In_Text}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Recover_Screen;
