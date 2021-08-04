import 'react-native-gesture-handler';
import * as React from "react";
import { View, Text,StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import {ThemeManager} from 'react-native-ui-lib'
import { createNativeStackNavigator } from 'react-native-screens/native-stack';


import LoginScreen from "./Screens/LoginScreen";
import Dashboard from './Screens/DashboardScreen';



enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        statusBarStyle:"auto",
        headerShown:false,
        contentStyle:{
          backgroundColor:"white"
        }
      }}>
        <Stack.Screen component={LoginScreen} name="LoginScreen" options={{
          screenOrientation:"portrait_up",
        }}/>
        <Stack.Screen component={Dashboard} name="Profile"/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
mainContainer:{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  paddingTop:StatusBar.currentHeight
}
})
