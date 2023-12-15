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
