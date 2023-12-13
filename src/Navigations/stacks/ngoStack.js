import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Recover_Screen from '../../screens/Recover/recover';
import Verification_Screen from '../../screens/Recover/verification';
import Reset_Password_Screen from '../../screens/Recover/reset_password';
import CreateRequest from '../../screens/NGO/Request/createRequest';
import NGO_Request from '../../screens/NGO/Request/request';
import AllUserRequests from '../../screens/NGO/Request/allUserRequests';
import NGOCreateRequest from '../../screens/NGO/Request/createRequest';
import NGODonationDetail from '../../screens/NGO/Request/donationDetail';
import NGODonation_Done from '../../screens/NGO/Request/donationDone';
import NGOEditRequest from '../../screens/NGO/Request/editRequest';
import NGOMyDonation from '../../screens/NGO/Request/myDonation';
import NGOMyDonationDetail from '../../screens/NGO/Request/myDonationDetail';
import RejectedDeatil from '../../screens/NGO/Request/rejectedDetail';
import NGOSend_Donation from '../../screens/NGO/Request/sendDonation';
import UserRequestDetail from '../../screens/NGO/Request/userRequestDetail';
import Terms from '../../screens/NGO/Setting/Terms';
import FAQs from '../../screens/NGO/Setting/FAQs';
import AboutUs from '../../screens/NGO/Setting/AboutUs';
import ChangeEmail from '../../screens/NGO/Setting/ChangeEmail';
import ChangeLocation from '../../screens/NGO/Setting/ChangeLocation';

function NGOStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="AllUserRequests"
        component={AllUserRequests}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NGOCreateRequest"
        component={NGOCreateRequest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NGODonationDetail"
        component={NGODonationDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NGODonation_Done"
        component={NGODonation_Done}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NGOEditRequest"
        component={NGOEditRequest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NGOMyDonation"
        component={NGOMyDonation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NGOMyDonationDetail"
        component={NGOMyDonationDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RejectedDetail"
        component={RejectedDeatil}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NGOSend_Donation"
        component={NGOSend_Donation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserRequestDetail"
        component={UserRequestDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Terms"
        component={Terms}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FAQs"
        component={FAQs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangeEmail"
        component={ChangeEmail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangeLocation"
        component={ChangeLocation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default NGOStack;
