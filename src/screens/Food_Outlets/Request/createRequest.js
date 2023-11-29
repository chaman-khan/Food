import {Icon} from 'react-native-elements';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Modal,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
const theme = {
  colors: {
    primary: '#1CB5FD',
    grey: '#9B9B9B',
  },
};

const categoryData = ['Leftover', 'medicine', 'clothes'];

const CreateRequest = ({navigation}) => {
  const [category, setCategory] = useState('Select');
  const [dropOn, setDropOn] = useState(false);
  const [source, setSource] = useState(null);

  const DropDown = ({setValue, value, data, dropOpen, setDropOpenn}) => {
    return (
      <View style={{position: 'relative'}}>
        <TouchableOpacity
          style={styles.dropTab}
          onPress={() => setDropOpenn(!dropOpen)}>
          <Text style={{width: '90%', color: theme.colors.grey}}>{value}</Text>
          <Icon name="caretdown" type="ant-design" size={15} />
        </TouchableOpacity>

        {dropOpen && (
          <View style={styles.containerWrapper}>
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.containerItem}
                onPress={() => {
                  setValue(item);
                  setDropOpenn(false);
                }}>
                <Text>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };

  const InputFielder = ({title, placeholder, height = 40, multiline}) => {
    return (
      <View style={styles.inputWrapperCont}>
        <Text>{title}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[styles.inputTitle, {height: height}]}
            placeholder={placeholder}
            multiline={multiline}
            placeholderTextColor={theme.colors.grey}
          />
        </View>
      </View>
    );
  };

  const gallery = () => {
    ImagePicker.openPicker({}).then(images => {
      console.log(images);
      setSource(images.path);
    });
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.topBar}>
        <Icon
          name="arrow-left"
          type="feather"
          onPress={() => navigation.goBack()}
        />
        <Text style={{fontSize: 16, fontWeight: '500'}}>Create Request</Text>
        <Icon name="arrow-left" type="feather" color={'transparent'} />
      </View>
      <ScrollView>
        <TouchableOpacity
          style={styles.imagePickerWrapper}
          onPress={() => {
            gallery();
          }}>
          {source == null ? (
            <View>
              <Icon
                name="pluscircle"
                type="ant-design"
                color={theme.colors.primary}
                size={30}
              />
              <Text style={{fontSize: 12, marginTop: 8}}>Tap to upload</Text>
            </View>
          ) : (
            <Image
              source={{uri: source}}
              style={{width: '100%', height: '100%', borderRadius: 10}}
            />
          )}
        </TouchableOpacity>
        <View style={styles.donation}>
          <Text>Donation Categroy</Text>
          <DropDown
            data={categoryData}
            value={category}
            setValue={item => setCategory(item)}
            dropOpen={dropOn}
            setDropOpenn={setDropOn}
          />
        </View>
        <View style={{zIndex: 0}}>
          <InputFielder title={'Donation Quantity'} placeholder={'Add'} />
          <InputFielder title={'Phone Number'} placeholder={'+2634234982739'} />
          <InputFielder title={'Location'} placeholder={'Select Location'} />
          <InputFielder
            title={'Donation Quantity'}
            placeholder={'Donation Description'}
            height={120}
            multiline
          />
        </View>
        <TouchableOpacity
          style={{
            width: '95%',
            backgroundColor: theme.colors.primary,
            height: 50,
            alignSelf: 'center',
            marginTop: 20,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() =>
            navigation.navigate('DonorStack', {screen: 'My Donation'})
          }>
          <Text style={{color: 'white'}}>Send Request</Text>
        </TouchableOpacity>
      </ScrollView>
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
  },
  imagePickerWrapper: {
    height: 120,
    width: 120,
    borderColor: theme.colors.grey,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  dropTab: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    borderColor: theme.colors.grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
    paddingHorizontal: 10,
    marginTop: 10,
    zIndex: 1,
  },
  containerWrapper: {
    height: 120,
    position: 'relative',
    width: '100%',
    backgroundColor: 'white',
    top: 0,
    zIndex: 2,
  },
  containerItem: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: theme.colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  inputWrapperCont: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
    zIndex: 0,
  },
  inputWrapper: {
    width: '100%',
    borderRadius: 10,
    borderColor: theme.colors.grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.5,
    paddingHorizontal: 10,
    marginTop: 10,
    zIndex: 0,
  },
  inputTitle: {
    color: 'black',
    textAlignVertical: 'top',
    width: '100%',
  },
  donation: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
    zIndex: 10,
    elevation: 11,
  },
});
export default CreateRequest;
