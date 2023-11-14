import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DonationDetail from '../../screens/Local_Donor/Request/donationDetail';
import Send_Donation from '../../screens/Local_Donor/Request/sendDonation';
import Donation_Done from '../../screens/Local_Donor/Request/donationDone';
import CreateRequest from '../../screens/Local_Donor/Request/createRequest';
import MyDonation from '../../screens/Local_Donor/Request/myDonation';
import MyDonationDetail from '../../screens/Local_Donor/Request/myDonationDetail';
import DeleteAccount from '../../screens/Local_Donor/Setting/DeleteAccount';
import ChangePassword from '../../screens/Local_Donor/Setting/ChangePassword';
import Terms from '../../screens/Local_Donor/Setting/Terms';
import FAQs from '../../screens/Local_Donor/Setting/FAQs';
import AboutUs from '../../screens/Local_Donor/Setting/AboutUs';
import ChangeEmail from '../../screens/Local_Donor/Setting/ChangeEmail';
import ChangeLocation from '../../screens/Local_Donor/Setting/ChangeLocation';

function DonorStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
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
      <Stack.Screen
        name="DeleteAccount"
        component={DeleteAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
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

export default DonorStack;
