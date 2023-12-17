import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {authLoad} from '../../../redux/actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import {notification} from '../../../redux/actions/home';
const theme = {
  colors: {
    primary: '#1CB5FD',
    grey: '#9B9B9B',
    black: '#FFF',
  },
};

// PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)

const FoodOutlet_Notification = ({navigation}) => {
  // const getFCMToken = async () => {
  //   try {
  //     const token = await messaging().getToken();
  //     console.log('******************************************');
  //     console.log('FCM Token:', token);
  //     console.log('******************************************');
  //   } catch (error) {
  //     console.error('Error getting FCM token:', error);
  //   }
  // };
  // console.log('====================================');
  // console.log(getFCMToken());
  // console.log('====================================');
  // const fcm_token = getFCMToken();
  // var raw = JSON.stringify({
  //   user_id: loginData.data._id,
  //   fcm_token: fcm_token,
  // });
  // console.log(raw);
  // dispatch(authLoad(true));

  // dispatch(notification(raw, onSuccess, onError));

  // const {authLoading, loginData} = useSelector(state => state.auth);

  // const dispatch = useDispatch();

  // const onSuccess = val => {
  //   console.log('val.............');
  //   console.log(val);
  //   // navigation.navigate('FoodStack', {
  //   //   screen: 'Donation Done',
  //   // });

  //   Alert.alert(
  //     val.status === 'success' ? 'Success' : 'Error',
  //     val.status === 'success'
  //       ? val.message
  //       : val.message || val.message.message,
  //     [
  //       {
  //         text: 'OK',
  //         onPress: () => {
  //           console.log('OK Pressed');
  //           val.status === 'success';
  //           // &&
  //           // navigation.navigate('FoodStack', {
  //           //   screen: 'Donation Done',
  //           // });
  //         },
  //       },
  //     ],
  //     {cancelable: false},
  //   );
  //   dispatch(authLoad(false));
  // };
  // const onError = err => {
  //   dispatch(authLoad(false));
  //   console.log(err);
  // };

  useEffect(
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    }),
  );
  const [noOfNotifications, setNoOFNotifications] = useState(1);
  const Data = [
    {
      id: 1,
      text: 'Your Request has been successful. Now my team will come and take it',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <View style={styles.topBar}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>Notifications</Text>
      </View>
      <View style={{marginTop: 17}}>
        <FlatList
          data={Data}
          renderItem={({item}) => (
            <View style={styles.notification}>
              <Text style={{width: '85%'}}>{item.text}</Text>
              <View style={styles.innerNotification}>
                <Text style={{color: 'white', fontWeight: '600'}}>
                  {noOfNotifications}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
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
  notification: {
    backgroundColor: '#E7F8FF',
    padding: 15,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: theme.colors.grey,
  },
  innerNotification: {
    position: 'absolute',
    bottom: 5,
    right: 15,
    backgroundColor: theme.colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});
export default FoodOutlet_Notification;
