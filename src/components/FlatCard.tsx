import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native"


function FlatCard(){
    return(
        <View>
            <Text style = {style.headingText}>Flatcard</Text>
            <View style = {style.container}>
                <View style = {[style.card, style.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style = {[style.card, style.cardTwo]}>
                    <Text style = {{color : "#FFFFFF"}}>Black</Text>
                </View>
                <View style = {[style.card, style.cardThree]}>
                    <Text>Green</Text>
                </View>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex : 1,
        flexDirection : "row",
        padding : 8
    },
    card:{
        flex : 1,
        justifyContent : "center",
        alignItems : "center",
        height : 100,
        width : 100,
        borderRadius : 4,
        margin : 8
    },
    cardOne:{
        backgroundColor : "#ff3535",
    },
     cardTwo:{
        backgroundColor : "#000000",
    },
     cardThree:{
        backgroundColor : "#358532",
    },
    headingText:{
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8 

    }

})

export default FlatCard