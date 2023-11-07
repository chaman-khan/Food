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
        marginTop: 86
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
    Input_Box: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2,
        marginTop: 50
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        // marginBottom: 20,
        alignItems: 'center',
        // borderWidth:1
    },
    input: {
        height: 48,
        width: 48,
        borderColor: '#E4E4E4',
        borderWidth: 1,
        textAlign: 'center',
        marginHorizontal: 5,
        fontSize: 18,
        marginHorizontal: 8,
        borderRadius:12,
        backgroundColor:'#F8F8F8',
        color: '#000000',
        fontSize:12,
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
})