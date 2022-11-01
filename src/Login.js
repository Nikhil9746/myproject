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

export default class Login extends Component{
  render(){
    return(
      <View style={styles.container}>
        <ImageBackground source = {require('./assets/bg.jpg')} style={styles.imagebg}>
        <Image source = {require('./assets/icon.png')} style={styles.imageicon}/>
        
        <Text style={styles.textstyle}>welcome</Text>
        <TextInput style={styles.inputtext} 
        placeholder='User Name'></TextInput>
        <TextInput style={styles.inputtext} 
        placeholder='Password'></TextInput>
        <TouchableHighlight style={styles.buttonstyle}
        onPress={()=>this.props.navigation.navigate('Drawer')}><Text>login</Text></TouchableHighlight> 
        <View><Text>New user !</Text><TouchableHighlight
        onPress={()=> this.props.navigation.navigate('Register')}><Text style={{color:"green",fontWeight:'bold'}} >  Register</Text></TouchableHighlight></View>      
        
        </ImageBackground>
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
  
  },
  inputtext:{
    width:'80%',
    height:50,
    borderWidth:1,
    borderColor:'green',
    marginTop:5,
    borderRadius:10
  },
  buttonstyle:{
    backgroundColor:'green',
    width:'60%',
    height:50,
    borderRadius:10,
    borderWidth:1,
    marginTop:10,
    alignItems:'center',
    justifyContent:'center'
  },
  textstyle:{
    fontSize:16,
    fontWeight:'bold',
    color:'green'
  },

  imagebg:{
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },

  imageicon:{
    width:80,
    height:80
  }
})