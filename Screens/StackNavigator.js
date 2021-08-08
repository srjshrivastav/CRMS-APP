import 'react-native-gesture-handler';
import * as React from "react";
import { connect } from "react-redux";
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';


import LoginScreen from "./LoginScreen";
import AuthenticatedDrawer from './Authenticated_Srcreens/AuthenticatedDrawer'
import { ConfigureStore } from '../redux/configureStore';



enableScreens();
const Stack = createNativeStackNavigator();

export function StackNavigator({isAuthenticated}) {

  const { persistor, store } = ConfigureStore(); 

  return (
      <Stack.Navigator screenOptions={{
        statusBarStyle:"auto",
        contentStyle:{
          backgroundColor:"white"
        },
        headerShown:false,
      }}>
        {console.log("IS Authenticated",isAuthenticated)}
          {
              isAuthenticated?<Stack.Screen component={AuthenticatedDrawer} name="Profile"/>: 
              <Stack.Screen component={LoginScreen} name="LoginScreen" options={{
                screenOrientation:"portrait_up",
              }}/>
          }
       
       
      </Stack.Navigator>
  );
}


function mapStateToProps({user}){
    return {
        isAuthenticated:user == null ?false:true
    }
}

export default connect(mapStateToProps)(StackNavigator);