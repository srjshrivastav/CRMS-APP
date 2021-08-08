import 'react-native-gesture-handler';
import * as React from "react";
import { Provider } from "react-redux";
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ConfigureStore } from './redux/configureStore';
import StackNavigator from './Screens/StackNavigator'
import { PersistGate } from 'redux-persist/integration/react';



enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {

  const {store,persistor} = ConfigureStore()
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <SafeAreaProvider>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
    </SafeAreaProvider>
    </PersistGate>
    </Provider>
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
