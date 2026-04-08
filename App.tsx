import React from "react";
import {
  Text,
  View,
} from "react-native";
import { SafeAreaView
 } from "react-native-safe-area-context";
 import { TouchableOpacity } from "react-native";


 function App() {
  return (
    <SafeAreaView>
      <View>
        <Text> Hello World !</Text>
         <Text> Hello World !</Text>
          <Text> Hello World !</Text>
        
        <TouchableOpacity style = {{backgroundColor : "red", height : 30, width : 100}}>
          <Text>Buttton to click </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
 }
 export default App;