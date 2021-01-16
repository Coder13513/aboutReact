import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

//import Card
import { Card ,ListItem} from 'react-native-elements'; 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLock,faAirFreshener,faAnchor ,faEdit,faTrash,faPlus,faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const App = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
       < ScrollView>
      <View style={styles.cardContainer}>
      <View
          style={{
            flex: 1,
            // alignItems: 'center',
            // justifyContent: 'center',
          }}>
        {/* // implemented with Text and Button as children */}
        <View style={{ flexDirection: 'row',marginTop:5 ,justifyContent:'space-between'}}>

        <FontAwesomeIcon icon={faArrowLeft} size={20} color={"blue"} 
        onPress={() => navigation.goBack()}/>
        <FontAwesomeIcon icon={faPlus} size={20} color={"blue"}
        onPress={() => navigation.navigate('NewRoutes')}/>

        </View>
         
         <Card>
          <Card.Title>   David
          
                 </Card.Title>
          <Card.Divider />
        <Text> Mobile:1234</Text>
          
          <Text> Designation:Nurse</Text>
          <Text> Hospital:Ivy</Text> 
  
<View style={{ flexDirection: 'row', justifyContent:'space-evenly',marginTop:5 }}>
<FontAwesomeIcon icon={faEdit} size={20} color={"blue"} />
<FontAwesomeIcon icon={faTrash} size={20} color={"red"} />

</View>
          
        </Card>

       
        <Card>
          <Card.Title> Nelson  
          
                 </Card.Title>
          <Card.Divider />
        <Text> Mobile:1233</Text>
          
          <Text> Designation:Receptionist</Text>
          <Text> Hospital:Super</Text> 
          <View style={{ flexDirection: 'row', justifyContent:'space-evenly',marginTop:5 }}>
<FontAwesomeIcon icon={faEdit} size={20} color={"blue"} />
<FontAwesomeIcon icon={faTrash} size={20} color={"red"} />

</View>   
          
        </Card>
        <Card>
          <Card.Title>Perrine  
          
                 </Card.Title>
          <Card.Divider />
        <Text> Mobile:234</Text>
          
          <Text> Designation:Chemist</Text>
          <Text> Hospital:Exv</Text>    
          <View style={{ flexDirection: 'row', justifyContent:'space-evenly',marginTop:5 }}>
<FontAwesomeIcon icon={faEdit} size={20} color={"blue"} />
<FontAwesomeIcon icon={faTrash} size={20} color={"red"} />

</View>
          
        </Card>
       
       
        
</View>
     </View>
     </ScrollView>
     </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: 0,
    backgroundColor: '#ecf0f1',

  },
  cardContainer:{
flex:1,

  },
  
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    marginTop: 50,
  },
  cardstyle: {
    flexDirection: 'row'
  },
  count:{
    margin:10,
    marginLeft:50
  },
  image:{
    // alignItems:'center',
    width:200,
    height:100,
    marginLeft:50,
    resizeMode:"cover"

  },
  doctors:{
    //   margin:20,
      fontSize:20,
      justifyContent:'center'
  },
  iconStyle: {
    fontSize: 40,
    marginTop: 30,
    color: 'black',
  },
 
});