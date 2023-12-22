import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {theme} from '../../../theme/theme';

const FoodFAQs = () => {
  const [source, setSource] = useState(
    require('../../../Images/rightArrow.png'),
  );
  const [showDetails, setShowDetails] = useState(false);

  const [source1, setSource1] = useState(
    require('../../../Images/rightArrow.png'),
  );
  const [showDetails1, setShowDetails1] = useState(false);

  return (
    <View style={{width: '95%', alignSelf: 'center'}}>
      <View style={styles.topBar}>
        <Text style={{fontSize: 16, fontWeight: '500', color: 'black'}}>FAQ's</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            setShowDetails(!showDetails);
            source == require('../../../Images/rightArrow.png')
              ? setSource(require('../../../Images/downArrow.png'))
              : setSource(require('../../../Images/rightArrow.png'));
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: '600',  color: 'black'}}>
              What do you want to know ablut this App?
            </Text>

            <Image source={source} />
          </View>
          {showDetails && (
            <Text style={{marginTop: 10, color: 'black'}}>
              Once you delete your account, then you are not able to recovere
              that. Are you sure to do this?
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            setShowDetails1(!showDetails1);
            source1 == require('../../../Images/rightArrow.png')
              ? setSource1(require('../../../Images/downArrow.png'))
              : setSource1(require('../../../Images/rightArrow.png'));
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: '600', color: 'black'}}>
              Which basic benefits of this app?
            </Text>

            <Image source={source1} />
          </View>
          {showDetails1 && (
            <Text style={{marginTop: 10, color: 'black'}}>
              It will be beneficial for all needy people and all those who want
              to help needy people by donating their goods like medicine,
              leftover and medicines.
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginBottom: 30,
  },
  item: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 13,
    // backgroundColor: '#FDFEFF',
    borderColor: theme.colors.grey,
    borderWidth: 0.5,
    borderRadius: 10,
    marginBottom: 15,
  },
});

export default FoodFAQs;
