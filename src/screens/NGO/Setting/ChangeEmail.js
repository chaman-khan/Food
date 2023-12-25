import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {theme} from '../../../theme/theme';
import {useDispatch, useSelector} from 'react-redux';
import {changeEmail} from '../../../redux/actions/home';
import { Loading } from '../../../components/loading';

const ChangeEmail = ({navigation}) => {
  const [email, setEmail] = useState('');
  const {authLoading, loginData} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleconfirm = () => {
    var raw = JSON.stringify({
      email: email,
    });
    console.log(raw);

    if (email === '') {
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
    } else {
      dispatch(authLoad(true));
      dispatch(changeEmail(loginData, raw, onSuccess, onError));
    }
  };

  const onSuccess = val => {
    console.log('val.............');
    console.log(val);

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
        <Text style={{fontSize: 16, fontWeight: '500'}}>Change Email</Text>
      </View>
      <View style={{marginTop: 40, gap: 20}}>
        <Text style={{fontSize: 25, fontWeight: '400', color: 'black'}}>
          Change Email Address
        </Text>
        <Text style={{lineHeight: 20, marginBottom: 20, color: 'black'}}>
          Write a new and authentic Ethentic Email Address.
        </Text>
      </View>
      <View style={styles.User_Box}>
        <Text style={styles.Head_Texts}>Email</Text>
        <View style={styles.User_Input_Container}>
          <Image
            source={require('../../../Images/email.png')}
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
      <TouchableOpacity style={styles.button} onPress={handleconfirm}>
        <Text style={{color: 'white'}}>Save Changes</Text>
      </TouchableOpacity>
      <Loading visible={authLoading}/>
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

export default ChangeEmail;
