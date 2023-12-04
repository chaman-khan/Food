import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {theme} from '../../../theme/theme';
import {StyleSheet} from 'react-native';
import {getAllCategories} from '../../../redux/actions/home';
import {authLoad} from '../../../redux/actions/auth';
import {useDispatch, useSelector} from 'react-redux';
import {Loading} from '../../../components/loading';

const Donor_Category = () => {
  const [categoryData, setCategoryData] = useState([]);
  const dispatch = useDispatch();

  const {authLoading, loginData} = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getAllCategories(loginData, categorySuccess, categoryError));
    dispatch(authLoad(false));
  }, []);

  const categorySuccess = val => {
    dispatch(authLoad(false));

    setCategoryData(val.data);
  };
  const categoryError = err => {
    dispatch(authLoad(false));
    console.log(err);
  };
  return (
    <View style={{width: '90%', alignSelf: 'center'}}>
      <View style={styles.topBar}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>Category</Text>
      </View>
      <FlatList
        data={categoryData}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={item => {
          return (
            <View
              style={[
                styles.category,
                {
                  backgroundColor:
                    item.index === 0
                      ? '#E9EDFD'
                      : item.index === 1
                      ? '#FFE7FE'
                      : '#E9FDF6',
                },
              ]}>
              <Image
                source={
                  item.index === 0
                    ? require('../../../Images/food.png')
                    : item.index === 1
                    ? require('../../../Images/leftover.png')
                    : require('../../../Images/medicinec.png')
                }
              />
              <Text style={{fontSize: 20, fontWeight: '400'}}>
                {item.item.name}
              </Text>
            </View>
          );
        }}
      />
      {/* <View style={styles.container}>
        <View style={[styles.category, {backgroundColor: '#FFE7FE'}]}>
          <Image source={require('../../../Images/leftover.png')} />
          <Text style={{fontSize: 20, fontWeight: '400'}}>
            {' '}
            {categoryData[1]?.name}
          </Text>
        </View>
      </View>
      <View style={[styles.category, {backgroundColor: '#E9FDF6'}]}>
        <Image source={require('../../../Images/medicinec.png')} />
        <Text style={{fontSize: 20, fontWeight: '400'}}>
          {' '}
          {categoryData[2]?.name}
        </Text>
      </View> */}
      <Loading visible={authLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    borderColor: theme.colors.grey,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 35,
    width: '47%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  topBar: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
});
export default Donor_Category;
