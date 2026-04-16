import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking,
    Image
} from "react-native"

import { SafeAreaView
 } from "react-native-safe-area-context";

 function ActionCard(){
    function openWebsite(websiteLink : string){
        Linking.openURL(websiteLink)
    }
    return (
        <SafeAreaView>
            <Text style = {style.headingText}> BlockCard</Text>
            <View style = {[style.card, style.elevated]}>
                <View style = {style.headingContainer}>
                    <Text style = {style.headerText}>
                        Whats new now in 2026 as compare to 2012
                    </Text>
                </View>
                <Image
                source = {{
                uri : 'https://www.riotgames.com/darkroom/1440/fc8fa58e6fa9f6a700e559b2fa77a6b5:ec35063e6ce89a1e7619585db51c5845/paris-adobestock-327345878.png'
                }}
                style= {style.cardImage}
                />
                <View style = {style.bodyContainer}> 
                    <Text>
                        To make cards uniform in size on mobile devices, 
                        the best approach is to use CSS Flexbox or CSS Grid to handle 
                        layout and sizing automatically. Ensuring all cards have the same height, 
                        regardless of their content length, requires setting a minimum height or using 
                        flex-based height properties. 
                    </Text>
                </View>
                <View style = {style.footerContainer}> 
                    <TouchableOpacity
                    onPress={() => openWebsite('https://www.riotgames.com/en/work-with-us/offices/paris')}
                    >
                        <Text style = {style.socialLink}>Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => openWebsite('https://www.riotgames.com/en/work-with-us/offices/paris')}
                    >
                        <Text style = {style.socialLink}>Fllow more</Text>
                    </TouchableOpacity>
                </View>
            
            </View>
    </SafeAreaView>
    )
 }

 const style = StyleSheet.create({
    headingText :{
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8
    },
    card:{
        height : 'auto',
        width : 'auto',
        borderRadius : 6,
        marginVertical : 12,
        marginHorizontal : 8
    },
    elevated :{
        backgroundColor : "#d89339",
        elevation : 3,
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor : "#333",
        shadowOpacity : 0.4
    },
    headerText:{
        color : "#0000",
        fontSize : 16,
        fontWeight : "bold"

    },
    headingContainer:{
        height : 40,
        flexDirection : "row",
        justifyContent : "center",
        alignItems : "center"
    },
    cardImage:{
        height : 300
    },
    bodyContainer:{
        padding : 10
    },
    footerContainer:{
        padding: 8,
        color : "#0141cc",
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-evenly"
    },
    socialLink :{
        fontSize : 16,
        color : "#000000",
        backgroundColor : "#FFF",
        paddingHorizontal : 20,
        paddingVertical : 6
    }

 })


 export default ActionCard