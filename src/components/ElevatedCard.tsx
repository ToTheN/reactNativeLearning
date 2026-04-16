import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native"


function ElevatedCard(){
    return(
        <View>
            <Text style = {style.headingText}>Elevated Cards</Text>
            <ScrollView horizontal = {true} style = {style.container}>
                <View style = {[style.card, style.elevatedCard]}>
                    <Text>Tap</Text>
                </View>
                <View style = {[style.card, style.elevatedCard]}>
                    <Text>Me</Text>
                </View>
                <View style = {[style.card, style.elevatedCard]}>
                    <Text>To</Text>
                </View>
                <View style = {[style.card, style.elevatedCard]}>
                    <Text>Scroll</Text>
                </View>
                <View style = {[style.card, style.elevatedCard]}>
                    <Text>more...</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
     headingText:{
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8 

    },
    card :{
        flex : 1,
        alignItems : "center",
        justifyContent : "center",
        width : 100,
        height : 100,
        borderRadius : 4,
        margin : 8

    },
    elevatedCard :{
        backgroundColor : "#2e7fc6",
        elevation : 4,
        shadowOffset : {
            width : 1,
            height : 1
        },
    },
    container:{
        padding : 8,

    },

})

export default ElevatedCard