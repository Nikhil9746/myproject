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

import PhoneInput from "react-native-phone-number-input";


class Updateregister extends Component{
    render(){
        return(
            <View><Text> Welcome  {this.props.name}</Text></View>
        )
    }
}

export default class Register extends Component {
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source = {require('./assets/bg.jpg')} style={styles.imagebg}>
                <Image source = {require('./assets/icon.png')} style={styles.imageicon}/>
                <Text style={{color:'green',fontWeight:'bold',fontSize:16}}>Register</Text>
                <TextInput style={styles.inputtext}
                placeholder='Name'/>
                <TextInput style={styles.inputtext}
                placeholder='Email'/>
                <View style={{flexDirection:'row'}}>
                    <TextInput style={{borderColor:'green',width:'20%',height:50,borderWidth:1,borderRadius:10}}placeholder="code"/>
                    <TextInput style={{borderColor:'green',width:'60%',height:50,borderWidth:1,borderRadius:10}}
                placeholder='Mobile Number'/></View>
                <TextInput style={styles.inputtext}
                placeholder='Password'/>
                <TouchableHighlight style={styles.buttonstyle}><Text>Register</Text></TouchableHighlight>
                <Updateregister name = 'Nikhil'/>
              
                 
                
                
                </ImageBackground>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    inputtext:{
        width:'80%',
        height:50,
        borderWidth:1,
        borderColor:'green',
        marginTop:10,
        borderRadius:10
    },
    buttonstyle:{
        width:'80%',
        height:50,
        backgroundColor:'green',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginTop:10
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
