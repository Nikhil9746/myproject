import React,{Component} from "react";
import { 
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ImageBackground,
  Image
  


} from "react-native";

export default class Records extends Component{

  render(){
    return(
      <View style={styles.container}>
        <Text>Record</Text>
       
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
  
  }
})