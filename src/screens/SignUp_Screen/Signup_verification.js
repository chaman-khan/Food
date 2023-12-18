import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {styles} from './Signup_verification_styles';
import ImagePicker from 'react-native-image-crop-picker';
import {useDispatch, useSelector} from 'react-redux';
import {authLoad, submitCertificates} from '../../redux/actions/auth';
import {useFocusEffect} from '@react-navigation/native';

const Singnup_verification = ({navigation}) => {
  const [regNo, setRegNo] = useState(null);
  const [regError, setRegError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const {authLoading, loginData} = useSelector(state => state.auth);

  const Handle_Send = () => {
    if (!regNo) {
      setRegError(true);
    } else {
      setRegError(false);
    }

    if (regError || !selectedImage) {
      Alert.alert(
        'Warning',
        'Please enter complete and valid details',
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
        user_id: loginData.data.user_id,
        registration_no: regNo,
        certificate: selectedImage,
      });
      console.log(raw);
      dispatch(submitCertificates(raw, onSuccess, onError));

      // Alert.alert(
      //   'Successfully Send',
      //   'Your request has been successfully sent to admin you will be notify after verification.',
      //   [
      //     {
      //       text: 'OK',
      //       onPress: () => console.log('OK Pressed'),
      //     },
      //   ],
      //   {cancelable: false},
      // );
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
            val.status === 'success' && navigation.navigate('SignupVerify');
          },
        },
      ],
      {cancelable: false},
    );
    navigation.navigate('Login');
  };
  const onError = err => {
    dispatch(authLoad(false));
    console.log(err);
  };

  const PickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setSelectedImage(image.path);
    });
  };

  // useFocusEffect(
  //   React.useCallback(() => {
  //     dispatch(authLoad(true));
  //     dispatch(NGOgetAllUserRequests(loginData, onSuccess, onError));
  //   }, []),
  // );

  // const onSuccess = val => {
  //   console.log(val);
  //   dispatch(authLoad(false));
  //   setData(val.data);
  // };
  // const onError = err => {
  //   dispatch(authLoad(false));
  //   console.log(err);
  // };

  return (
    <View style={styles.Display}>
      <View style={styles.Header_Box}>
        <Image
          source={require('../../Images/verification.png')}
          style={{width: 76, height: 76}}
        />
        <Text style={styles.Header_text1}>Become a Verified User.</Text>
        <Text style={styles.Header_text2}>
          To confirm your account, kindly upload a picture of Certificates.
          After approval from the Admin, you will receive a Confirmation Message
        </Text>
      </View>
      <View style={styles.Registration_No_Box}>
        <Text style={styles.Top_Text}>NGO Registration No</Text>
        <View style={styles.NGO_Input_Container}>
          <Image
            source={require('../../Images/person.png')}
            style={styles.UserIcon}
          />
          <TextInput
            maxLength={15}
            keyboardType="numeric"
            onChangeText={Text => setRegNo(Text)}
            placeholderTextColor={'#818181'}
            style={styles.No_input}
            placeholder="Registration no"
          />
        </View>
      </View>
      <View style={styles.Certificate_Box}>
        <Text style={styles.Top_Text}>Certificates</Text>
        <View style={styles.Add_Image_Box}>
          <TouchableOpacity
            style={{width: 55, height: 55, marginTop: 50}}
            onPress={PickImage}>
            <Image
              source={
                selectedImage
                  ? {uri: selectedImage}
                  : require('../../Images/add-file.png')
              }
              style={{width: 60, height: 60}}
            />
          </TouchableOpacity>
          <Text style={styles.Certificate_text}>
            (Please upload a picture of Certificates where your image is clearly
            visible from the front.)
          </Text>
        </View>
      </View>
      <View style={styles.Button_Box}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.Button}
          onPress={Handle_Send}>
          <Text style={styles.Send_Text}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Singnup_verification;
