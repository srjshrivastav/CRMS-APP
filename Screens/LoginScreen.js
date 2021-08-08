import React ,{useState }from 'react'
import { StyleSheet } from 'react-native'
import {Text,View,TextField,Button} from 'react-native-ui-lib'
import commonStyle from '../shared/styles'
import {authenticate} from '../Helper/api_call'
import {connect} from 'react-redux'
import { userLogin } from '../redux/ActionCreator'

function LoginScreen({navigation,dispatch}){
    var [email,setEmail] = useState("")
    var [password,setPass] = useState("")
    const login =()=> {
        authenticate(email,password)
        .then((res)=>{
            var json = res.json()
            json.then((user)=>{
                dispatch(userLogin(user))
                navigation.replace("Profile",{user})
            })
        })
        .catch((reason)=>console.log(reason))
        
    }
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


export default connect()(LoginScreen);

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