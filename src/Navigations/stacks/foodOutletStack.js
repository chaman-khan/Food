import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FoodDonationDetail from '../../screens/Food_Outlets/Request/donationDetail';
import Food_Send_Donation from '../../screens/Food_Outlets/Request/sendDonation';
import Food_Donation_Done from '../../screens/Food_Outlets/Request/donationDone';
import FoodCreateRequest from '../../screens/Food_Outlets/Request/createRequest';
import MyFoodDonation from '../../screens/Food_Outlets/Request/myDonation';
import MyFoodDonationDetail from '../../screens/Food_Outlets/Request/myDonationDetail';
import DeleteAccountFood from '../../screens/Food_Outlets/Setting/DeleteAccount';
import ChangeFoodPassword from '../../screens/Food_Outlets/Setting/ChangePassword';
import FoodTerms from '../../screens/Food_Outlets/Setting/Terms';
import FoodFAQs from '../../screens/Food_Outlets/Setting/FAQs';
import AboutUsFood from '../../screens/Food_Outlets/Setting/AboutUs';
import ChangeFoodEmail from '../../screens/Food_Outlets/Setting/ChangeEmail';
import ChangeFoodLocation from '../../screens/Food_Outlets/Setting/ChangeLocation';

function FoodStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Donation Details"
        component={FoodDonationDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Send Donation"
        component={Food_Send_Donation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Donation Done"
        component={Food_Donation_Done}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Create Request"
        component={FoodCreateRequest}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="My Donation"
        component={MyFoodDonation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="My Donation Details"
        component={MyFoodDonationDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DeleteAccount"
        component={DeleteAccountFood}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangeFoodPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Terms"
        component={FoodTerms}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FAQs"
        component={FoodFAQs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUsFood}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangeEmail"
        component={ChangeFoodEmail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChangeLocation"
        component={ChangeFoodLocation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default FoodStack;
