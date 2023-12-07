import react from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
const Donation_Done = ({navigation}) => {
  return (
    <View>
      <Entypo
        name="cross"
        size={30}
        onPress={() => navigation.replace('BottomTab')}
        style={{margin: 10}}
      />
      <Image
        source={require('../../../Images/done.png')}
        style={{marginVertical: 50, width: '100%'}}
      />
      <Text style={styles.successfull}>Donation is Successfully</Text>
      <Text style={styles.text}>
        Your donation h, has been processed successfully. Thank you for your
        contribution. Your support is helping those in need.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  successfull: {
    fontWeight: 'bold',
    color: '#20B7FE',
    marginBottom: 15,
    alignSelf: 'center',
    fontSize: 21,
  },
  text: {
    width: '80%',
    alignSelf: 'center',
    fontSize: 15,
    textAlign: 'center',
  },
});
export default Donation_Done;
