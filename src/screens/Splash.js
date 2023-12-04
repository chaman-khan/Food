import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {theme} from '../theme/theme';
import {useDispatch, useSelector} from 'react-redux';
import {authLoad} from '../redux/actions/auth';

const Splash = ({navigation}) => {
  const {loggedIn, loginData} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate('BottomTab');
      dispatch(authLoad(false));
      if (loggedIn) {
        loginData?.data?.role === 'user'
          ? navigation.navigate('BottomTab')
          : loginData?.data?.role === 'ngo'
          ? navigation.navigate('NGOBottomTab')
          : navigation.navigate('FoodBottomTab');
      } else navigation.navigate('OnBoarding');
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
