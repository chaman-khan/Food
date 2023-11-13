import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import OnBording from '../screens/OnBording/onbording';
import LoginScreen from '../screens/Login_Screen/login_screen';
import SignUp_Screen from '../screens/SignUp_Screen/signup_screen';
import RecoverStack from './stacks/recoverStack';
import BottomTab from './tabs/bottomTab';
import DonationDetail from '../screens/Local_Donor/Request/donationDetail';
import Send_Donation from '../screens/Local_Donor/Request/sendDonation';
import Donation_Done from '../screens/Local_Donor/Request/donationDone';
import CreateRequest from '../screens/Local_Donor/Request/createRequest';
import MyDonation from '../screens/Local_Donor/Request/myDonation';
import MyDonationDetail from '../screens/Local_Donor/Request/myDonationDetail';

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
        <Stack.Screen name="RecoverStack" component={RecoverStack} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen
          name="Donation Details"
          component={DonationDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Send Donation"
          component={Send_Donation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Donation Done"
          component={Donation_Done}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Create Request"
          component={CreateRequest}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="My Donation"
          component={MyDonation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="My Donation Details"
          component={MyDonationDetail}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNav;
