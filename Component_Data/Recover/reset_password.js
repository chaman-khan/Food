import React, { useState, useRef } from 'react'
import { View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import styles from './reset_password_styles'
// import verification from '../../Images/verification.svg'
const Reset_Password_Screen = ({navigation}) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }
    const Handle_update = () => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError(true);
            Alert.alert(
                'Password Error',
                'Password must be at least 6 characters long and contain at least one digit, one letter, and one special character.',
                [
                    {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                    },
                ],
                { cancelable: false }
            );
            return;
        } else {
            setPasswordError(false);
            Alert.alert(
                'Successfull',
                'Your password has been changed successfully',
                [
                    {
                        text: 'OK',
                        onPress: () => console.log('OK Pressed'),
                    },
                ],
                { cancelable: false }
            );
            navigation.navigate('Login');
        }
    }
    return (
        <View style={styles.Display}>
            <View style={styles.Png_Box}>
                <Image source={require('../Images/privacy.png')} />
            </View>
            <View style={styles.Text_Box}>
                <Text style={styles.Text1}>Reset Password</Text>
                <Text style={styles.Text2}>Now you will set a new authentic password.</Text>
            </View>
            <View style={styles.Password_Box}>
                <Text style={styles.User_Password_Texts}>Password</Text>
                <View style={styles.User_Input_Container}>
                    <Image source={require('../Images/password.png')} style={styles.Password_png} />
                    <TextInput
                        onChangeText={(Text) => setPassword(Text)}
                        secureTextEntry={!passwordVisible}
                        placeholderTextColor={'#818181'}
                        style={styles.Password_input}
                        placeholder='Password'
                    />
                    <TouchableOpacity
                        style={styles.ToggleButton}
                        onPress={togglePasswordVisibility}>
                        <Image style={{ width: 18, height: 18, }}
                            source={passwordVisible ? require('../Images/eye-on.png') : require('../Images/eye-off.png')}
                        />
                    </TouchableOpacity>
                </View>
                {
                    passwordError ? <Text style={styles.Error_Text}>* Enter valid password</Text> : null
                }
            </View>
            <View style={styles.Button_Box}>
                <TouchableOpacity style={styles.Button} onPress={Handle_update} activeOpacity={0.7}>
                    <Text style={styles.Verify_Text}>Update</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Reset_Password_Screen