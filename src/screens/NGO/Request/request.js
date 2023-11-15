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
const NGO_Request = ({navigation}) => {
  const [category, setCategory] = useState('leftover');
  const [title, setTitle] = useState('Norshing Hearts through Food Donation');
  const [totalNumber, setTotalNumber] = useState(4575);

  const data = [
    {
      id: '1',
      category: 'Leftover',
      title: 'Nourishing Hearts Through Medicine Donation',
      totalNumber: '4575',
      image: require('../../../Images/clothing.jpg'),
      description:
        'Food Banks: Nonprofit organization known as food banks act as central distribution hubs. They collect, store, and distribute donated foods to local charitis, shelters, and souo kithens.',
    },
    {
      id: '2',
      category: 'Medicine',
      title: 'Nourishing Hearts Through Medicine Donation',
      totalNumber: '3461',
      image: require('../../../Images/medicine.jpg'),
      description:
        'Food Banks: Nonprofit organization known as food banks act as central distribution hubs. They collect, store, and distribute donated foods to local charitis, shelters, and souo kithens.',
    },
    {
      id: '2',
      category: 'Medicine',
      title: 'Nourishing Hearts Through Medicine Donation',
      totalNumber: '3461',
      image: require('../../../Images/medicine.jpg'),
      description:
        'Food Banks: Nonprofit organization known as food banks act as central distribution hubs. They collect, store, and distribute donated foods to local charitis, shelters, and souo kithens.',
    },
    {
      id: '2',
      category: 'Medicine',
      title: 'Nourishing Hearts Through Medicine Donation',
      totalNumber: '3461',
      image: require('../../../Images/medicine.jpg'),
      description:
        'Food Banks: Nonprofit organization known as food banks act as central distribution hubs. They collect, store, and distribute donated foods to local charitis, shelters, and souo kithens.',
    },
    {
      id: '2',
      category: 'Medicine',
      title: 'Nourishing Hearts Through Medicine Donation',
      totalNumber: '3461',
      image: require('../../../Images/medicine.jpg'),
      description:
        'Food Banks: Nonprofit organization known as food banks act as central distribution hubs. They collect, store, and distribute donated foods to local charitis, shelters, and souo kithens.',
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.tabWrapper}
      onPress={() => {
        navigation.navigate('NGOStack', {
          screen: 'NGODonationDetail',
          params: {item: item},
        });
      }}>
      <Image source={item.image} resizeMode="cover" style={styles.tabImage} />
      <View style={styles.tabBottom}>
        <Text style={styles.categoryText}>{category}</Text>
        <Text style={styles.titleText}>{item.title}</Text>
        <View style={styles.bottomDetail}>
          <Text style={styles.textStyle}>Required {item.category}</Text>
          <Text style={styles.reqCatValue}>{item.totalNumber}</Text>
        </View>
        <View style={styles.bottomDetail}>
          <Text style={styles.textStyle}>Required Raised</Text>
          <Text style={[styles.textStyle, {color: '#20B7FE'}]}>00</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.topWrapper}>
        <Image
          style={styles.topLogo}
          source={require('../../../Images/logoo.png')}
        />
        <View style={styles.topIconCont}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('NGOSrack', {screen: 'NGOMyDonation'})
            }>
            <Image
              style={styles.topImageIcon}
              source={require('../../../Images/profileLogo.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('NGOStack', {screen: 'AllUserRequests'})
            }>
            <Image
              style={styles.topImageIcon}
              source={require('../../../Images/profileLogo1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('NGOStack', {
                screen: 'NGOCreateRequest',
              })
            }>
            <Image
              style={styles.topImageIcon}
              source={require('../../../Images/plus.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchBarWrapper}>
        <TextInput placeholder="Search" style={styles.input} />
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
    width: '20%',
  },
  topImageIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
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
  input: {
    width: '95%',
    padding: 0,
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
  reqCatValue: {
    color: '#20B7FE',
    fontWeight: '500',
    fontSize: 12,
  },
  categoryText: {
    color: '#20B7FE',
    fontWeight: '500',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  bottomDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontWeight: '500',
    fontSize: 12,
  },
});

export default NGO_Request;
