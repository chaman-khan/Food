import { StyleSheet } from "react-native";
import { responsiveScreenFontSize,responsiveScreenHeight,responsiveScreenWidth } from "react-native-responsive-dimensions"
export default styles = StyleSheet.create({
    Display: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        // height: responsiveScreenHeight(100)
        alignItems: 'center',
        justifyContent: 'center',
    },
    Hearder_Box:{
        // height:130,
        height:responsiveScreenHeight(18),
        width:responsiveScreenWidth(70),
        // borderWidth:2,

        marginTop:responsiveScreenHeight(10),
        alignItems:'center',
        justifyContent:'flex-start',
        // flexDirection:'row'
    },
    image:{
        width:responsiveScreenWidth(18),
        height:responsiveScreenHeight(8),
    },
    Sign_In_Text:{
        fontFamily: "Poppins",
        fontWeight: '600',
        fontSize:responsiveScreenFontSize(2.5),
        color: '#000000',
        marginTop: responsiveScreenHeight(1),
        textAlign:"center",
        letterSpacing:0.29
    },
    Welcome_Text:{
        fontFamily: "Poppins",
        fontWeight: '500',
        fontSize:responsiveScreenFontSize(1.7),
        marginTop:responsiveScreenHeight(1.1),
        color: '#000000',
        textAlign:"center",
        lineHeight:19,
        letterSpacing:0.29
    },
    Input_Box:{ 
        width:responsiveScreenWidth(91),
        height:responsiveScreenHeight(23),
        // borderWidth:2,
        // width:380,
        // width:"100%",
        // borderWidth:2,
        marginTop:responsiveScreenHeight(1),
        alignItems:'flex-start',
        justifyContent:'flex-start', 
        alignSelf:'center'
    },
    Email_Box:{
        // borderWidth:2,
        height:responsiveScreenHeight(10),
        width:'100%'
    },
    User_Password_Texts:{
        fontFamily: "Poppins",
        fontWeight: '500',
        fontSize:responsiveScreenFontSize(1.7),
        color: '#000000',
        marginLeft:responsiveScreenWidth(2)
    },
    User_input:{
        height:responsiveScreenHeight(100),
        width:'91%',
        fontSize:responsiveScreenFontSize(1.5),
        fontFamily:'Poppins',
        color: '#000000',
        fontWeight:'400',
    },
    User_Input_Container: {
        marginTop:responsiveScreenHeight(1),
        borderWidth:1,
        borderRadius:12,
        width:'100%',
        height:responsiveScreenHeight(5.5),
        borderColor: '#E4E4E4',
        backgroundColor:'#F8F8F8',
        flexDirection: 'row',
        alignItems: 'center',
        // paddingVertical: 10,
        justifyContent: 'center',
      },
      UserIcon: {
        width:responsiveScreenWidth(5), // Set the width as needed
        height: responsiveScreenHeight(2.3), // Set the height as needed
        marginLeft:responsiveScreenWidth(1.2), // Set the margin as needed
      },
      Password_Box:{
        // borderWidth:2,
        height:responsiveScreenHeight(9),
        width:'100%',
        marginTop:responsiveScreenHeight(1)
    },
    Password_input:{
        // borderWidth:1,
        height:responsiveScreenHeight(5),
        width:'80%',
        fontSize:responsiveScreenFontSize(1.5),
        fontFamily:'Poppins',
        color: '#000000',
        fontWeight:'400' 
    },
    ToggleButton: {
        // marginTop:responsiveScreenHeight(2),
        width:responsiveScreenWidth(10),
        height:responsiveScreenHeight(5),
        alignItems:'center',
        justifyContent:'center',
        // borderWidth:2
    },
    Forgot_Box:{
        width:'100%',
        height:responsiveScreenHeight(2.5),
        // borderWidth:2,
        marginTop:responsiveScreenHeight(2.8),
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
    Help_text:{
        fontFamily: "Poppins",
        fontWeight: '500',
        fontSize: responsiveScreenFontSize(1.25),
        color: '#000000',
        // marginLeft:5,

    },
    Recover_Text:{
        fontFamily: "Poppins",
        fontWeight: 'bold',
        fontSize: responsiveScreenFontSize(1.45),
        color: '#1CB5FD',
        marginLeft:responsiveScreenWidth(12),
        marginTop:-2
    },
    Button_Box: {
        // borderWidth:2,
        width:'100%',
        height:responsiveScreenHeight(6),
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button:{
        width: responsiveScreenWidth(85),
        height:responsiveScreenHeight(5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#1CB5FD",
        borderRadius:11        
    },
    Next_Text:{
        fontFamily:'Poppins',
        fontSize:responsiveScreenFontSize(1.42),
        fontWeight:'600',
        color:'#FFFFFF',
    },
    Line_Box: {
        // alignSelf:'center',
        marginTop:responsiveScreenHeight(3),
        height:responsiveScreenHeight(4),
        // borderWidth:2,
        marginRight:responsiveScreenWidth(9),
        width:responsiveScreenWidth(85),
        flexDirection: 'row', // Align items in a row
    },
    Line: {
        borderBottomWidth: 1,
        borderColor: '#818181', // Line color
        width:responsiveScreenWidth(32),
        height:responsiveScreenHeight(2)
    },
    Line_Text_Box: {
        marginTop:9, // Adjust to half of circle's width
        width: responsiveScreenWidth(30),
        height: responsiveScreenHeight(2),
        alignItems: 'center',
        justifyContent: 'center',
    },
    Line_Text:{
        fontFamily: "Poppins",
        fontWeight: '500',
        fontSize:responsiveScreenFontSize(1.45),
        color: '#000000',
        // marginLeft:5
    },
    Google_Box:{
        width: responsiveScreenWidth(90),
        height: responsiveScreenHeight(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:1,
        alignSelf:'center',
        marginTop:responsiveScreenHeight(3),
        flexDirection:'row',
        backgroundColor: '#F8F8F8',
        borderColor:'#E4E4E4',
        borderRadius:12

    }  ,
    Google_Png:{
       width:20,
       height:20 ,
       marginRight:0.7
    },
    Google_Text:{
        fontFamily: "Poppins",
        fontWeight: '600',
        fontSize: responsiveScreenFontSize(1.7),
        color: '#000000',
        marginLeft:5
    },
    Register_Box:{
        width: responsiveScreenWidth(59),
        height: responsiveScreenHeight(2),
        // borderWidth:1,
        alignSelf:'center',
        marginTop:responsiveScreenHeight(5),
        flexDirection:'row',
        // marginTop:50,
    },
    Account:{
        color: '#000000',
        fontWeight: '600',
        fontSize: 10,
        fontFamily: 'Poppins'
    },
    Register_Text:{
        fontFamily: "Poppins",
        fontWeight: 'bold',
        fontSize: responsiveScreenFontSize(1.48),
        color: '#1CB5FD',
        marginLeft:responsiveScreenWidth(10),
        marginTop:-2
    },
    Error_Text:{
        fontFamily: "Poppins",
        fontWeight: '500',
        fontSize: responsiveScreenFontSize(1.2),
        color: 'red',
        marginLeft:responsiveScreenWidth(3),
        marginTop:3
    },

})