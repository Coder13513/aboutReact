// Navigate Between Screens using React Navigation in React Native //
// https://aboutreact.com/react-native-stack-navigation //
import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text,  TouchableOpacity,  Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import login from './pages/login';
import register from './pages/register';
import Dashboard from './pages/Admin/Dashboard'
import SplashScreen from './pages/SplashScreen'
import DrawerNavigatorRoutes from './pages/DrawerNavigatorRoutes'

const Stack = createStackNavigator();


const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="HomeScreen"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={register}
        options={{
          title: 'Register', //Set Header Title
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

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: true}}
        />
        {/* Navigation Drawer as a landing page */}
         <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigatorRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};


// const NavigationDrawerStructure = (props)=> {
//   //Structure for the navigatin Drawer
//   const toggleDrawer = () => {
//     //Props to open/close the drawer
//     props.navigationProps.toggleDrawer();
//   };

//   return (
//     <View style={{ flexDirection: 'row' }}>
//       <TouchableOpacity onPress={()=> toggleDrawer()}>
//         {/*Donute Button Image */}
//         <Image
//           source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
//           style={{
//             width: 25,
//             height: 25,
//             marginLeft: 5
//           }}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// }
// function firstScreenStack({ navigation }) {
//   return (
//       <Stack.Navigator initialRouteName="splash">
//         <Stack.Screen
//           name="splash"
//           component={splash}
//           options={{
//             title: 'First Page Header', //Set Header Title
//             headerLeft: ()=>
//               <NavigationDrawerStructure
//                 navigationProps={navigation}
//               />,
//             headerStyle: {
//               backgroundColor: '#f4511e', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//       </Stack.Navigator>
//   );
// }

// function secondScreenStack({ navigation }) {
//   return (
//     <Stack.Navigator
//       initialRouteName="login"
//       screenOptions={{
//         headerLeft: ()=>
//           <NavigationDrawerStructure
//             navigationProps={navigation}
//           />,
//         headerStyle: {
//           backgroundColor: '#f4511e', //Set Header color
//         },
//         headerTintColor: '#fff', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//         }
//       }}>
//         <Stack.Screen
//         name="register"
//         component={register}
//         options={{
//           title: 'Third Page Header', //Set Header Title
//         }}/>
//       <Stack.Screen
//         name="login"
//         component={login}
//         options={{
//           title: 'Second Page Header', //Set Header Title
          
//         }}/>
     
//     </Stack.Navigator>
//   );
// }


// function App() {
//   return (
//     <NavigationContainer>
//     <Drawer.Navigator
//       drawerContentOptions={{
//         activeTintColor: '#e91e63',
//         itemStyle: { marginVertical:5},
//       }}
//       drawerContent={(props) => <CustomSidebarMenu {...props} />}
//       >
//       <Drawer.Screen
//         name="FirstPage"
//         options={{ drawerLabel: 'First page Option' }}
//         component={firstScreenStack} />
//       <Drawer.Screen
//         name="SecondPage"
//         options={{ drawerLabel: 'Second page Option' }}
//         component={secondScreenStack} />
//     </Drawer.Navigator>
//   </NavigationContainer>
// -----------------------------------------------
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="splash">
    //     <Stack.Screen
    //       name="splash"
    //       component={splash}
    //       options={{
    //         title: 'First Page', //Set Header Title
    //         headerStyle: {
    //           backgroundColor: '#f4511e', //Set Header color
    //         },
    //         headerTintColor: '#fff', //Set Header text color
    //         headerTitleStyle: {
    //           fontWeight: 'bold', //Set Header text style
    //         },
    //       }}
    //     />
    //     <Stack.Screen
    //       name="login"
    //       component={login}
    //       options={{
    //         title: 'Second Page', //Set Header Title
    //         headerStyle: {
    //           backgroundColor: '#f4511e', //Set Header color
    //         },
    //         headerTintColor: '#fff', //Set Header text color
    //         headerTitleStyle: {
    //           fontWeight: 'bold', //Set Header text style
    //         },
    //       }}
    //     />
    //     <Stack.Screen
    //       name="register"
    //       component={register}
    //       options={{
    //         title: 'Third Page', //Set Header Title
    //         headerStyle: {
    //           backgroundColor: '#f4511e', //Set Header color
    //         },
    //         headerTintColor: '#fff', //Set Header text color
    //         headerTitleStyle: {
    //           fontWeight: 'bold', //Set Header text style
    //         },
    //       }}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
//   );
// }

export default App;