import React from 'react'
import {SearchBar} from '../../component/SearchBar'
import { View,Avatar,Text} from 'react-native-ui-lib'
import { BaseUrl } from '../../shared/constants'
import { FlatList, StyleSheet } from 'react-native'


export default class Seach extends React.Component{
    state={
        Criminals:[],
        loading:false
    }

    componentDidMount(){
        this.props.navigation.setParams({
            headerShown:false
        })
    }

    renderItem({index,item}){
        return (
        <View style={styles.card} key={index}>
            <Avatar source={{uri:item.photo}} size={50} containerStyle={{
                marginRight:19
            }} />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{item.first_name }{item.middle_name }{item.last_name}</Text>
                <Text style={styles.cardSubTitle}>Status : {item.status}</Text>
            </View>
        </View>
        )
    }

    async search(text){
        if(text==""){
            this.setState({
                Criminals:[]
            });
            return
        }
        this.setState(()=>({
            loading:true
        }))
        fetch(BaseUrl+"/search?name="+text,{
            method:"GET"
        })
        .then((res)=>{
            const json = res.json()
            json.then((criminals)=>{
                this.setState(()=>({
                    Criminals:[
                        ...criminals
                    ],
                    loading:false
                }))
            })
        });
    }

    render(){
        return(
                <View style={{flex:1}}>
                    <SearchBar navigation={this.props.navigation} search={({nativeEvent})=>this.search(nativeEvent.text)} />
                    <FlatList 
                    data={this.state.Criminals}
                    renderItem={this.renderItem}
                    keyExtractor={(item,index)=>index.toString()}
                    />
                </View>
        )
    }
}


const styles = StyleSheet.create({
    card:{
        marginHorizontal:10,
        marginVertical:5,
        zIndex:20,
        borderRadius:5,
        paddingVertical:5,
        paddingHorizontal:10,
        display:"flex",
        flexDirection:"row"
    },
    cardBody:{
        display:"flex",
        justifyContent:"center"
    },
    cardTitle:{
        fontSize:19,
        fontWeight:"bold"
    },
    cardSubTitle:{
        color:"grey",
        fontSize:10
    }
})