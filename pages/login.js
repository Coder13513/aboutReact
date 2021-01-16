// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

// import Loader from './Components/Loader';

const LoginScreen = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  // const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();
   


 const sendMessage = () => {
    // Alert.alert(userEmail, userPassword);
    navigation.replace('DrawerNavigationRoutes');
    // this.props.navigation.navigate('HomeScreenRoute');
    // this.props.navigation.goBack();
}
  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    // setLoading(true);
    let dataToSend = {
          email: userEmail,
          password: userPassword
        };
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    console.log(formBody),
    
    formBody = formBody.join('&');

    console.log(formBody),
    

    fetch('http://127.0.0.1:8000/auth/login/', {
      method: 'POST',
   
      body: formBody,

      headers:{
        'Accept': 'application/json',
        'Content-Type':'application/json'
    }
      
      // headers: {
      //   //Header Defination
      //   'Accept': 'application/json, text/plain',
      //   'Content-Type':  'application/json'
      // },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        // setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status == 1) {
          AsyncStorage.setItem(
            'user_id',
             responseJson.data[0].user_id
          );
          console.log(responseJson.data[0].user_id);
          navigation.replace('DrawerNavigationRoutes');
        } else {
          setErrortext('Please check your email id or password');
          console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        // setLoading(false);
        console.error(error);
      });
  };

  return (
    <View style={styles.mainBody}>
      {/* <Loader loading={loading} /> */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../assets/thumbnail_Leanvia-logo.png')}
                style={{
                  width: '50%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 40,
                  // marginTop:-10
                }}
              />
              <Text style={styles.heading} > Hospital Management System</Text> 
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={
                  (UserPassword) => setUserPassword(UserPassword)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>
                {errortext}
              </Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={sendMessage}>
              <Text style={styles.buttonTextStyle}>
                LOGIN
              </Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              New Here ? Register
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    // backgroundColor: 'white',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  heading:{
    // borderBottomWidth:2,
    borderColor:'black',
    fontSize:20,
    // marginBottom:20,
    marginTop:-70
    // backgroundColor:'red'
},
});


// --------------------------old login-------------------

// Navigate Between Screens using React Navigation in React Native //
// https://aboutreact.com/react-native-stack-navigation //
// import * as React from 'react';
// import { Button, View, Text, SafeAreaView,Image ,StyleSheet} from 'react-native';

// const login = ({ navigation }) => {
//   return (
//     <SafeAreaView style={{ flex: 8}}>
//       <View style={{ flex: 3, padding: 16 ,
//         backgroundColor:'yellow'
//       }}
//         >
//         <View
//           style={{
//            flex:3,
//             alignItems: 'center',
//             justifyContent: 'center',
//             backgroundColor:'red'
//           }}>
            
//              <Image
//         source={require('../assets/thumbnail_Leanvia-logo.png')}
//         style={{width: '30%',height:100, resizeMode: 'contain', 
//         margin: 10
//       }}
//       />
//       <Text style={styles.heading} > Hospital Management System</Text> 
//           {/* <Text
//             style={{
//               fontSize: 25,
//               textAlign: 'center',
//               marginBottom: 16
//             }}>
//             This is Second Page of the App
//           </Text>  */}
//           <Button
//             title="Go back"
//             onPress={() => navigation.goBack()}
//           />
//           <Button
//             title="Go to SecondPage... again"
//             onPress={() => navigation.push('login')}
//           />
//           <Button
//             title="Replace this screen with Third Page"
//             onPress={() =>
//               navigation.replace('register', {
//                 someParam: 'Param',
//               })
//             }
//           /> 
//           {/* <Button
//             title="Reset navigator state to Third Page"
//             onPress={() =>
//               navigation.reset({
//                 index: 0,
//                 routes: [
//                   {
//                     name: 'register',
//                     params: { someParam: 'reset' },
//                   },
//                 ],
//               })
//             }
//           />
//           <Button
//             title="Go to First Page"
//             onPress={() => navigation.navigate('splash')}
//           /> */}
//       <Button
//             title="Go to Third Page"
//             onPress={() =>
//               navigation.navigate(
//                 'register', { someParam: 'Param1' }
//               )
//             }
//           />
//         </View>
//         {/* <Text
//           style={{
//             fontSize: 18,
//             textAlign: 'center',
//             color: 'grey'
//           }}>
//           Navigate Between Screens using
//           {'\n'}
//           React Navigation
//         </Text> */}
//         {/* <Text
//           style={{
//             fontSize: 16,
//             textAlign: 'center',
//             color: 'grey'
//           }}>
//           www.aboutreact.com
//         </Text> */}
//         {/* </View> */}
//       </View>
//     </SafeAreaView>
//   );
// }

// export default login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   activityIndicator: {
//     alignItems: 'center',
//     height: 80,
//   },
//   heading:{
//     // borderBottomWidth:2,
//     borderColor:'black',
//     fontSize:15,
//     // marginBottom:20,
//     marginTop:-50
//     // backgroundColor:'red'
// },
// });