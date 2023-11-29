import { StyleSheet } from "react-native";
import { responsiveScreenFontSize,responsiveScreenHeight,responsiveScreenWidth } from "react-native-responsive-dimensions"
export const styles = StyleSheet.create({
    Display:{
        flex: 1,
        backgroundColor:'#FFFFFF',
        width:'100%',
        height:'100%',
        alignItems: 'center',
    },
    Header_Box:{
        marginTop:responsiveScreenHeight(5),
        height:responsiveScreenHeight(25),
        width:'90%',
        // borderWidth:1,
        alignItems: 'center',
    },
    Header_text1:{
        color:'#000000',
        fontFamily:'Poppins',
        fontWeight:'600',
        fontSize:responsiveScreenFontSize(2.2),
        letterSpacing:0.28,
        lineHeight:27,
        marginTop:responsiveScreenHeight(1.3)

    },
    Header_text2:{
        color:'#000000',
        fontFamily:'Poppins',
        fontWeight:'600',
        fontSize:responsiveScreenFontSize(1.5),
        letterSpacing:0.28,
        lineHeight:23,
        textAlign:'center',
        marginTop:responsiveScreenHeight(1.8)
    },
    Registration_No_Box:{
        width:'90%',
        height:responsiveScreenHeight(9.5),
        // borderWidth:1,
        marginTop:responsiveScreenHeight(2)
    },
    Top_Text:{
        color:'#000000',
        fontFamily:'Poppins',
        fontWeight:'600',
        fontSize:responsiveScreenFontSize(1.6),
        letterSpacing:0.28,
    },
    NGO_Input_Container: {
        marginTop:responsiveScreenHeight(0.9),
        borderWidth: 1,
        borderRadius: 12,
        width: '100%',
        height: responsiveScreenHeight(5.5),
        borderColor: '#E4E4E4',
        backgroundColor: '#F8F8F8',
        flexDirection: 'row',
        alignItems: 'center',
    },
    No_input: {
        // borderWidth:2,
        height: responsiveScreenHeight(5),
        width: '91%',
        fontSize: responsiveScreenFontSize(1.5),
        fontFamily: 'Poppins',
        color: '#000000',
        fontWeight: '400',
    },
    Certificate_Box:{
        width:'90%',
        height:responsiveScreenHeight(32),
        marginTop:responsiveScreenHeight(1.3),
        // borderWidth:2
    },
    Add_Image_Box:{
        width:'100%',
        height:responsiveScreenHeight(28.5),
        marginTop:responsiveScreenHeight(1),
        borderWidth:1,
        borderRadius:12,
        borderStyle:'dashed',
        borderColor:'#E4E4E4',
        backgroundColor:'#F8F8F8',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    Certificate_text:{
        width:'60%',
        color:'#000000',
        fontFamily:'Poppins',
        fontWeight:'200',
        fontSize:responsiveScreenFontSize(1),
        letterSpacing:0.28,
        lineHeight:14,
        textAlign:'center',
        marginTop:responsiveScreenHeight(1.8)
    },
    Button_Box: {
        // borderWidth:2,
        width: '100%',
        height:responsiveScreenHeight(5.5),
        marginTop: responsiveScreenHeight(2),
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button: {
        width:responsiveScreenWidth(85),
        height:responsiveScreenHeight(5.5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1CB5FD",
        borderRadius: 11
    },
    Send_Text: {
        fontFamily: 'Poppins',
        fontSize: responsiveScreenFontSize(1.4),
        fontWeight: '600',
        color: '#FFFFFF',
    },
})