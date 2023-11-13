import React, {useEffect} from 'react';
import MainNav from './src/Navigations/mainNav';
import {SafeAreaView} from 'react-native';
const App = () => {
  return (
    // <View>
    <SafeAreaView style={{flex: 1}}>
      <MainNav />
    </SafeAreaView>
    // <Donation_Done />
    // </View>
  );
};
export default App;
// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";
// import Signup_Screen from "./Component_Data/SignUp_Screen/signup_screen";
// import Login_Screen from "./Component_Data/Login_Screen/login_screen";
// import OnBording from "./Component_Data/OnBording/onbording";
// import Recover_Screen from "./Component_Data/Recover/recover";
// import Reset_Password_Screen from "./Component_Data/Recover/reset_password"
// import Verification_Screen from "./Component_Data/Recover/verification";
// import { View } from "react-native";

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen
//         name="On Bording"
//         component={OnBording}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Login"
//         component={Login_Screen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Recover Screen"
//         component={Recover_Screen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Verification Screen"
//         component={Verification_Screen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Reset Password Screen"
//         component={Reset_Password_Screen}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Sign Up"
//         component={Signup_Screen}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
