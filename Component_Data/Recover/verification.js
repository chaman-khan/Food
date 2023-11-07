import React, { useState, useRef } from 'react'
import { View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import styles from './verification_style'
// import verification from '../../Images/verification.svg'
const Verification_Screen = ({ navigation }) => {
    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
    const handleVerificationCodeChange = (text, index) => {
        // Ensure only numeric input
        if (/^[0-9]+$/.test(text) || text === '') {
            const newCode = [...verificationCode];
            newCode[index] = text;
            setVerificationCode(newCode);

            // Move to the next input
            if (text !== '' && index < verificationCode.length - 1) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleVerifyCode = () => {
        const code = verificationCode.join('');
        if (code.length === 6) {
            // Code verification logic here
            Alert.alert('Success', 'Verification code is correct!');
            navigation.navigate('Reset Password Screen');
        } else {
            Alert.alert('Incorrect', 'Please enter a 6-digit verification code.');
        }
    };
    return (
        <View style={styles.Display}>
            <View style={styles.Png_Box}>
                <Image source={require('../Images/verification.png')} />
            </View>
            <View style={styles.Text_Box}>
                <Text style={styles.Text1}>Verification</Text>
                <Text style={styles.Text2}>Enter the 6 digit code that you recieved on your Email.</Text>
            </View>
            <View style={styles.Input_Box}>
                <View style={styles.codeContainer}>
                    {verificationCode.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                            style={styles.input}
                            keyboardType="numeric"
                            maxLength={1}
                            value={digit}
                            onChangeText={(text) => handleVerificationCodeChange(text, index)}
                        />
                    ))}
                </View>
            </View>
            <View style={styles.Button_Box}>
                <TouchableOpacity onPress={handleVerifyCode} style={styles.Button} activeOpacity={0.7}>
                    <Text style={styles.Verify_Text}>Verify</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Verification_Screen