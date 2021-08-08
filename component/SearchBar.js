import React from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import SearchHeader from 'react-native-search-header';
import {FontAwesome,Feather} from '@expo/vector-icons'
 
const DEVICE_WIDTH = Dimensions.get(`window`).width;
 
const styles = StyleSheet.create({
    header: {
        display:"flex",
        flexDirection:"row",
        width: DEVICE_WIDTH,
        paddingHorizontal:20,
        paddingVertical:15
    },
    label: {
        fontSize:20,
        flexGrow:1,
        fontWeight:"bold",
        textAlignVertical:"center",
        color:"black",
        marginLeft:30
    }
});
 
export const SearchBar = ({navigation,search}) => {
    const searchHeaderRef = React.useRef(null);
    return (
        <View>
            <View style = { styles.header }>
                <Feather name="menu" size={25} color="black" style={{alignSelf:"auto"}} onPress={()=>navigation.toggleDrawer()} />
                <Text style = { styles.label }> Search </Text>
                <FontAwesome name="search" size={24} color="black" onPress={()=>searchHeaderRef.current.show()}/>
            </View>
            <SearchHeader
                ref = { searchHeaderRef }
                placeholder = 'Enter name...'
                placeholderColor = 'gray'
                onSearch={search}
                enableSuggestion={false}
            />
        </View>
    );
}
 