// Example of GridView using FlatList in React Native
// https://aboutreact.com/example-of-gridview-using-flatlist-in-react-native/

// import React in our code
import React, {useEffect,useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image
} from 'react-native';

const App = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    let items = Array.apply(null, Array(4)).map((v, i) => {
      return {
        id: i,
        src: 'http://placehold.it/200x200?text=' + (i + 1)
      };
    });
    setDataSource(items);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 1
            }}>
            <Image
              style={styles.imageThumbnail}
              source={{uri: item.src}}
            />
          </View>
        )}
        //Setting the number of column
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});
// // React Native Card View for Android and IOS
// // https://aboutreact.com/react-native-card-view/

// // import React in our code
// import React from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   Image
// } from 'react-native';

// //import Card
// import { Card ,ListItem} from 'react-native-elements';
// const users = [
//   {
//      name: 'brynn',
//      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
//   },
//  // more users here
//  ]
// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.cardContainer}>
//       <View
//           style={{
//             flex: 1,
//             // alignItems: 'center',
//             // justifyContent: 'center',
//           }}>
//         {/* // implemented with Text and Button as children */}
//          <Card>
//           <Card.Title>Total Doctors :  
          
//           <Text >
//               3
//             </Text>
//           </Card.Title>
//           <Card.Divider />
    
//           <Card.Image style={styles.image}
//              source={require('../../assets/doctor.jpeg')}>
//           </Card.Image>
//         </Card>
//         <Card>
//           <Card.Title>Total Patients :  
          
//           <Text >
//               5
//             </Text>
//           </Card.Title>
//           <Card.Divider />
    
//           <Card.Image style={styles.image} source={require('../../assets/pateient.jpeg')}>
//           </Card.Image>
//         </Card>
//         <Card>
//           <Card.Title>Total Appointments :  
          
//           <Text >
//               1
//             </Text>
//           </Card.Title>
//           <Card.Divider />
    
//           <Card.Image style={styles.image} source={require('../../assets/Appoint.jpeg')}>
//           </Card.Image>
//         </Card>
// </View>
//      </View>
//      </SafeAreaView>
//   );
// };
// export default App;

// const styles = StyleSheet.create({
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
 
// });