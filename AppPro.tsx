import React, { JSX } from "react";
import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from "react-native"
import { SafeAreaView
 } from "react-native-safe-area-context";


function AppPro(): JSX.Element{
    const isDarkMode  = useColorScheme() === "light"
    return(
        <SafeAreaView style = {style.container}>
            
                <Text style = {isDarkMode ? style.whiteText : style.darkText}>Hello world</Text>
        
      </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container:{
        flex :1,
        alignItems : "center",
        justifyContent : "center",
        margin : 30
    },
    whiteText:{
        color : "#a72121"

    },
    darkText :{
        color : "#000000"
    }
})

export default AppPro