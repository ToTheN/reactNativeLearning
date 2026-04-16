import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native"
import { Image } from "react-native";


function FancyCard(){
    return(
        <View>
            <Text style = {style.headingText}>Trending Places</Text>
            <View style = {[style.card,style.elevated]}>
                <Image 
                source={{
                    uri : 'https://www.riotgames.com/darkroom/1440/fc8fa58e6fa9f6a700e559b2fa77a6b5:ec35063e6ce89a1e7619585db51c5845/paris-adobestock-327345878.png'
                }}
                style = {style.cardImage}
                />
                <View style = {style.cardBody}>
                    <Text style = {style.cardTitle}>
                        Hawa mahal
                    </Text>
                     <Text style = {style.cardLabel}>
                        Hawa mahal
                    </Text>
                     <Text style = {style.cardDescription}>
                    kj kajsnsnkubanfkuernfcwervuyreicywercwergtrgtrtmnrnhgbfrba
                    </Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    headingText:{
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8 
    },
    card : {
        height: "auto",
        width : "auto",
        borderRadius : 6,
        marginHorizontal : 8,
        marginVertical : 15
    },
    elevated :{
        backgroundColor : "#000000",
        elevation : 3,
        shadowOffset : {
            width : 1,
            height : 1
        }
    },
    cardImage:{
        width : "auto",
        borderTopLeftRadius : 6,
        borderTopRightRadius : 6,
        height : 300,
        marginBottom : 18,
    },
    cardBody:{
        flex: 1,
        flexGrow : 1,
        paddingHorizontal : 12
    },
    cardTitle:{
        color : "#FFFFFF",
        fontSize: 22,
        fontWeight : "bold",
        marginBottom : 6
    },
    cardLabel:{
        color : "#FFFFFF",
        fontSize: 16,
        fontWeight : "bold",
        marginBottom : 6
    },
    cardDescription:{
        color : "#FFFFFF",
        fontSize: 12,
        fontWeight : "bold",
        marginBottom : 12
    }

})

export default FancyCard