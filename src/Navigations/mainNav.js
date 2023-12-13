import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import OnBording from '../screens/OnBording/onbording';
import LoginScreen from '../screens/Login_Screen/login_screen';
import SignUp_Screen from '../screens/SignUp_Screen/signup_screen';
import RecoverStack from './stacks/recoverStack';
import BottomTab from './tabs/bottomTab';
import NGOBottomTab from './tabs/ngoBottomTab';
import DonorStack from './stacks/donorStack';
import NGOStack from './stacks/ngoStack';
import FoodBottomTab from './tabs/foodBottomTab';
import FoodStack from './stacks/foodOutletStack';
import Singnup_verification from '../screens/SignUp_Screen/Signup_verification';
import Reset_Password_Screen from '../screens/Recover/reset_password';
import SignupVerify from '../screens/SignUp_Screen/signupVerify';

function MainNav() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="OnBoarding" component={OnBording} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Sign Up" component={SignUp_Screen} />
        <Stack.Screen
          name="Singnup_verification"
          component={Singnup_verification}
        />

        <Stack.Screen
          name="Reset_Password_Screen"
          component={Reset_Password_Screen}
        />
        <Stack.Screen name="SignupVerify" component={SignupVerify} />
        <Stack.Screen name="RecoverStack" component={RecoverStack} />
        <Stack.Screen name="DonorStack" component={DonorStack} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="NGOStack" component={NGOStack} />
        <Stack.Screen name="NGOBottomTab" component={NGOBottomTab} />
        <Stack.Screen name="FoodStack" component={FoodStack} />
        <Stack.Screen name="FoodBottomTab" component={FoodBottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNav;
