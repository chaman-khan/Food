import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FoodOutlet_Request from '../../screens/Food_Outlets/Request/request';
import FoodOutlet_Notification from '../../screens/Food_Outlets/Notification/Notification';
import FoodOutlet_Setting from '../../screens/Food_Outlets/Setting/Setting';
import FoodCreateRequest from '../../screens/Food_Outlets/Request/createRequest';
import {authLoad} from '../../redux/actions/auth';
import messaging from '@react-native-firebase/messaging';
import {useDispatch, useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const FoodBottomTab = () => {
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
          } else if (Screen_name === 'FoodCreateRequest') {
            iconName = require('../../Images/plus.png');
          } else if (Screen_name === 'Setting') {
          } else if (Screen_name === 'Notification') {
            iconName = require('../../Images/notifications.png');
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
        name="FoodCreateRequest"
        component={FoodCreateRequest}
        options={{
          title: 'Create',
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
