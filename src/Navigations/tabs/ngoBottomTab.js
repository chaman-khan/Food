import React from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Donor_Notification from '../../screens/Local_Donor/Notification/Notification';
import Donor_Category from '../../screens/Local_Donor/Category/Category';
import Donor_Setting from '../../screens/Local_Donor/Setting/Setting';
import Donor_Request from '../../screens/Local_Donor/Request/request';
import NGO_Request from '../../screens/NGO/Request/request';
import NGONotification from '../../screens/NGO/Notification/Notification';
import NGOCategory from '../../screens/NGO/Category/Category';
import NGOSetting from '../../screens/NGO/Setting/Setting';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const NGOBottomTab = () => {
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
          if (Screen_name === 'NGO_Request') {
            iconName = require('../../Images/request.png');
          } else if (Screen_name === 'NGONotification') {
            iconName = require('../../Images/notifications.png');
          } else if (Screen_name === 'NGOCategory') {
            iconName = require('../../Images/category.png');
          } else if (Screen_name === 'NGOSetting') {
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
      <Tab.Screen
        name="NGO_Request"
        component={NGO_Request}
        options={{
          headerShown: false,
          title: 'Request',
        }}
      />
      <Tab.Screen
        name="NGONotification"
        component={NGONotification}
        options={{
          headerShown: false,
          title: 'Notification',
        }}
      />
      <Tab.Screen
        name="NGOCategory"
        component={NGOCategory}
        options={{
          headerShown: false,
          title: 'Category',
        }}
      />
      <Tab.Screen
        name="NGOSetting"
        component={NGOSetting}
        options={{
          headerShown: false,
          title: 'Setting',
        }}
      />
    </Tab.Navigator>
  );
};

export default NGOBottomTab;
