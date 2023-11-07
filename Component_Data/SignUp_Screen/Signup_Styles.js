import { StyleSheet } from "react-native";
import { responsiveScreenFontSize,responsiveScreenHeight,responsiveScreenWidth } from "react-native-responsive-dimensions"
export const styles = StyleSheet.create({
    Png_Box: {
        // borderWidth:1,
        width:responsiveScreenWidth(20),
        height:responsiveScreenHeight(8.3),
        alignItems: 'center',
        marginTop: responsiveScreenWidth(2)
    },
    png: {
        width:responsiveScreenWidth(18),
        height:responsiveScreenHeight(8),
    },
    Display: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        // justifyContent: 'center',
        width:responsiveScreenWidth(100)
    },
    Text_Box: {
        marginTop: responsiveScreenHeight(1),
        // borderWidth:1,
        width:responsiveScreenWidth(60),
        height:responsiveScreenHeight(11),
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    Text1: {
        fontSize: responsiveScreenFontSize(2.4),
        fontWeight: '600',
        color: '#000000',
        fontFamily: 'poppins',
        letterSpacing: 0.28,
        textAlign: 'center',
        lineHeight: 27,
    },
    Text2: {
        marginTop:responsiveScreenHeight(1.3),
        fontSize: responsiveScreenFontSize(1.65),
        fontWeight: '400',
        color: '#000000',
        fontFamily: 'poppins',
        letterSpacing: 0.28,
        textAlign: 'center',
        lineHeight: 27,
    },
    container: {
        width: '92%',
        height:responsiveScreenHeight(9),
        // borderWidth: 2,
        marginTop: 31,
        // backgroundColor: '#F8F8F8',
        padding: 16,
        justifyContent: 'center'
    },
    container_Box: {
        width: '100%',
        height: responsiveScreenHeight(5.5),
        borderWidth: 1,
        // marginTop: 31,
        backgroundColor: '#F8F8F8',
        // padding: 16,
        borderColor: '#E4E4E4',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 12,

    },
    dropdown: {
        // borderColor:'#E4E4E4',
        backgroundColor: '#F8F8F8',
        color: '#000000',
        height: responsiveScreenHeight(5),
        // borderColor: 'gray',
        // borderWidth: 1,
        paddingHorizontal: 8,
        width: '91%',
        marginRight: 10,

    },
    DropDown_Item: {
        height: responsiveScreenHeight(2),
        width: '91%',
        fontSize: responsiveScreenFontSize(1.6),
        fontFamily: 'Poppins',
        color: '#000000',
        fontWeight: '400',
    },
    placeholderStyle: {
        fontFamily: 'Poppins',
        color: '#818181',
        fontSize: responsiveScreenFontSize(1.6),
    },
    label: {
        color: '#000000',
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: responsiveScreenFontSize(1.6),
    },
    selectedTextStyle: {
        // height:48,
        width: '91%',
        fontSize: responsiveScreenFontSize(1.5),
        fontFamily: 'Poppins',
        color: '#000000',
        fontWeight: '400',
    },
    User_Box: {
        marginTop: responsiveScreenHeight(1.6),
        // borderWidth:2,
        height: responsiveScreenHeight(9),
        width: '85%'
    },
    Head_Texts: {
        fontFamily: "Poppins",
        fontWeight: '500',
        fontSize: responsiveScreenFontSize(1.65),
        color: '#000000',
        marginLeft: responsiveScreenWidth(3),
        marginBottom: 6
    },
    User_Input_Container: {
        borderWidth: 1,
        borderRadius: 12,
        width: '100%',
        height: responsiveScreenHeight(5.5),
        borderColor: '#E4E4E4',
        backgroundColor: '#F8F8F8',
        flexDirection: 'row',
        alignItems: 'center',
        // paddingVertical: 10,
        justifyContent: 'center',
    },
    UserIcon: {
        width:responsiveScreenWidth(5), // Set the width as needed
        height: responsiveScreenHeight(2.3), // Set the height as needed
        marginLeft:responsiveScreenWidth(1.2)
    },
    User_input: {
        // borderWidth:2,
        height: responsiveScreenHeight(5),
        width: '91%',
        fontSize: responsiveScreenFontSize(1.5),
        fontFamily: 'Poppins',
        color: '#000000',
        fontWeight: '400',
    },
    Password_Box: {
        // borderWidth:2,
        height: responsiveScreenHeight(9),
        width: '85%',
        marginTop: responsiveScreenHeight(1.7)
    },
    ToggleButton: {
        width:responsiveScreenWidth(10.5),
        height:responsiveScreenHeight(5),
        // borderWidth:2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Password_input: {
        // borderWidth:1,
        height: responsiveScreenHeight(5),
        width: '80%',
        fontSize: responsiveScreenFontSize(1.5),
        fontFamily: 'Poppins',
        color: '#000000',
        fontWeight: '400'
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
    Sign_Up_Text: {
        fontFamily: 'Poppins',
        fontSize: responsiveScreenFontSize(1.4),
        fontWeight: '600',
        color: '#FFFFFF',
    },
    SignIn_Box: {
        marginTop: responsiveScreenHeight(2),
        borderTopWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#1CB5FD',
        height: responsiveScreenHeight(5.4),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    Already_Text: {
        fontFamily: 'Poppins',
        fontSize: responsiveScreenFontSize(1.45),
        fontWeight: '400',
        color: '#000000',
        marginRight: responsiveScreenWidth(10),
    },
    SignIn_Button: {
        width: responsiveScreenWidth(13),
        height:responsiveScreenHeight(3),
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth:2

    },
    SignIn_Text: {
        fontFamily: 'Poppins',
        fontSize: responsiveScreenFontSize(1.45),
        fontWeight: 'bold',
        color: '#1CB5FD',
    }
})