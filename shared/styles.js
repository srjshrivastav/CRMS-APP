import {StyleSheet,Dimensions} from 'react-native'

const commonStyle = StyleSheet.create({
    loginBoxWidth:{
        width:Dimensions.get("window").width-100,
        marginTop:"20%"
    },
    personDetailContainerRow:{
        paddingHorizontal:20,
        paddingVertical:5,
        flexDirection:"row",
        borderTopColor:"lightgrey",
        borderBottomColor:"lightgrey"
    },
    HeaderText:{
        fontSize:24,
        letterSpacing:5,
        fontWeight:"bold"
    },
    BottomLine:{
        borderBottomWidth:1,
        marginHorizontal:10,
    }
})

export default commonStyle;