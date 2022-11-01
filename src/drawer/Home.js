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

export default class Home extends Component{

  render(){
    return(
      <View style={styles.container}>
        <Text>Home</Text>
       
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