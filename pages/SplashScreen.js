// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
    //   AsyncStorage.getItem('user_id').then((value) =>
    //     navigation.replace(
    //       value === null ? 'Auth' : 'DrawerNavigationRoutes'
    //     ),
    //   );
    navigation.replace('TabStack');
   
    },1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/thumbnail_Leanvia-logo.png')}
        style={{width: '90%', resizeMode: 'contain', margin: 10}}
      />
      <Text style={styles.heading} > Hospital Management System</Text> 
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
  heading:{
    // borderBottomWidth:2,
    borderColor:'black',
    fontSize:25,
    // marginBottom:20,
    marginTop:-70
    // backgroundColor:'red'
},
});