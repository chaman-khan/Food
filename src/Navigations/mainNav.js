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
import DeleteAccount from '../screens/Local_Donor/Setting/DeleteAccount';
import ChangePassword from '../screens/Local_Donor/Setting/ChangePassword';
import Terms from '../screens/Local_Donor/Setting/Terms';
import FAQs from '../screens/Local_Donor/Setting/FAQs';
import AboutUs from '../screens/Local_Donor/Setting/AboutUs';
import ChangeEmail from '../screens/Local_Donor/Setting/ChangeEmail';
import ChangeLocation from '../screens/Local_Donor/Setting/ChangeLocation';
import NGOBottomTab from './tabs/ngoBottomTab';
import DonorStack from './stacks/donorStack';
import NGOStack from './stacks/ngoStack';

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
        <Stack.Screen name="DonorStack" component={DonorStack} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="NGOStack" component={NGOStack} />
        <Stack.Screen name="NGOBottomTab" component={NGOBottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNav;
