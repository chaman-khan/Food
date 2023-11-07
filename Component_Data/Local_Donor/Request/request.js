import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const {width, height} = Dimensions.get('screen');
const Donor_Request = ({navigation}) => {
  const [category, setCategory] = useState('leftover');
  const [title, setTitle] = useState('Norshing Hearts through Food Donation');
  const [totalNumber, setTotalNumber] = useState(4575);

  const data = [
    {
      id: '1',
      category: 'Leftover',
      title: 'Nourishing Hearts Through Medicine Donation',
      totalNumber: '4575',
      image: require('../../Images/clothing.jpg'),
      description:
        'Food Banks: Nonprofit organization known as food banks act as central distribution hubs. They collect, store, and distribute donated foods to local charitis, shelters, and souo kithens.',
    },
    {
      id: '2',
      category: 'Medicine',
      title: 'Nourishing Hearts Through Medicine Donation',
      totalNumber: '3461',
      image: require('../../Images/medicine.jpg'),
      description:
        'Food Banks: Nonprofit organization known as food banks act as central distribution hubs. They collect, store, and distribute donated foods to local charitis, shelters, and souo kithens.',
    },
    {
      id: '2',
      category: 'Medicine',
      title: 'Nourishing Hearts Through Medicine Donation',
      totalNumber: '3461',
      image: require('../../Images/medicine.jpg'),
      description:
        'Food Banks: Nonprofit organization known as food banks act as central distribution hubs. They collect, store, and distribute donated foods to local charitis, shelters, and souo kithens.',
    },
    {
      id: '2',
      category: 'Medicine',
      title: 'Nourishing Hearts Through Medicine Donation',
      totalNumber: '3461',
      image: require('../../Images/medicine.jpg'),
      description:
        'Food Banks: Nonprofit organization known as food banks act as central distribution hubs. They collect, store, and distribute donated foods to local charitis, shelters, and souo kithens.',
    },
    {
      id: '2',
      category: 'Medicine',
      title: 'Nourishing Hearts Through Medicine Donation',
      totalNumber: '3461',
      image: require('../../Images/medicine.jpg'),
      description:
        'Food Banks: Nonprofit organization known as food banks act as central distribution hubs. They collect, store, and distribute donated foods to local charitis, shelters, and souo kithens.',
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.tabWrapper}
      onPress={() =>
        navigation.navigate('Donation Details', {
          category: item.category,
          image: item.image,
          title: item.title,
          totalNumber: item.totalNumber,
          description: item.description,
        })
      }>
      <Image source={item.image} resizeMode="cover" style={styles.tabImage} />
      <View style={styles.tabBottom}>
        <Text style={{color: '#20B7FE', fontWeight: '500'}}>{category}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 12}}>{item.title}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: '500', fontSize: 12}}>
            Required {item.category}
          </Text>
          <Text style={styles.reqCatValue}>{item.totalNumber}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: '500', fontSize: 12}}>Required Raised</Text>
          <Text style={{color: '#20B7FE', fontWeight: '500', fontSize: 12}}>
            00
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.topWrapper}>
        <Image
          style={styles.topLogo}
          source={require('../../Images/logoo.png')}
        />
        <View style={styles.topIconCont}>
          <Image
            style={{height: 20, width: 20, resizeMode: 'contain'}}
            source={require('../../Images/profileLogo.png')}
          />
          <Image
            style={{height: 20, width: 20}}
            source={require('../../Images/plus.png')}
          />
        </View>
      </View>
      <View style={styles.searchBarWrapper}>
        <TextInput placeholder="Search" style={{width: '95%', padding: 0}} />
        <EvilIcons
          name="search"
          size={25}
          style={{flexGrow: 1, marginBottom: 5}}
        />
      </View>
      <View style={styles.line}></View>
      <View style={{width: '95%', height: height / 1.2}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={{height: '100%'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topWrapper: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topLogo: {width: 120, height: 30, resizeMode: 'contain'},
  topIconCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '15%',
  },
  searchBarWrapper: {
    width: '95%',
    alignSelf: 'center',
    height: 35,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 10,
    borderColor: '#E4E4E4',
    justifyContent: 'space-between',
  },
  line: {
    width: '100%',
    borderColor: '#E4E4E4',
    borderWidth: 0.5,
    marginTop: 15,
    marginBottom: 10,
  },
  tabWrapper: {
    borderRadius: 10,
    width: '100%',
    height: height / 3,
    marginBottom: 10,
  },
  tabImage: {
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: '60%',
  },
  tabBottom: {
    borderWidth: 0.5,
    borderColor: '#D1F0FF',
    flexGrow: 1,
    borderTopWidth: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    justifyContent: 'space-evenly',
  },
  reqCatValue: {color: '#20B7FE', fontWeight: '500', fontSize: 12},
});

export default Donor_Request;
