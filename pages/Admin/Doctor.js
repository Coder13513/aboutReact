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

// Import FontAwesome Component
// parseIconFromClassName to parse any fa fa-icon into fontawesome
import FontAwesome, {
    SolidIcons,
    RegularIcons,
    BrandIcons,
    parseIconFromClassName,
  } from 'react-native-fontawesome';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLock,faAirFreshener,faAnchor ,faEdit,faTrash,faPlus} from '@fortawesome/free-solid-svg-icons';
import {faAdobe,faApple,faMicrosoft} from '@fortawesome/free-brands-svg-icons';

const parsedIcon = parseIconFromClassName('fab fa-apple');
const App = () => {
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
        <FontAwesomeIcon icon={faPlus} size={20} color={"blue"} />
         <Card>
          <Card.Title>   David
          
                 </Card.Title>
          <Card.Divider />
        <Text> Mobile:1234</Text>
          
          <Text> Specialization:Dermatologists</Text>
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
          
          <Text> Specialization:Dermatologists</Text>
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
          
          <Text> Specialization:Orthopaedists</Text>
          <Text> Hospital:Exv</Text>    
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
          
          <Text> Specialization:Orthopaedists</Text>
          <Text> Hospital:Exv</Text>    
          
          <View style={{ flexDirection: 'row', justifyContent:'space-evenly',marginTop:5 }}>
<FontAwesomeIcon icon={faEdit} size={20} color={"blue"} />
<FontAwesomeIcon icon={faTrash} size={20} color={"red"} />

</View>
        </Card>
        <Card>
          <Card.Title>Perrine  Last
          
                 </Card.Title>
          <Card.Divider />
        <Text> Mobile:234</Text>
          
          <Text> Specialization:Orthopaedists</Text>
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