import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Image} from 'react-native-elements';
const theme = {
  colors: {
    primary: '#1CB5FD',
    grey: '#9B9B9B',
  },
};

const Donor_Notification = () => {
  const Data = [
    {
      id: 1,
      text: 'Your Request has been successful. Now my team will come and take it',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '95%',
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
        }}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>Notifications</Text>
      </View>
      <View>
        <FlatList
          data={Data}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: '#E7F8FF',
                padding: 15,
                width: '95%',
                alignSelf: 'center',
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: theme.colors.grey,
              }}>
              <Text style={{width: '85%'}}>{item.text}</Text>
              <Image
                source={require('../../../Images/1.png')}
                style={{
                  position: 'absolute',
                  bottom: 5,
                  right: 5,
                  width: 35,
                  height: 25,
                }}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Donor_Notification;
