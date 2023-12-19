import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Donor_Notification from '../../screens/Local_Donor/Notification/Notification';
import Donor_Category from '../../screens/Local_Donor/Category/Category';
import Donor_Setting from '../../screens/Local_Donor/Setting/Setting';
import Donor_Request from '../../screens/Local_Donor/Request/request';
import {useDispatch, useSelector} from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import {notification} from '../../redux/actions/home';
import {authLoad} from '../../redux/actions/auth';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
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
      // user_id: loginData._id,
      // fcm_token: fcmToken,
    });
    console.log('==============RAWWWWWWWWWWWWWWWWWWW======================');
    console.log(raw);
    console.log('==============RAWWWWWWWWWWWWWWWWWWW======================');
    dispatch(authLoad(true));

    dispatch(notification(loginData, raw, onSuccess, onError));
  };

  const onSuccess = val => {
    console.log('val.............');
    console.log(val);
    // navigation.navigate('FoodStack', {
    //   screen: 'Donation Done',
    // });

    Alert.alert(
      val.status === 'success' ? 'Success' : 'Error',
      val.status === 'success'
        ? val.message
        : val.message || val.message.message,
      [
        {
          text: 'OK',
          onPress: () => {
            console.log('OK Pressed');
            val.status === 'success';
            // &&
            // navigation.navigate('FoodStack', {
            //   screen: 'Donation Done',
            // });
          },
        },
      ],
      {cancelable: false},
    );
    dispatch(authLoad(false));
  };
  const onError = err => {
    dispatch(authLoad(false));
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
