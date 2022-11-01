import React,{Component} from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  ViewComponent
  
}from "react-native"


export default class DrawerContent extends Component{
    render(){
        return(
           
            <View style={styles.container}>
                <View style={{width:'100%',height:170,backgroundColor:'black'}}>
                    <View style={{flexDirection:'row',width:'100%',height:120,backgroundColor:'black'}}><Image source = {require('./assets/crown.png')} style={{width:'20%',height:'20%',marginLeft:10,marginTop:10}}/>
                    <View style={{marginLeft:120}}><Text style={{color:'white',fontSize:14,fontWeight:'bold'}}>  Favaz</Text><TouchableHighlight style={{width:60,height:20,backgroundColor:'grey',alignItems:'center',justifyContent:'center',borderRadius:10}}><Text>Gold</Text></TouchableHighlight></View></View>
                    <View style={{flexDirection:'row'}}>
                    <TouchableHighlight style={{width:70,height:20,backgroundColor:'white',borderWidth:1,borderRadius:10,alignItems:'center',justifyContent:'center',marginTop:10}}><Text>Invite</Text></TouchableHighlight>
                    <View style={{marginLeft:120}}><Text style={{color:'white'}}>Total Coin</Text><Text style={{color:'white'}}>coin :20000</Text></View>
                    </View>
                </View>
                <View>
                <Text
                onPress={()=> this.props.navigation.navigate('Home')} style={styles.textstyle}> Home</Text>
                <Text style={{marginLeft:30}}>__________________________________</Text>
                <Text
                onPress={()=> this.props.navigation.navigate('Profile')} style={styles.textstyle}> Profile</Text>
                <Text style={{marginLeft:30}}>__________________________________</Text>
                <Text
                onPress={()=> this.props.navigation.navigate('Wallet')} style={styles.textstyle}> Wallet Balance</Text>
                <Text style={{marginLeft:30}}>__________________________________</Text>
                <Text
                onPress={()=> this.props.navigation.navigate('Records')} style={styles.textstyle}> Records</Text>
                <Text style={{marginLeft:30}}>__________________________________</Text>
                <Text
                onPress={()=> this.props.navigation.navigate('Refund')} style={styles.textstyle}> Refund and policies</Text>
                <Text style={{marginLeft:30}}>__________________________________</Text>
                <Text
                onPress={()=> this.props.navigation.navigate('Settings')} style={styles.textstyle}> Settings</Text>
                <Text style={{marginLeft:30}}>__________________________________</Text>
                <Text
                onPress={()=> this.props.navigation.navigate('About Us')} style={styles.textstyle}> About Us</Text>
                <Text style={{marginLeft:30}}>__________________________________</Text>
                <Text
                onPress={()=> this.props.navigation.navigate('Help')} style={styles.textstyle}> Help</Text>
                <Text style={{marginLeft:30}}>__________________________________</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"yellow"
    },

    textstyle:{
        color:'black',
        marginLeft:30,
        marginTop:10

    }


})