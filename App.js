import React, {useEffect, useState} from 'react';
import MainNav from './src/Navigations/mainNav';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persister} from './src/redux/store';
import {SafeAreaView} from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('******************************************');
//   console.log('Message handled in the background!', remoteMessage);
//   console.log('******************************************');
// });

const App = () => {
  useEffect(() => {
    console.log('flanra()');
    flanra();
  }, []);

  const flanra = async () => {
    console.log('===>.......................');
    const token = await messaging().getToken();
    console.log('ttokenn.......................');
    console.log(token);
  };
  useEffect(() => {
    firebase.messaging().onMessage(response => {
      console.log(JSON.stringify(response));
      console.log(JSON.stringify(response));
      showNotification(response.notification);
    });
    PushNotification.configure({
      // Other configuration options
      onNotificationOpened: notification => {
        // Handle the notification
        console.log('OPENED:.......', notification);
      },
    });
    // firebase.notifications().onNotificationOpened(response => {
    //   // do something
    // });
  }, []);

  const showNotification = notification => {
    PushNotification.localNotification({
      channelId: 'fcm_fallback_notification_channel',
      title: notification.title,
      message: notification.body,
    });
  };
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <PersistGate persistor={persister}>
          <MainNav />
        </PersistGate>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
