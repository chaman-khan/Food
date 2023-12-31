import React, {useState} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { authLoad } from '../../../redux/actions/auth';
import { getNotification } from '../../../redux/actions/home';
import { useFocusEffect } from '@react-navigation/native';
const theme = {
  colors: {
    primary: '#1CB5FD',
    grey: '#9B9B9B',
  },
};

const Donor_Notification = () => {

  const [data, setData] = useState([]);

  const {authLoading, loginData} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      dispatch(authLoad(true));
      dispatch(getNotification(loginData, onSuccess, onError));
    }, []),
  );

  const onSuccess = val => {
    console.log(val);
    dispatch(authLoad(false));
    setData(val.data);
  };
  const onError = err => {
    dispatch(authLoad(false));
    console.log(err);
  };

  const [noOfNotifications, setNoOFNotifications] = useState(1);
  
  return (
    <View style={{flex: 1}}>
      <View style={styles.topBar}>
        <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
          Notifications
        </Text>
      </View>
      <View style={{marginTop: 17}}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.notification}>
              <Text style={{width: '85%', color: 'black'}}>{item.notificationTitle}</Text>
              <View style={styles.innerNotification}>
                <Text style={{color: 'white', fontWeight: '600'}}>
                  {noOfNotifications}
                </Text>
              </View>
            </View>
          )}
          ListEmptyComponent={() => (
            <View
              style={{
                flex: 1,
                height: 750,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'black', fontWeight: 20, fontWeight: '500'}}>
                No Notifications for you
              </Text>
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
export default Donor_Notification;


