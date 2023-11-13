import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Signup_Screen from '../screens/SignUp_Screen/signup_screen';
import Login_Screen from '../screens/Login_Screen/login_screen';
import OnBording from '../screens/OnBording/onbording';
import Recover_Screen from '../screens/Recover/recover';
import Reset_Password_Screen from '../screens/Recover/reset_password';
import Verification_Screen from '../screens/Recover/verification';
import Donor_Setting from '../screens/Local_Donor/Setting/Setting';
import Donor_Request from '../screens/Local_Donor/Request/request';
import Donor_Notification from '../screens/Local_Donor/Notification/Notification';
import Donor_Category from '../screens/Local_Donor/Category/Category';
import DonationDetail from '../screens/Local_Donor/Request/donationDetail';
import Send_Donation from '../screens/Local_Donor/Request/sendDonation';
import Donation_Done from '../screens/Local_Donor/Request/donationDone';
import CreateRequest from '../screens/Local_Donor/Request/createRequest';
import MyDonation from '../screens/Local_Donor/Request/myDonation';
import MyDonationDetail from '../screens/Local_Donor/Request/myDonationDetail';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#20B7FE',
        inactiveTintColor: 'gray', // Set your desired inactive color
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'relative',
          borderTopWidth: 0,
          height: 50,
          elevation: 5,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '600',
          fontFamily: 'Poppins',
        },
        tabBarItemStyle: {
          paddingVertical: 2,
          paddingHorizontal: 20,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let Screen_name = route.name;
          if (Screen_name === 'Request') {
            iconName = require('../../Images/request.png');
          } else if (Screen_name === 'Notification') {
            iconName = require('../../Images/notifications.png');
          } else if (Screen_name === 'Category') {
            iconName = require('../../Images/category.png');
          } else if (Screen_name === 'Setting') {
            iconName = require('../../Images/setting.png');
          }
          return (
            <Image
              source={iconName}
              size={size}
              tintColor={color}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
            // <Ionicons
            //   name={iconName}
            //   size={size}
            //   color={color}
            //   style={{height: 30, width: 30}}
            // />
          );
        },
      })}>
      {/* <Tab.Screen
        name="Home"
        component={Donor_Home}
        options={{
          headerShown: false,
        }}
      /> */}
      <Tab.Screen
        name="Request"
        component={Donor_Request}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Donor_Notification}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Category"
        component={Donor_Category}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Donor_Setting}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
const Donor_Nav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="On Bording"
          component={OnBording}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login_Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Recover Screen"
          component={Recover_Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verification Screen"
          component={Verification_Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Reset Password Screen"
          component={Reset_Password_Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sign Up"
          component={Signup_Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Donor Home"
          component={MyTabs}
          options={{headerShown: false}}
        />
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
};

export default Donor_Nav;
