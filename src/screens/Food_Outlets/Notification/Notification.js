import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Image, StyleSheet, PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';
const theme = {
  colors: {
    primary: '#1CB5FD',
    grey: '#9B9B9B',
    black: '#FFF'
  },
};

// PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)

const FoodOutlet_Notification = ({navigation}) => {
  useEffect(
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    })
  )
  const [noOfNotifications, setNoOFNotifications] = useState(1);
  const Data = [
    {
      id: 1,
      text: 'Your Request has been successful. Now my team will come and take it',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <View style={styles.topBar}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>Notifications</Text>
      </View>
      <View style={{marginTop: 17}}>
        <FlatList
          data={Data}
          renderItem={({item}) => (
            <View style={styles.notification}>
              <Text style={{width: '85%'}}>{item.text}</Text>
              <View style={styles.innerNotification}>
                <Text style={{color: 'white', fontWeight: '600'}}>
                  {noOfNotifications}
                </Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  notification: {
    backgroundColor: '#E7F8FF',
    padding: 15,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: theme.colors.grey,
  },
  innerNotification: {
    position: 'absolute',
    bottom: 5,
    right: 15,
    backgroundColor: theme.colors.primary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});
export default FoodOutlet_Notification;
