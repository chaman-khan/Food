import { StyleSheet } from "react-native"
import { responsiveScreenFontSize,responsiveScreenHeight,responsiveScreenWidth } from "react-native-responsive-dimensions"
export const Styles = StyleSheet.create({
    Display:{
        flex:1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'   ,     
    },
    Skip_Box :{
        // borderWidth:1,
        marginTop:responsiveScreenHeight(6),
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    Skip_Button:{
        alignContent:'center',
        justifyContent:'center',
        marginRight:responsiveScreenWidth(4),
        borderWidth: 1,
        width:responsiveScreenWidth(19),
        // height:28,
        height:responsiveScreenHeight(3.2),
        borderRadius:41,
        borderColor:'#1CB5FD',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#FFFFFF',
        backgroundColor: '#8FCDEA',
        // opacity: 0.5,
        // borderWidth:2
    },
    Png_Box:{
        // height:55,
        height:responsiveScreenHeight(8),
        width:responsiveScreenWidth(19),
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth:1
    },
    Png:{
        // width:63.75,
        // height:54.77 ,
        width:responsiveScreenWidth(17.5),
        height:responsiveScreenHeight(8),
        // marginLeft:156,
        // marginRight:152,       
    },
    Slide_Box:{
        // height:470,
        height:responsiveScreenHeight(49),
        
        // borderWidth:1,
        // paddingRight:30,
        marginTop:40,
        width:responsiveScreenWidth(100),
        marginLeft:responsiveScreenWidth(2),
        justifyContent: 'center',
        alignItems: 'center'
    },
    Slide_View:{
        // marginRight:-20,
        // width:425,
        // height:500,
        width:responsiveScreenWidth(100),
        height:responsiveScreenHeight(49),
        alignItems: 'center',
        justifyContent: 'flex-start',
        // borderWidth:2
    },
    Slide_Inner_View:{
        width:responsiveScreenWidth(100),
        height:responsiveScreenHeight(49),
        paddingRight:responsiveScreenWidth(5),
        justifyContent: 'flex-start',
        alignItems: 'center',
        // borderWidth:2,
        flexDirection: 'column',
    },
    Slide_Pngs:{
        // borderWidth:2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width:responsiveScreenWidth(100),
        height:responsiveScreenHeight(38),
        // width:305,
        // height:348,
        marginLeft:-36,
        // marginRight:36
    },
    Pngs:{
        alignItems: 'center',
        justifyContent: 'flex-start',
        width:responsiveScreenWidth(75),
        height:responsiveScreenHeight(38),
    },
    Text_Box:{
        marginLeft:responsiveScreenWidth(5),
        // marginRight:responsiveScreenWidth(1),
        marginTop:20,
        // borderWidth:2,
        width:responsiveScreenWidth(85),
        height:responsiveScreenHeight(9),
        alignItems: 'center',
        justifyContent:'flex-start',
        flexDirection:'column'
    },
    Indecator: { 
        // borderWidth:2,
        width:responsiveScreenWidth(14),
        height:responsiveScreenHeight(3),
        // height:30,
        // width:54,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: responsiveScreenHeight(3.2),
        
    },
    Next_Button_Box: {
        // borderWidth:2,
        width:'100%',
        height:responsiveScreenHeight(6),
        marginTop:responsiveScreenHeight(4),
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button:{
        width:responsiveScreenWidth(80),
        height:responsiveScreenHeight(5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#1CB5FD",
        borderRadius:11        
    },



})
export const Texts = StyleSheet.create({
    skip_text:{
        color: "#000000",
        fontFamily:'Poppins',
        fontSize:responsiveScreenFontSize(1.7),

    },
    Slide_Text1:{
        // width:192,
        // height:19,
        fontFamily:'Poppins',
        // fontSize:14,
        fontSize:responsiveScreenFontSize(1.7),
        fontWeight:'bold',
        color:'#1CB5FD',
        // borderWidth:2
        // marginLeft:20

    },
    Slide_Text2:{
        // width:282,
        // height:41,
        fontFamily:'Poppins',
        fontSize:responsiveScreenFontSize(1.42),
        fontWeight:'600',
        color:'#000000',
        // borderWidth:2
        marginTop:10,
        textAlign: 'center',
        lineHeight: 25,
    },
    Next_Text:{
        fontFamily:'Poppins',
        fontSize:responsiveScreenFontSize(1.42),
        fontWeight:'600',
        color:'#FFFFFF',
        // borderWidth:2
    }
})
