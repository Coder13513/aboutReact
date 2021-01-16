// import all the components we are going to use
import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button
} from 'react-native';

//import Card
import { Card ,ListItem} from 'react-native-elements';
const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  },
 // more users here
 ]
 const App = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View
    style={styles.buttonMargin}>
      <Button
      title="View visiting Doctors"
      onPress={() =>
        navigation.navigate('VisitingScreen')
      }
      />
    </View>
    <View
    style={styles.buttonMargin}>
     <Button
       title="Create Appointments"
       onPress={() =>
        navigation.navigate('AppointScreen')
       }
     />
    </View>
    <View
    style={styles.buttonMargin}>
     <Button
       title="View Appointment Status"
       onPress={() =>
        navigation.navigate('StatusScreen')
       }
     />
    </View>
    <View
    style={styles.buttonMargin}>
     <Button
       title="View Invoice"
       onPress={() =>
         navigate('VitalsUpdate', state.params)
       }
     />
    </View>
   
   
    <View
    style={styles.buttonMargin}>
     <Button
       title="Logout"
    //    onPress={logoutUser}
     />
    </View>
  </View>
 );
}

export default App 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
      formHeading : {fontSize: 20},
      formPadding: {padding: 20},
      buttonMargin: {padding: 20},
    
//   container: {
//     flex: 1,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     // paddingTop: 0,
//     backgroundColor: '#ecf0f1',

//   },
//   cardContainer:{
// flex:1,

//   },
  
//   sideMenuProfileIcon: {
//     resizeMode: 'center',
//     width: 100,
//     height: 100,
//     borderRadius: 100 / 2,
//     alignSelf: 'center',
//     marginTop: 50,
//   },
//   cardstyle: {
//     flexDirection: 'row'
//   },
//   count:{
//     margin:10,
//     marginLeft:50
//   },
//   image:{
//     // alignItems:'center',
//     width:200,
//     height:100,
//     marginLeft:50,
//     resizeMode:"cover"

//   },
 
});