import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Donor_Notification from '../../screens/Local_Donor/Notification/Notification';
import Donor_Category from '../../screens/Local_Donor/Category/Category';
import Donor_Setting from '../../screens/Local_Donor/Setting/Setting';
import Donor_Request from '../../screens/Local_Donor/Request/request';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Notification"
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

export default BottomTab;
