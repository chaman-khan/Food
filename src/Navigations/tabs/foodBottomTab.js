import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FoodOutlet_Request from '../../screens/Food_Outlets/Request/request';
import FoodOutlet_Notification from '../../screens/Food_Outlets/Notification/Notification';
import FoodOutlet_Setting from '../../screens/Food_Outlets/Setting/Setting';

const Tab = createBottomTabNavigator();

const FoodBottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Request"
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
          }
          else if (Screen_name === 'Setting') {
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
          );
        },
      })}>
      
      <Tab.Screen
        name="Request"
        component={FoodOutlet_Request}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={FoodOutlet_Notification}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={FoodOutlet_Setting}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default FoodBottomTab;
