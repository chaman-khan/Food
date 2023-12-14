import React, {useEffect} from 'react';
import MainNav from './src/Navigations/mainNav';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persister} from './src/redux/store';
import {SafeAreaView} from 'react-native';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

const App = () => {
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
