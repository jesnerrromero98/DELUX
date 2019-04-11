import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button,TextInput,TouchableOpacity,
  Image,ScrollView,ImageBackground
} from 'react-native';


export default class register extends Component {
  render() {
    return (
      <ImageBackground style={styles.fondo2} source={require('./../image/fondo.jpg')}>
      <ScrollView>
        
	<View style={styles.container}>
      <Image style={styles.img} source={require('../image/logoDN.png')}/>	
	
	  <TextInput
	  placeholder="Nombre Completo"
	  style={{width:250,margin:10, borderColor:"white", 
	  borderWidth:1,borderRadius: 30,}}	
	  underlineColorAndroid="transparent"
	  />
	  
	  <TextInput
	  placeholder="Correo"
	  style={{width:250,margin:10, borderColor:"white", 
	  borderWidth:1,borderRadius: 30,}}	
	  underlineColorAndroid="transparent"
	  />
	  
	  <TextInput
	   placeholder="Contraseña"
	  style={{width:250,margin:10, borderColor:"white", 
	  borderWidth:1,borderRadius: 30,}}	
	  underlineColorAndroid="transparent"
	  
	  />
      <TextInput
	  placeholder="Edad"
	  style={{width:250,margin:10, borderColor:"white", 
	  borderWidth:1,borderRadius: 30,}}	
	  underlineColorAndroid="transparent"
	  />
	   <TextInput
	  placeholder="Ciudad"
	  style={{width:250,margin:10, borderColor:"white", 
	  borderWidth:1,borderRadius: 30}}	
	  underlineColorAndroid="transparent"
	  />
     <TextInput
	  placeholder="Telefono"
	  style={{width:250,margin:10, borderColor:"white", 
	  borderWidth:1,borderRadius: 30}}	
	  underlineColorAndroid="transparent"
	  />
	  
	  <TouchableOpacity
		onPress={this.userRegister}
		style={{width:250,padding:10, backgroundColor:'#193555',paddingTop:5,
		alignItems:'center'}}>
	  <Text style={{color:'white'}}>Signup</Text>
	  </TouchableOpacity>
	  
	  
     </View>
     
  </ScrollView>
  </ImageBackground>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  fondo2: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
},

  
});

AppRegistry.registerComponent('register', () => register);