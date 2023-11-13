import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Recover_Screen from '../../screens/Recover/recover';
import Verification_Screen from '../../screens/Recover/verification';
import Reset_Password_Screen from '../../screens/Recover/reset_password';

function RecoverStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Recover Screen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Recover Screen" component={Recover_Screen} />
      <Stack.Screen
        name="Verification Screen"
        component={Verification_Screen}
      />
      <Stack.Screen
        name="Reset Password Screen"
        component={Reset_Password_Screen}
      />
    </Stack.Navigator>
  );
}

export default RecoverStack;
