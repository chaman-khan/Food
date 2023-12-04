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
import {useDispatch, useSelector} from 'react-redux';
import {Loading} from '../../../components/loading';
import {NGOmyDonatios} from '../../../redux/actions/home';
import {useFocusEffect} from '@react-navigation/native';
const theme = {
  colors: {
    primary: '#1CB5FD',
    grey: '#9B9B9B',
  },
};
const {width, height} = Dimensions.get('screen');

const NGOMyDonation = ({navigation}) => {
  const [selectedColor1, setSelectedColor1] = useState(theme.colors.primary);
  const [selectedColor2, setSelectedColor2] = useState('transparent');

  const [pos1, setPos1] = useState(true);
  const [pos2, setPos2] = useState(false);
  const [allrequests, setAllRequests] = useState([]);

  const [category, setCategory] = useState('leftover');
  const [showMdel, setShowModel] = useState(false);

  const dispatch = useDispatch();

  const {authLoading, loginData} = useSelector(state => state.auth);
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
  ];
  const data1 = [
    {
      id: '1',
      category: 'Medicine',
      title: 'Nourishing Hearts Through Medicine Donation',
      totalNumber: '3461',
      image: require('../../../Images/medicine.jpg'),
      description:
        'Food Banks: Nonprofit organization known as food banks act as central distribution hubs. They collect, store, and distribute donated foods to local charitis, shelters, and souo kithens.',
    },
  ];
  useFocusEffect(
    React.useCallback(() => {
      dispatch(authLoad(true));
      dispatch(NGOmyDonatios(loginData, onSuccess, onError));
    }, []),
  );

  const onSuccess = val => {
    console.log(val);
    dispatch(authLoad(false));
    setAllRequests(val.data);
  };
  const onError = err => {
    dispatch(authLoad(false));
    console.log(err);
  };

  const Modell = () => {
    return (
      <Modal transparent>
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            paddingBottom: 20,
            gap: 20,
            alignSelf: 'center',
            backgroundColor: 'rgba(50, 50, 50,0.9)',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            style={styles.cancel}
            onPress={() => {
              setShowModel(false);
              navigation.navigate('NGOStack', {screen: 'My Donation'});
            }}>
            <Text>Request Again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancel}
            onPress={() => setShowModel(false)}>
            <Text style={{color: 'red'}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.tabWrapper}
      onPress={() => {
        if (pos1) {
          navigation.navigate('NGOStack', {
            screen: 'NGODonationDetail',
            params: {item: item},
          });
        } else {
          navigation.navigate('NGOStack', {
            screen: 'NGOMyDonationDetail',
            params: {item: item},
          });
        }
      }}>
      <Image source={item.image} resizeMode="cover" style={styles.tabImage} />
      <View style={styles.tabBottom}>
        <Text style={styles.categoryText}>{item.category}</Text>
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
    <View>
      <View style={styles.topBar}>
        <Icon
          name="arrow-left"
          type="feather"
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 16, fontWeight: '500'}}>My Donation</Text>
        <Icon name="arrow-left" type="feather" color={'transparent'} />
      </View>
      <ScrollView>
        <View style={styles.topRow}>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: selectedColor1}]}
            onPress={() => {
              setSelectedColor1(theme.colors.primary);
              setSelectedColor2('transparent');
              setPos1(true);
              setPos2(false);
            }}>
            <Text>Donation Req</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: selectedColor2}]}
            onPress={() => {
              setSelectedColor2(theme.colors.primary);
              setSelectedColor1('transparent');
              setPos2(true);
              setPos1(false);
            }}>
            <Text>Complete Req</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '95%',
            alignSelf: 'center',
            height: height / 1.2,
          }}>
          <FlatList
            data={pos1 ? allrequests : data1}
            renderItem={renderItem}
            keyExtractor={item => item.id}
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
                  <Text style={{fontWeight: 'bold', fontSize: 18}}>
                    No Donation found
                  </Text>
                </View>
              );
            }}
            ListFooterComponent={() => {
              return <View style={{height: 200}} />;
            }}
          />
        </View>
      </ScrollView>
      {showMdel && <Modell />}
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
  },
  cancel: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
  },
});

export default NGOMyDonation;
