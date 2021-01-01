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
import { FlatList } from 'react-native-gesture-handler';

const App = () => {
 

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
       <View style={styles.cardContainer}>
         
      <View
          style={{
            flex: 1,
            // alignItems: 'center',
            // justifyContent: 'center',
          }}>
        {/* // implemented with Text and Button as children */}

         <Card>
          <Card.Title>   Gillot
          
                 </Card.Title>
          <Card.Divider />
        <Text> Mobile:1234</Text>
          
          <Text> Assigned Doctor:David</Text>
          <Text> Admit Date:31-12-20</Text>    
          
        </Card>

       
        <Card>
          <Card.Title>   Gillot
          
                 </Card.Title>
          <Card.Divider />
        <Text> Mobile:1234</Text>
          
          <Text> Assigned Doctor:David</Text>
          <Text> Admit Date:31-12-20</Text>    
          
        </Card>

        <Card>
          <Card.Title>   Gillot
          
                 </Card.Title>
          <Card.Divider />
        <Text> Mobile:1234</Text>
          
          <Text> Assigned Doctor:David</Text>
          <Text> Admit Date:31-12-20</Text>    
          
        </Card>

        <Card>
          <Card.Title>   Gillot
          
                 </Card.Title>
          <Card.Divider />
        <Text> Mobile:1234</Text>
          
          <Text> Assigned Doctor:David</Text>
          <Text> Admit Date:31-12-20</Text>    
          
        </Card>

        <Card>
          <Card.Title>   Gillot
          
                 </Card.Title>
          <Card.Divider />
        <Text> Mobile:1234</Text>
          
          <Text> Assigned Doctor:David</Text>
          <Text> Admit Date:31-12-20</Text>    
          
        </Card>

        <Card>
          <Card.Title>   Gillot Last
          
                 </Card.Title>
          <Card.Divider />
        <Text> Mobile:1234</Text>
          
          <Text> Assigned Doctor:David</Text>
          <Text> Admit Date:31-12-20</Text>    
          
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
  }
 
});