import React, {useEffect} from 'react';
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
import NGOCreateRequest from '../../screens/NGO/Request/createRequest';
import {useDispatch, useSelector} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import {authLoad} from '../../redux/actions/auth';
import {notification} from '../../redux/actions/home';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const NGOBottomTab = () => {
  const dispatch = useDispatch();
  const {authLoading, loginData} = useSelector(state => state.auth);

  useEffect(() => {
    flanra();
  }, []);

  const flanra = async () => {
    const token = await messaging().getToken();

    fff(token);
  };

  const fff = token => {
    var raw = JSON.stringify({
      user_id: loginData.data._id,
      fcm_token: token,
    });
    dispatch(authLoad(true));

    dispatch(notification(loginData, raw, onSuccess, onError));
  };

  const onSuccess = val => {
    console.log('val.............');
    console.log(val);

    dispatch(authLoad(false));
  };
  const onError = err => {
    dispatch(authLoad(false));
    console.log('err..........');
    console.log(err);
  };
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
          } else if (Screen_name === 'NGOCreateRequest') {
            iconName = require('../../Images/plus.png');
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
        name="NGOCreateRequest"
        component={NGOCreateRequest}
        options={{
          headerShown: false,
          title: 'Create',
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
