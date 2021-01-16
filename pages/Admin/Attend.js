// Example of GridView using FlatList in React Native
// https://aboutreact.com/example-of-gridview-using-flatlist-in-react-native/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, FlatList, Image ,Text} from 'react-native';

//import Card
import { Card ,ListItem} from 'react-native-elements';

const App = () => {
  const [dataSource, setDataSource] = useState([]);

  useState(() => {
    let items = Array.apply(null, Array(9)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
    });
    setDataSource(items);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: 'column',  }}>
               <Card>
          <Card.Title>   Attendance Date : 21-10-20
          
                 </Card.Title>
          <Card.Divider />
        <Text> Taken By  : Gillot@gill.com</Text>
          
          <Text> Doctor:David,Nelson</Text>
         
          
        </Card>

          </View>
        )}
        //Setting the number of column
        // numColumns={2}
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
