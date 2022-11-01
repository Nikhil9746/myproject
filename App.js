import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createDrawerNavigator } from "@react-navigation/drawer";


import Register from "./src/Register";
import Login from "./src/Login";
import Home from "./src/drawer/Home";
import Profile from "./src/drawer/Profile";
import Wallet from "./src/drawer/Wallet Balance";
import Records from "./src/drawer/Records";
import Refund from "./src/drawer/Refund and policies";
import Settings from "./src/drawer/Settings";
import About from "./src/drawer/About Us";
import DrawerContent from "./src/DrawerContent";
import Help from "./src/drawer/Help";

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
      name="Login"
      component={Login}
      options={{headerShown:false}}/>
      <Stack.Screen
      name="Register"
      component={Register}
      options={{headerShown:false}}/>
      <Stack.Screen
      name="Drawer"
      component={MyDrawer}
      options={{headerShown:false}}/>

    </Stack.Navigator>
  )
}

function MyDrawer(){
  return(
    <Drawer.Navigator
    drawerContent={(props) => <DrawerContent{...props}/>}>
      <Drawer.Screen
      name="Home"
      component={Home}/>
       <Drawer.Screen
      name="Profile"
      component={Profile}/>
       <Drawer.Screen
      name="Wallet"
      component={Wallet}/>
       <Drawer.Screen
      name="Records"
      component={Records}/>
       <Drawer.Screen
      name="Refund"
      component={Refund}/>
       <Drawer.Screen
      name="Settings"
      component={Settings}/>
       <Drawer.Screen
      name="About Us"
      component={About}/>
       <Drawer.Screen
      name="Help"
      component={Help}/>
    </Drawer.Navigator>
  )
}

export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}