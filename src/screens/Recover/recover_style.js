import { StyleSheet} from 'react-native';
export const styles=StyleSheet.create({
    Display: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    Png_Box:{
        width: 65,
        height: 65,
        // borderWidth:1,
        marginTop:89
    },
    Png:{
        width: 65,
        height: 65,
        // borderWidth:1,
        // marginTop:89
    },
    Text_Box:{
        marginTop:17.4,
        width: 300,
        height: 100,
        // borderWidth:1,
        alignItems: "center",
        justifyContent:'flex-start'
        // marginTop:89
    },
    Text1:{
        fontSize:16,
        fontWeight:'600',
        color:'#000000',
        lineHeight:21,
        letterSpacing:0.28
    },
    Text2:{
        fontSize:14,
        fontWeight:'400',
        color:'#000000',
        textAlign:'center',
        marginTop:24.8,
        lineHeight:21,
        letterSpacing:0.28
    },
    Email_Box:{
        height:73,
        width: 380,
        marginTop:29,
        // borderWidth:1,
        justifyContent:'flex-start'
    },
    Email_Text:{
        fontFamily:'Poppins',
        fontSize:14,
        fontWeight:'400',
        color:'#000000',
        lineHeight:21,
        letterSpacing:0.28  ,
        marginLeft:13,
        marginBottom:6   
    },
    Email_Input_Box:{
        flexDirection:'row',
        backgroundColor:'#F8F8F8',
        height:48,
        width: 376,
        borderWidth:1,
        // justifyContent:'center',
        alignItems:'center',
        borderColor:'#E4E4E4',
        borderRadius:12
    },
    Mail_png:{
        width: 20,
        height: 20,
        marginLeft:10
    },
    Email_Inner_Input:{
     width:300,
     height:48,
    //  borderWidth:1,
     marginLeft:10,
     color:'#000000',
     fontFamily:'Poppins',
     fontSize:12,
     fontWeight:'400',
     lineHeight:21,
     letterSpacing:0.28

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
    Sign_In_Text:{
        fontFamily:'Poppins',
        fontSize:12,
        fontWeight:'600',
        color:'#FFFFFF',
    },
    Error_Text:{
        fontFamily: "Poppins",
        fontWeight: '500',
        fontSize: 10,
        color: 'red',
        marginLeft:15,
        marginTop:3
    }
})