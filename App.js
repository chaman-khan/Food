import React from 'react';
import MainNav from './src/Navigations/mainNav';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persister} from './src/redux/store';
import {SafeAreaView} from 'react-native';

export default App = () => {
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
