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
import Appoint from './Admin/Appoint';
import CustomSidebarMenu from './CustomSidebarMenu';
import NavigationDrawerHeader from './NavigationDrawerHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Dashboard}
        options={{
          title: 'Admin Dashboard', //Set Header Title
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
        }}
      />
    </Stack.Navigator>
  );
};

const doctorScreenStack = ({navigation}) => {
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
        name="DoctorScreen"
        component={Doctor}
        options={{
          title: 'Doctors ', //Set Header Title
         
        }}
        
      />
      
    </Stack.Navigator>
  );
};

const patientScreenStack = ({navigation}) => {
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
        name="PatientScreen"
        component={Patient}
        options={{
          title: 'Patients ', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const appointScreenStack = ({navigation}) => {
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
        name="AppointScreen"
        component={Appoint}
        options={{
          title: 'Appointments ', //Set Header Title
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
        name="DoctorScreen"
        options={{drawerLabel: 'Doctor'}}
        component={doctorScreenStack}
      />
       <Drawer.Screen
        name="PatientScreen"
        options={{drawerLabel: 'Patient'}}
        component={patientScreenStack}
      />
       <Drawer.Screen
        name="Appointment Screen"
        options={{drawerLabel: 'Appointment'}}
        component={appointScreenStack}
      />
            {/* <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home Screen'}}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Setting Screen'}}
        component={settingScreenStack}
      /> */}

    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;