import {StyleSheet,Dimensions} from 'react-native'

const commonStyle = StyleSheet.create({
    loginBoxWidth:{
        width:Dimensions.get("window").width-100,
        marginTop:"20%"
    }
})

export default commonStyle;