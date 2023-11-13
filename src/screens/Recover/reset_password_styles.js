import { StyleSheet } from "react-native"
export default styles = StyleSheet.create({
    Display: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    Png_Box: {
        // borderWidth: 2,
        width: 78,
        height: 78,
        borderColor: '#000000',
        marginTop: 86,
        alignItems:'center',
        justifyContent: 'center',
    },
    Text_Box: {
        width: 290,
        height: 95,
        // borderWidth:1,
        marginTop: 8,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    Text1: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        letterSpacing: 0.28,
        lineHeight: 24
    },
    Text2: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '400',
        color: '#000000',
        textAlign: 'center',
        letterSpacing: 0.28,
        lineHeight: 21,
        marginTop: 21
    },
    Password_Box:{
        // borderWidth:2,
        height:95,
        width:376,
        marginTop:15,
        alignSelf: 'center',
    },
    User_Password_Texts:{
        fontFamily: "Poppins",
        fontWeight: '500',
        fontSize: 14,
        color: '#000000',
        marginLeft:5
    },
    User_Input_Container: {
        marginTop:6,
        borderWidth:1,
        borderRadius:12,
        width:376,
        height:48,
        borderColor: '#E4E4E4',
        backgroundColor:'#F8F8F8',
        flexDirection: 'row',
        alignItems: 'center',
        // paddingVertical: 10,
        justifyContent: 'center',
      },
      Password_png_Box: {
        width: 20, // Set the width as needed
        height: 20, // Set the height as needed
        marginLeft: 12, // Set the margin as needed
        // borderWidth:1

      },
      Password_png: {
        width: 20, // Set the width as needed
        height: 20, // Set the height as needed
        // marginLeft: 12, // Set the margin as needed
      },
      Password_input:{
        // borderWidth:1,
        height:48,
        width:'80%',
        fontSize:13,
        fontFamily:'Poppins',
        color: '#000000',
        fontWeight:'400' 
    },
    Error_Text:{
        fontFamily: "Poppins",
        fontWeight: '500',
        fontSize: 10,
        color: 'red',
        marginLeft:15,
        marginTop:3
    },
    Button_Box: {
        // borderWidth:2,
        width:'100%',
        height:48,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button:{
        width: 376,
        height:48,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#1CB5FD",
        borderRadius:11        
    },
    Verify_Text:{
        fontFamily:'Poppins',
        fontSize:12,
        fontWeight:'600',
        color:'#FFFFFF',
    },
    ToggleButton: {
        height:45,
        width:45,
        alignItems:'center',
        justifyContent:'center',
    },
})