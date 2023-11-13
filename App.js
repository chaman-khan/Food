import React, {useEffect} from 'react';
import MainNav from './src/Navigations/mainNav';
import {SafeAreaView} from 'react-native';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MainNav />
    </SafeAreaView>
  );
};
export default App;
