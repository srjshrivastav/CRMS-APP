import React from 'react'
import {View,Text} from 'react-native-ui-lib'
import { connect } from 'react-redux'
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { BaseUrl } from '../../shared/constants';
import { Avatar } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';
import commonStyle from '../../shared/styles'


const Gender={"F":"Female","M":"Male"}

function BottomLine({color="black"}){
    return(
        <View style={[commonStyle.BottomLine,{borderBottomColor:color}]}>

        </View>
    )
}

function DetailViewHeader({title}){
    return(
        <View style={{
            paddingHorizontal:10,
            paddingVertical:5,
            marginTop:10
            }}>
            <Text style={commonStyle.HeaderText}>{title}</Text>
            <BottomLine color={"black"}/>
        </View>
    )
}

function UserDataRow({dataTitle,data}){
    return(
<View style={commonStyle.personDetailContainerRow}>
                <View style={{flex:1}}>
                    <Text style={{fontSize:19,
                        fontWeight:"bold"}}>
                            {dataTitle}
                        </Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{
                        fontSize:17
                    }}>{data}
                    </Text>
                </View>
            </View>
    )
}

function UserData({user}){
    return(
        <View style={styles.DetailContainer}>
            <DetailViewHeader title={"Personal Info"} />
            <UserDataRow dataTitle={"Name"} data={ user.first_name+" "+user.middle_name+" "+user.last_name} />
            <BottomLine  color={"lightgrey"}/>
            <UserDataRow dataTitle={"D.O.B"} data={user.date_of_birth} />
            <BottomLine  color={"lightgrey"}/>
            <UserDataRow dataTitle={"Gender"} data={Gender[user.gender]} />
            <BottomLine  color={"lightgrey"}/>
            <UserDataRow dataTitle={"Contact No."} data={user.contact_no} />
            <BottomLine  color={"lightgrey"}/>
            <UserDataRow dataTitle={"Address"} data={user.address} />
            <BottomLine  color={"lightgrey"}/>
            <UserDataRow dataTitle={"Joining Date"} data={user.joining_date} style={{}}/>
            <DetailViewHeader  title={"Professional Info"}/>
            <UserDataRow dataTitle={"Post"} data={user.post} />
            <BottomLine  color={"lightgrey"}/>
            <UserDataRow dataTitle={"Police Station"} data={user.police_station.station_name}/>
            <BottomLine  color={"lightgrey"}/>
            <UserDataRow dataTitle={"Statio  Address"} data={user.police_station.address}/>
        </View>
    )
}


function ProfilePic({src}){
    return(
        <View style={{flex:1,justifyContent:"center"}}>
        <Avatar 
        size={90}
        containerStyle={{
            alignSelf:"center",

        }}
        source={{uri:BaseUrl+src}}
        />
        </View>
    )
}

function HeaderTitle({name}){

    return(
      <Text style={{
        fontSize:20,
        fontWeight:"bold"
      }}>Jai Hind,{name}</Text>
    )
  }

function Dashboard({user,navigation}){

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle:()=><HeaderTitle name={user.first_name} />
        });
      }, [navigation, user.first_name]);

    return(
        <ParallaxScrollView
        backgroundColor="blue"
        parallaxHeaderHeight={200}
        renderForeground={() => (
         <ProfilePic src={user.photo} />
        )}>
        <UserData user={user} />
      </ParallaxScrollView>
    );
    
}

function mapStateToProps({user}){
    return{
        user
    }
}

export default connect(mapStateToProps)(Dashboard)


const styles = StyleSheet.create({
    DetailContainer:{
        flex:1,
        marginHorizontal:10
    }
})