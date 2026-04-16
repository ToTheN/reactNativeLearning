import React from "react";
import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
    ScrollView
} from "react-native"
import { SafeAreaView
 } from "react-native-safe-area-context";
 import FlatCard from "./src/components/FlatCard";
import ElevatedCard from "./src/components/ElevatedCard";
import FancyCard from "./src/components/FancyCards";
import ActionCard from "./src/components/ActionCard";

function AppPro(){
    return (
        <SafeAreaView>
            <ScrollView>
            
            <FlatCard></FlatCard>
            <ElevatedCard/>
            <FancyCard/>
            <ActionCard/>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default AppPro