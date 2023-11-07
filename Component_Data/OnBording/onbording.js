import React, { useState } from "react";
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, Image, Dimensions, FlatList } from "react-native";
import { Styles, Texts } from "./onBording_Style"
const { width } = Dimensions.get('window');
const OnBording = ({navigation}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [data, setData] = useState([0, 1, 2])
    const handleScroll = (e) => {
        const x = e.nativeEvent.contentOffset.x;
        const index = Math.round(x / width);
        setCurrentIndex(index);
    };
    const Handle_Next =()=>{
        if(currentIndex<data.length-1){
            setCurrentIndex(currentIndex+1)
        }
        else if(currentIndex==data.length-1){
            navigation.navigate('Login')
        }
    }
    const SlideView = () => {
        if (currentIndex === 0) {
            return (
                <View style={Styles.Slide_Inner_View}>
                    <View style={Styles.Slide_Pngs}>
                        <Image source={require('../Images/Slide1.png')} style={Styles.Pngs} />
                    </View>
                    <View style={Styles.Text_Box}>
                        <Text style={Texts.Slide_Text1}>Join us in spreading kindness</Text>
                        <Text style={Texts.Slide_Text2}>To get started, please follow the steps below to make your donation securely and easily.</Text>
                    </View>
                </View>
            );
        } else if (currentIndex === 1) {
            return (
                <View style={Styles.Slide_Inner_View}>
                    <View style={Styles.Slide_Pngs}>
                        <Image source={require('../Images/Slide2.png')} style={Styles.Pngs} />
                    </View>
                    <View style={Styles.Text_Box}>
                        <Text style={Texts.Slide_Text1}>Your contribution matters</Text>
                        <Text style={Texts.Slide_Text2}>Your contribution will have a lasting impact on the lives of those we serve.</Text>
                    </View>
                </View>
            );
        } else if (currentIndex === 2) {
            return (
                <View style={Styles.Slide_Inner_View}>
                    <View style={Styles.Slide_Pngs}>
                        <Image source={require('../Images/Slide3.png')} style={Styles.Pngs} />
                    </View>
                    <View style={Styles.Text_Box}>
                        <Text style={Texts.Slide_Text1}>Be the hero in someone's story today.</Text>
                        <Text style={Texts.Slide_Text2}>Thank you for choosing to make a difference! Your support helps us continue our mission.</Text>
                    </View>
                </View>
            );
        } else {
            return null;
        }
    }
    return (
        <View style={Styles.Display}>
            <View style={Styles.Skip_Box} >
                <TouchableOpacity activeOpacity={0.7} style={Styles.Skip_Button} onPress={()=>navigation.navigate('Login')}>
                    <Text style={Texts.skip_text}>Skip</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.Png_Box}>
                <Image style={Styles.Png} source={require('../Images/heart.png')} />
            </View>
            <View style={Styles.Slide_Box}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    data={(data)}
                    onScroll={handleScroll}
                    renderItem={({ item, index }) => (
                        <View style={Styles.Slide_View}>
                            {/* <TouchableOpacity activeOpacity={0.90}
                                    style={Styles.Slide_Inner}> */}
                            <SlideView />
                            {/* </TouchableOpacity> */}
                        </View>
                    )}
                />
            </View>
            <View style={Styles.Indecator}>
                {data.map((item, index) => (
                    <View
                        key={index}
                        style={{
                            width: currentIndex === index ? 24 : 7,
                            height: currentIndex === index ? 7 : 7,
                            borderRadius: currentIndex === index ? 8 : 4,
                            backgroundColor: currentIndex === index ? '#1CB5FD' : '#818181',
                            marginLeft: 5
                        }}
                    ></View>
                ))}
            </View>
            <View style={Styles.Next_Button_Box}>
            {
                currentIndex===data.length-1 ? 
                <TouchableOpacity activeOpacity={0.7} style={Styles.Button} onPress={Handle_Next}>
                    <Text style={Texts.Next_Text} >Login</Text>
                </TouchableOpacity> 
                :
                <TouchableOpacity activeOpacity={0.7} style={Styles.Button} onPress={Handle_Next}>
                    <Text style={Texts.Next_Text} >Next</Text>
                </TouchableOpacity>
            }
            </View>

        </View>
    )
}
export default OnBording