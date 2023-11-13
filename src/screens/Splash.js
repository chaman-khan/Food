import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {theme} from '../theme/theme';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      console.log('helllooooo');
      navigation.navigate('OnBoarding');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={require('../Images/logo.png')}
        style={{width: 120, height: 120, resizeMode: 'contain'}}
      />
    </View>
  );
};

export default Splash;
