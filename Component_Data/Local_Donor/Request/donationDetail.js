import {useRoute} from '@react-navigation/native';
import react from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const DonationDetail = ({navigation}) => {
  const route = useRoute().params;
  const routee = route.item;
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Ionicons
          name="arrow-back"
          size={25}
          style={{flex: 1}}
          onPress={() => navigation.goBack()}
        />
        <Text style={{flex: 6, fontSize: 25}}>Donation Details</Text>
      </View>
      <Image
        source={routee.image}
        style={{alignSelf: 'center', width: '90%'}}
      />
      <View style={{margin: 5, paddingHorizontal: 12}}>
        <Text style={styles.category}>{routee.category}</Text>
        <Text style={{marginVertical: 7}}>{routee.title}</Text>
        <View style={styles.categoryView}>
          <Text>Required {routee.category}</Text>
          <Text style={{color: '#20B7FE'}}>{routee.totalNumber}</Text>
        </View>
        <View style={styles.categoryView}>
          <Text>Required Raised</Text>
          <Text style={{color: '#20B7FE'}}>00</Text>
        </View>
        <View style={styles.descView}></View>
        <Text style={{fontWeight: 'bold'}}>Donation Description</Text>
        <Text style={styles.desc}>{routee.description}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Send Donation')}>
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
    borderBottomColor: '#858581',
    borderWidth: 1,
    marginVertical: 10,
  },
  desc: {
    borderWidth: 1,
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
