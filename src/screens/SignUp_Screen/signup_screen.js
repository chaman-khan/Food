import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {styles} from './Signup_Styles';
const data = [
  {label: 'Local Donor', value: '1'},
  {label: 'NGO', value: '2'},
  {label: 'Food Outlet', value: '3'},
];

const SignUp_Screen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [valueError, setValueError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [phone_number, setPhone_number] = useState('');
  const [phone_numberError, setPhone_numberError] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSignUp = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;
    const emailRegex =
      /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/;

    if (!value) {
      setValueError(true);
    } else {
      setValueError(false);
    }
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!phone_number) {
      setPhone_numberError(true);
    } else {
      setPhone_numberError(false);
    }

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
    }
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
    }
    if (!value || !name || !phone_number || !email || !password) {
      Alert.alert(
        'Warning',
        'Please enter complete details',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        {cancelable: false},
      );
    } else if (value != '1') {
      navigation.navigate('SignUp Verification');
    } else {
      // console.log(value, name, phone_number, email, password)
      Alert.alert(
        'Successfully Signed up',
        'You have successfully signed up. Press on Sign in button to continue.',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        {cancelable: false},
      );
      // navigation.navigate("Login")
    }
  };

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: 'blue'}]}>
          Dropdown label
        </Text>
      );
    }
    return null;
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
            <View style={styles.Png_Box}>
              <Image
                source={require('../../Images/heart.png')}
                style={styles.png}
              />
            </View>
            <View style={styles.Text_Box}>
              <Text style={styles.Text1}>Sign Up</Text>
              <Text style={styles.Text2}>
                Join the Food Care app and Never Miss a Celebration!
              </Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.Head_Texts}>Select Type</Text>
              <View style={styles.container_Box}>
                <Image
                  source={require('../../Images/User.png')}
                  style={styles.UserIcon}
                />
                <Dropdown
                  style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select Type' : '...'}
                  value={value}
                  itemTextStyle={styles.DropDown_Item}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                  }}
                />
              </View>
            </View>
            <View style={styles.User_Box}>
              <Text style={styles.Head_Texts}>User Name</Text>
              <View style={styles.User_Input_Container}>
                <Image
                  source={require('../../Images/User.png')}
                  style={styles.UserIcon}
                />
                <TextInput
                  onChangeText={Text => setName(Text)}
                  placeholderTextColor={'#818181'}
                  // placeholderStyle={styles.placeholderStyle}
                  style={styles.User_input}
                  placeholder="Full name"
                />
              </View>
            </View>
            <View style={styles.User_Box}>
              <Text style={styles.Head_Texts}>Phone Number</Text>
              <View style={styles.User_Input_Container}>
                <Image
                  source={require('../../Images/phone.png')}
                  style={styles.UserIcon}
                />
                <TextInput
                  maxLength={14}
                  keyboardType="numeric"
                  onChangeText={Text => setPhone_number(Text)}
                  placeholderTextColor={'#818181'}
                  // placeholderStyle={styles.placeholderStyle}
                  style={styles.User_input}
                  placeholder="Phone Number"
                />
              </View>
            </View>
            <View style={styles.User_Box}>
              <Text style={styles.Head_Texts}>Email</Text>
              <View style={styles.User_Input_Container}>
                <Image
                  source={require('../../Images/email.png')}
                  style={styles.UserIcon}
                />
                <TextInput
                  onChangeText={Text => setEmail(Text)}
                  placeholderTextColor={'#818181'}
                  // placeholderStyle={styles.placeholderStyle}
                  style={styles.User_input}
                  placeholder="Email"
                />
              </View>
            </View>
            <View style={styles.Password_Box}>
              <Text style={styles.Head_Texts}>Password</Text>
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
            </View>
            <View style={styles.Location_Box}>
              <Text style={styles.Head_Texts}>Location</Text>
              <TouchableOpacity style={styles.Location} activeOpacity={0.5}>
                <Text style={styles.Location_field_text}>Location</Text>
                <Image
                  //   source={require('../../Images/Location_mark.png')}
                  source={require('../../Images/search.png')}
                  style={{width: 18, height: 18, marginRight: 20}}></Image>
              </TouchableOpacity>
            </View>
            {value == '1' ? (
              <View style={styles.Button_Box}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.Button}
                  onPress={handleSignUp}>
                  <Text style={styles.Sign_Up_Text}>Sign up</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.Button_Box}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.Button}
                  onPress={handleSignUp}>
                  <Text style={styles.Sign_Up_Text}>Next</Text>
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.SignIn_Box}>
              <Text style={styles.Already_Text}>Already have an account?</Text>
              <TouchableOpacity
                style={styles.SignIn_Button}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.SignIn_Text}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignUp_Screen;
