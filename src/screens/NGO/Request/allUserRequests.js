import {useFocusEffect} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
  Modal,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {authLoad} from '../../../redux/actions/auth';
import {
  NGOgetAcceptedRequests,
  NGOgetAllUserRequests,
} from '../../../redux/actions/home';
import {useDispatch, useSelector} from 'react-redux';
import {Loading} from '../../../components/loading';
const theme = {
  colors: {
    primary: '#1CB5FD',
    grey: '#9B9B9B',
  },
};
const {width, height} = Dimensions.get('screen');

const AllUserRequests = ({navigation}) => {
  const [selectedColor1, setSelectedColor1] = useState(theme.colors.primary);
  const [selectedColor2, setSelectedColor2] = useState('transparent');
  const [Color1, setColor1] = useState('white');
  const [Color2, setColor2] = useState('black');

  const [pos1, setPos1] = useState(true);
  const [pos2, setPos2] = useState(false);

  const [category, setCategory] = useState('leftover');
  const [showMdel, setShowModel] = useState(false);
  const [allrequests, setAllRequests] = useState([]);
  const [acceptedTRequests, setAcceptedRequests] = useState([]);

  const [isLoadingAllRequests, setIsLoadingAllRequests] = useState(true);
  const [isLoadingAcceptedRequests, setIsLoadingAcceptedRequests] =
    useState(true);

  const dispatch = useDispatch();
  const {authLoading, loginData} = useSelector(state => state.auth);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(authLoad(true));
      dispatch(NGOgetAllUserRequests(loginData, onSuccess, onError));
      dispatch(NGOgetAcceptedRequests(loginData, onSuccess1, onError1));
    }, []),
  );

  console.log('========loginDataaaaaaaaaaaa============================');
  console.log(loginData);
  console.log('====================================');

  const onSuccess = val => {
    console.log('val.data................................');
    console.log(val);
    console.log('............................val.data');
    dispatch(authLoad(false));
    setAllRequests(val.data);
    setIsLoadingAllRequests(false);
  };
  const onError = err => {
    dispatch(authLoad(false));
    console.log(err);
    setIsLoadingAllRequests(false);
  };
  const onSuccess1 = val => {
    console.log(val);
    dispatch(authLoad(false));
    setAcceptedRequests(val.data);
    setIsLoadingAcceptedRequests(false);
  };
  const onError1 = err => {
    dispatch(authLoad(false));
    console.log(err);
    setIsLoadingAcceptedRequests(false);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.tabWrapper}
      onPress={() => {
        if (pos1) {
          navigation.navigate('NGOStack', {
            screen: 'UserRequestDetail',
            params: {item: item},
          });
        } else {
          navigation.navigate('NGOStack', {
            screen: 'RejectedDetail',
            params: {item: item},
          });
        }
      }}>
      <Image
        source={{uri: item.image}}
        resizeMode="cover"
        style={styles.tabImage}
      />
      <View style={styles.tabBottom}>
        <Text style={styles.categoryText}>{item.donation_category}</Text>
        <View style={styles.bottomDetail}>
          <Text style={styles.textStyle}>Donation Quantity</Text>
          <Text style={styles.reqCatValue}>{item.donation_amount}</Text>
        </View>
        <View style={styles.bottomDetail}>
          <Text style={styles.textStyle}>Phone Number</Text>
          <Text style={styles.reqCatValue}>{item.phone_number}</Text>
        </View>
        <View style={styles.bottomDetail}>
          <Text style={styles.textStyle}>Location</Text>
          <Text style={styles.reqCatValue}>{item.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.topBar}>
        <Icon
          name="arrow-left"
          type="feather"
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>
          All User Requests
        </Text>
        <Icon name="arrow-left" type="feather" color={'transparent'} />
      </View>
      <ScrollView>
        <View style={styles.topRow}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: selectedColor1}]}
            onPress={() => {
              setSelectedColor1(theme.colors.primary);
              setSelectedColor2('transparent');
              setColor1('white');
              setColor2('black');
              setPos1(true);
              setPos2(false);
            }}>
            <Text style={{color: Color1}}>All Requests</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: selectedColor2}]}
            onPress={() => {
              setSelectedColor2(theme.colors.primary);
              setSelectedColor1('transparent');
              setColor1('black');
              setColor2('white');
              setPos2(true);
              setPos1(false);
            }}>
            <Text style={{color: Color2}}>Accepted</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '95%',
            alignSelf: 'center',
            height: height / 1.5,
          }}>
          {isLoadingAllRequests || isLoadingAcceptedRequests ? (
            <Loading />
          ) : (
            <FlatList
              data={pos1 ? allrequests : acceptedTRequests}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              style={{height: '100%'}}
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
                      style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        color: 'black',
                      }}>
                      No Donation found
                    </Text>
                  </View>
                );
              }}
              ListFooterComponent={() => {
                return <View style={{height: 200}} />;
              }}
            />
          )}
        </View>
      </ScrollView>
      <Loading visible={authLoading} />
    </View>
  );
};
const styles = StyleSheet.create({
  topBar: {
    width: '95%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  button: {
    borderRadius: 30,
    width: '49%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topRow: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 30,
    padding: 2,
    margin: 20,
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
    color: 'black',
  },
  cancel: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
  },
});

export default AllUserRequests;
