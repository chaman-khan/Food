import React, {useEffect, useState} from 'react';
import MainNav from './src/Navigations/mainNav';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persister} from './src/redux/store';
import {SafeAreaView} from 'react-native';

// messaging().setBackgroundMessageHandler(async remoteMessage => {
//   console.log('******************************************');
//   console.log('Message handled in the background!', remoteMessage);
//   console.log('******************************************');
// });

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
