import React ,{useState }from 'react'
import { StyleSheet } from 'react-native'
import {Text,View,TextField,Button} from 'react-native-ui-lib'
import commonStyle from '../shared/styles'

export default function LoginScreen({navigation}){
    var [email,setEmail] = useState("")
    var [password,setPass] = useState("")
    const login =()=> navigation.replace("Profile")
    return(
        <View style={styles.loginView}>
            <Text style={styles.appName}>CRMS</Text>
            <View style={commonStyle.loginBoxWidth}>
            <TextField 
            placeholder="Email/Username" 
            style={styles.input} 
            floatingPlaceholder={true} 
            onChangeText={(val)=>setEmail(val)}
            />

            <TextField 
            placeholder="Password" 
            style={styles.input} 
            floatingPlaceholder={true}
            onChangeText={(val)=>setPass(val)}
            secureTextEntry={true}
            />
            <Button label="Sign In" onPress={login} />
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginView:{
        flex:1,
        justifyContent:"center",
         alignItems:"center",

    },
    appName:{
        fontSize:40,
        letterSpacing:12,
        fontWeight:"bold"
    },
    input:{
    }
})