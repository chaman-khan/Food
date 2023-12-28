import React, {useState, useEffect} from 'react';
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
  Dimensions,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {styles} from './Signup_Styles';
import {useDispatch, useSelector} from 'react-redux';
import {baseUrl} from '../../constants/constants';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {authLoad, registerUser} from '../../redux/actions/auth';
import {PermissionsAndroid} from 'react-native';
import {Loading} from '../../components/loading';
import {getAllCategories} from '../../redux/actions/home';

const {width} = Dimensions.get('screen');
const data = [
  {label: 'Local Donor', value: 'user'},
  {label: 'NGO', value: 'ngo'},
  {label: 'Food Outlet', value: 'restaurant'},
];

const SignUp_Screen = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [userType, setUserType] = useState('');
  const [value, setValue] = useState('');
  const [valueError, setValueError] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [userName, setUsername] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [phone_numberError, setPhone_numberError] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('Select Location');
  const [showMap, setShowMap] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setlongitude] = useState();
  const [user_id, setUser_id] = useState('');
  const dispatch = useDispatch();

  const [latitudeDelta, setLatitudeDelta] = useState(0.0922);
  const [longitudeDelta, setLongitudeDelta] = useState(0.0421);

  const {authLoading} = useSelector(state => state.auth);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  // const handleButtonPress = async () => {
  //   try {
  //     if (Platform.OS === 'android') {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         {
  //           title: 'Location Permission',
  //           message: 'App needs access to your location for some features.',
  //           buttonNeutral: 'Ask Me Later',
  //           buttonNegative: 'Cancel',
  //           buttonPositive: 'OK',
  //         },
  //       );

  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         console.log('Location permission granted');
  //         // Now you can use Geolocation to get the current position
  //         getCurrentLocation();
  //         setShowMap(true);
  //       } else {
  //         console.log('Location permission denied');
  //       }
  //     } else {
  //       getCurrentLocation();
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };
  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(info => {
      console.log(info);
      setLatitude(info.coords.latitude);
      setlongitude(info.coords.longitude);
    });
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLatitude(info.coords.latitude);
      setlongitude(info.coords.longitude);
    });
    getCurrentLocation();
    // dispatch(getAllCategories(loginData, categorySuccess, categoryError));
    dispatch(authLoad(false));
  }, []);
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
    } else if (value !== 'user') {
      dispatch(authLoad(true));

      var raw = JSON.stringify({
        fullName: name,
        username: userName,
        email: email,
        password: password,
        location: 'Pakistan',
        latitude: latitude,
        longitude: longitude,
        role: value,
      });
      console.log(raw);
      dispatch(registerUser(raw, onSuccess1, onError1));
    } else {
      dispatch(authLoad(true));

      var raw = JSON.stringify({
        fullName: name,
        username: userName,
        email: email,
        password: password,
        location: 'Pakistan',
        latitude: latitude,
        longitude: longitude,
        role: value,
      });
      console.log(raw);
      dispatch(registerUser(raw, onSuccess, onError));
    }
  };

  const onSuccess = val => {
    dispatch(authLoad(false));
    console.log(
      '==========vaaaaaaaaaaaaaaaaaaaaaalllllllllllllllllllllllllllllllllll==========================',
    );
    console.log(val);
    console.log(
      '==========vaaaaaaaaaaaaaaaaaaaaaalllllllllllllllllllllllllllllllllll==========================',
    );

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
            val.status === 'success' && navigation.navigate('SignupVerify');
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
  const onSuccess1 = val => {
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
            val.status === 'success' &&
              navigation.navigate('Singnup_verification', {user_id});
          },
        },
      ],
      {cancelable: false},
    );
  };
  const onError1 = err => {
    dispatch(authLoad(false));
    console.log(err);
  };
  const onRegionChange = region => {
    setLatitude(region.latitude);
    setlongitude(region.longitude);
    setLatitudeDelta(region.latitudeDelta);
    setLongitudeDelta(region.longitudeDelta);
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
                    console.log(item);
                    setValue(item.value);
                    setUserType(item.label);
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
                  onChangeText={Text => setUsername(Text)}
                  placeholderTextColor={'#818181'}
                  // placeholderStyle={styles.placeholderStyle}
                  style={styles.User_input}
                  placeholder="User name"
                  value={userName}
                />
              </View>
            </View>
            <View style={styles.User_Box}>
              <Text style={styles.Head_Texts}>Full Name</Text>
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
                  value={name}
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
                  value={phone_number}
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
                  value={email}
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
                  value={password}
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
              <TouchableOpacity
                style={styles.Location}
                activeOpacity={0.5}
                onPress={() => {
                  setShowMap(true);
                }}>
                <Text style={styles.Location_field_text}>
                  {currentLocation}
                </Text>
                <Image
                  //   source={require('../../Images/Location_mark.png')}
                  source={require('../../Images/search.png')}
                  style={{width: 18, height: 18, marginRight: 20}}></Image>
              </TouchableOpacity>
            </View>

            {value == 'user' ? (
              <View style={styles.Button_Box}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.Button}
                  // onPress={handleSignUp}
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
        {showMap && (
          <View
            style={{
              height: '100%',
              width: width,
              zIndex: 100,
              position: 'absolute',
              alignSelf: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <MapView
              // provider={PROVIDER_GOOGLE}
              onRegionChange={onRegionChange}
              style={{height: '50%', width: '100%', backgroundColor: 'red'}}
              initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: latitudeDelta,
                longitudeDelta: longitudeDelta,
              }}>
              <Marker
                coordinate={{
                  latitude: latitude,
                  longitude: longitude,
                }}
                title="Your Location"
              />
            </MapView>
            <View style={styles.Button_Box}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.Button}
                onPress={() => {
                  setShowMap(false);
                  setCurrentLocation('Location picked');
                }}>
                <Text style={styles.Sign_Up_Text}>Pick location</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <Loading visible={authLoading} />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignUp_Screen;
