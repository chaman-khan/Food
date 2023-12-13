// import {useRoute} from '@react-navigation/native';
import react from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const theme = {
  colors: {
    primary: '#1CB5FD',
    grey: '#9B9B9B',
  },
};
const DonationDetail = ({navigation, route}) => {
  // const route = useRoute().params;
  const routee = route.params;
  const data = routee.item;
  console.log('.................');
  console.log(data);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 15,
        }}>
        <Ionicons
          name="arrow-back"
          size={25}
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 25}}>Donation Details</Text>
        <Ionicons name="arrow-back" size={25} color="transparent" />
      </View>
      <Image
        source={{uri: data.image}}
        style={{alignSelf: 'center', width: '90%', height: 180}}
      />
      <View style={{margin: 5, paddingHorizontal: 12}}>
        <Text style={styles.category}>{data.donation_category}</Text>
        <Text style={{marginVertical: 7}}>{data.donation_intro}</Text>
        <View style={styles.categoryView}>
          <Text>Required {data.donation_category}</Text>
          <Text style={{color: '#20B7FE'}}>{data.required_amount}</Text>
        </View>
        <View style={styles.categoryView}>
          <Text>Required Raised</Text>
          <Text style={{color: '#20B7FE'}}>{data.total_donation_amount}</Text>
        </View>
        <View style={styles.descView}></View>
        <Text style={{fontWeight: 'bold'}}>Donation Description</Text>
        <Text style={styles.desc}>{data.donation_desc}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('DonorStack', {
            screen: 'Send Donation',
            params: {item: data},
          });
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          Donate
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    marginVertical: 5,
    color: '#20B7FE',
    fontWeight: 'bold',
  },
  categoryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 7,
  },
  descView: {
    width: '100%',
    borderBottomColor: theme.colors.grey,
    borderWidth: 1,
    marginVertical: 10,
  },
  desc: {
    borderWidth: 0.3,
    borderColor: '#858581',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  button: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#20B7FE',
    borderRadius: 10,
    alignItems: 'center',
    padding: 13,
    position: 'absolute',
    bottom: 10,
  },
});
export default DonationDetail;
