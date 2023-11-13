// import { useState } from 'react';

// export function useSignUp() {
//     const [category, setCategory] = useState("");
//     const [name, setName] = useState("");
//     const [phone_number, setPhone_number] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword,setConfirmPassword] =useState("")

//     const [categoryError, setCategoryError] = useState(false);
//     const [nameError, setNameError] = useState(false);
//     const [phone_numberError, setPhone_numberError] = useState(false);
//     const [emailError, setEmailError] = useState(false);
//     const [passwordError, setPasswordError] = useState(false);

//     const handleSignUp = async () => {
//         if (!category) {
//             setCategoryError(true);
//         } else {
//             setCategoryError(false);
//         }
//         if (!name) {
//             setNameError(true);
//         } else {
//             setNameError(false);
//         }
//         if (!phone_number) {
//             setPhone_numberError(true);
//         } else {
//             setPhone_numberError(false);
//         }
//         if (!email) {
//             setEmailError(true);
//         } else {
//             setEmailError(false);
//         }
//         if (!password) {
//             setPasswordError(true);
//         } else {
//             setPasswordError(false);
//         }
//         if (!category || !name || !phone_number || !email || !password) {
//             return false;
//         }
//         const url = "http://172.17.176.1:3000/users"
//         let result = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password,category,phone_number,name })
//         })
//         result = await result.json()
//     };

//     return {
//         category,
//         setCategory,
//         name,
//         setName,
//         phone_number,
//         setPhone_number,
//         email,
//         setEmail,
//         password,
//         setPassword,
//         categoryError,
//         nameError,
//         phone_numberError,
//         emailError,
//         passwordError,
//         handleSignUp,
//         confirmPassword,
//         setConfirmPassword
//     };
// }
