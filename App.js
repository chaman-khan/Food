import React, {useEffect} from 'react';
import MainNav from './src/Navigations/mainNav';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persister} from './src/redux/store';
import {SafeAreaView} from 'react-native';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('******************************************');
  console.log('Message handled in the background!', remoteMessage);
  console.log('******************************************');
});

const App = () => {
  useEffect(() => {
    const getFCMToken = async () => {
      try {
        const token = await messaging().getToken();
        console.log('******************************************');
        console.log('FCM Token:', token);
        console.log('******************************************');
      } catch (error) {
        console.error('Error getting FCM token:', error);
      }
    };

    getFCMToken();
  }, []);
 
//   // Remove this method to stop OneSignal Debugging
// OneSignal.Debug.setLogLevel(LogLevel.Verbose);

// // OneSignal Initialization
// OneSignal.initialize("9baa5abf-fdcb-4a4e-8ebf-1514c1abad06");

// // requestPermission will show the native iOS or Android notification permission prompt.
// // We recommend removing the following code and instead using an In-App Message to prompt for notification permission
// OneSignal.Notifications.requestPermission(true);

// // Method for listening for notification clicks
// OneSignal.Notifications.addEventListener('click', (event) => {
//   console.log('OneSignal: notification clicked:', event);
// });
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
