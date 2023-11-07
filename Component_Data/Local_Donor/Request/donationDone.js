import react from 'react';
import {View, Image, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
const Donation_Done = ({navigation}) => {
    return (
        <View>
            <Entypo name='cross' size={30} onPress={()=>navigation.goBack()} style={{margin: 10}} />
            <Image source={require('../../Images/done.png')} style={{marginVertical: 50, width: '100%'}} />
            <Text style={{fontWeight: 'bold', color:'#20B7FE', marginBottom: 15, alignSelf: 'center', fontSize: 21}}>Donation is Successfully</Text>
            <Text style={{width:'80%', alignSelf:'center', fontSize: 20}}>Your donation h, has been processed successfully. Thank you for your contribution. Your support is helping those in need.</Text>
        </View>
    )
}
export default Donation_Done;