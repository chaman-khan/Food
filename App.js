import React from 'react';
import MainNav from './src/Navigations/mainNav';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persister} from './src/redux/store';

export default App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <MainNav />
      </PersistGate>
    </Provider>
  );
};
