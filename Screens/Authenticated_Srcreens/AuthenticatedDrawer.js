import React from 'react'
import { createDrawerNavigator,DrawerContentScrollView,DrawerItem,DrawerItemList } from '@react-navigation/drawer';
import Dashboard from './DashboardScreen';
import {Text} from 'react-native'
import { connect } from 'react-redux';
import { userLogout } from '../../redux/ActionCreator';
import Seach from './Search';

const Drawer = createDrawerNavigator();



function ExtraOptions(props){
  return(
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
   <DrawerItem
    label="Logout"
    onPress={()=>{
      props.dispatch(userLogout())
    }}
  />

    </DrawerContentScrollView>
 
  )
}


function AuthenticatedDrawer({name,dispatch}) {
    return (
        <Drawer.Navigator
        drawerContent={(props)=><ExtraOptions {...props} dispatch={dispatch} />}
        screenOptions={{
             headerShown:true,     
        }}
        
        >
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          <Drawer.Screen name="Search" component={Seach} options={{
            headerShown:false
          }}/>
        </Drawer.Navigator>
    );
  }

function mapStateToProps({user}){
  return{
    name:user.first_name
  }
}


  export default connect(mapStateToProps)(AuthenticatedDrawer)