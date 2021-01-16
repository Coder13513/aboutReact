// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import splash from './splash';
import SettingsScreen from './SettingsScreen';
import Dashboard from './Admin/Dashboard';
import Doctor from './Admin/Doctor';
import Patient from './Admin/Patient';
import Appoint from './Patient/Appoint';
import status from './Patient/status';
import viewDoctor from './Patient/viewDoctor';
import Staff from './Admin/Staff';
import Attend from './Admin/Attend';
import CustomSidebarMenu from './CustomSidebarMenu';
import NavigationDrawerHeader from './NavigationDrawerHeader';
import Home from './Patient/Home';
import profile from './Patient/profile';
import Search from './Patient/Search'
// import DC from './DC';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          title: 'Welcome', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
         
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
            
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          headerTitleAlign:'center'
        }}
      />
       <Stack.Screen
        name="AppointScreen"
        component={Appoint}
        options={{
          title: 'Create Appointments', //Set Header Title
        
         
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
            
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          headerTitleAlign:'center'
        }}
        /> 
         <Stack.Screen
        name="StatusScreen"
        component={status}
        options={{
          title: 'View Appointments', //Set Header Title
         
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
            
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          headerTitleAlign:'center'
        }}
        />
         <Stack.Screen
        name="VisitingScreen"
        component={viewDoctor}
        options={{
          title: 'View Visiting Doctors', //Set Header Title
         
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
            
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
          headerTitleAlign:'center'
        }}
        />
  
   
  
    </Stack.Navigator>
  );
};

const profileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="ProfileScreen"
        component={profile}
        options={{
          title: 'User Profile ', //Set Header Title
         
        }}
        
      />
      
    </Stack.Navigator>
  );
};



const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: 'black',
        },
      }}
      screenOptions={{headerShown: false}}

      drawerContent={CustomSidebarMenu}
    >
          <Drawer.Screen
        name="Dashboard"
        options={{drawerLabel: 'Dashboard'}}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="ProfileScreen"
        options={{drawerLabel: 'Profile'}}
        component={profileScreenStack}
      />
   
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;