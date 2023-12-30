import React, {useEffect, useState} from 'react';
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
import {Loading} from '../../../components/loading';
import {useDispatch, useSelector} from 'react-redux';
import {getAllNgoRequestsByArea} from '../../../redux/actions/home';
import {authLoad} from '../../../redux/actions/auth';
import {useFocusEffect} from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');
const FoodOutlet_Request = ({navigation}) => {
  const [category, setCategory] = useState('leftover');
  const [title, setTitle] = useState('Norshing Hearts through Food Donation');
  const [totalNumber, setTotalNumber] = useState(4575);
  const [data, setData] = useState([]);

  const {authLoading, loginData} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      dispatch(authLoad(true));
      dispatch(getAllNgoRequestsByArea(loginData, onSuccess, onError));
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

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.tabWrapper}
      onPress={() => {
        navigation.navigate('FoodStack', {
          screen: 'Donation Details',
          params: {item: item},
        });
      }}>
      <Image
        source={{uri: item.image}}
        resizeMode="cover"
        style={styles.tabImage}
      />
      <View style={styles.tabBottom}>
        <Text style={styles.categoryText}>{item.donation_category}</Text>
        <Text style={styles.titleText}>{item.ngo_name}</Text>
        <Text style={{...styles.titleText, fontWeight: '400'}}>
          {item.donation_intro}
        </Text>

        <View style={styles.bottomDetail}>
          <Text style={styles.textStyle}>Required {item.category}</Text>
          <Text style={styles.reqCatValue}>{item.required_amount}</Text>
        </View>
        <View style={styles.bottomDetail}>
          <Text style={styles.textStyle}>Required Raised</Text>
          <Text style={[styles.textStyle, {color: '#20B7FE'}]}>
            {item.total_donation_amount}
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
          source={require('../../../Images/logoo.png')}
        />
        <View style={styles.topIconCont}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('FoodStack', {screen: 'My Donation'})
            }>
            <Image
              style={styles.topImageIcon}
              source={require('../../../Images/profileLogo.png')}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() =>
              navigation.navigate('FoodStack', {
                screen: 'Create Request',
              })
            }>
            <Image
              style={styles.topImageIcon}
              source={require('../../../Images/plus.png')}
            />
          </TouchableOpacity> */}
        </View>
      </View>
      <View style={styles.searchBarWrapper}>
        <TextInput placeholder="Search" placeholderTextColor='black' style={styles.input} />
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
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => {
            return (
              <View
                style={{
                  height: 500,
                  width: '90%',
                  alignSelf: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
                  No request found
                </Text>
              </View>
            );
          }}
          // ListFooterComponent={() => {
          //   return <View style={{height: 400}} />;
          // }}
          // style={{height: '100%'}}
        />
      </View>
      <Loading visible={authLoading} />
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '15%',
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
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: 'white',
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
    color: 'black'
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

export default FoodOutlet_Request;
