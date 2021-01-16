// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'user-icon-png.png';

  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <Image
        source={require('../assets/user-icon-png.png')}
        // source={{uri: BASE_PATH + proileImage}}
        style={styles.sideMenuProfileIcon}
      />
      <Text
      style={{
        fontSize: 16,
        textAlign: 'center',
        color: 'black',
        margin:5
      }}>
          
         Username
          </Text>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {/* <DrawerItem
          label="Profile"
          onPress={() => navigation.navigate('ProfileScreen')}
          color='red'
        /> */}
        {/* <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://aboutreact.com/');
            }}>
            Rate Us
          </Text>
          <Image
            source={{uri: BASE_PATH + 'star_filled.png'}}
            style={styles.iconStyle}
          />
        </View> */}
      </DrawerContentScrollView>
      {/* <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}>
        www.aboutreact.com
      </Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    marginTop:50,
    // borderColor:'red' ,
    // borderWidth:5  
  
    
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;