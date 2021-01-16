// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList
}from 'react-native'
import {SearchBar} from 'react-native-elements';

import  MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {   createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const App = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json()
     
      )
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
        // console.log(responseJson)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank.....text=whatever user type
    // console.log("enter",text)
   
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        //   console.log(item)   item are all objects of apis  item=object with all fields
        // const itemData = item.title 
        //   ? item.title.toUpperCase()
        //   : ''.toUpperCase();
        const itemData=item.title.toUpperCase()+item.body.toUpperCase()
        // console.log(itemData)

        
        
        const textData = text.toUpperCase();
        
        // console.log("id",itemData)        
        //  (itemData=titles of all objects in upper case)
        // console.log("upper text",textData)
        return itemData.indexOf(textData) > -1; 
      
        // check string inside value
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text
        style={styles.itemStyle}
        onPress={() => getItem(item)}>
          {item.id}
          {'.'}
          {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Name : ' + item.title);
  };
  const BottomTabStack = () => {
    return (
      <Tab.Navigator
        initialRouteName="HomeScreen"
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#e0e0e0',
          },
          labelStyle: {
            textAlign: 'center',
            fontSize: 16,
          },
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home Screen',
            /*tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),*/
          }}
        />
        <Tab.Screen
          name="ExploreScreen"
          component={ExploreScreen}
          options={{
            tabBarLabel: 'Explore Screen',
            /*tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="settings"
                color={color}
                size={size}
              />
            ),*/
          }}
        />
      </Tab.Navigator>
    );
  };
  

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{size: 24}}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Search Doctors ..."
          value={search}
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
});

export default App;