import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button,TextInput,TouchableOpacity,
  Image,ScrollView,
  keyboard,
} from 'react-native';


export default class Compras extends Component {
  render() {
    return (
      
      <ScrollView>
        
	<View style={styles.container}>
      <Image style={{ width: '80%', height: 180, resizeMode: 'cover',marginLeft:45, marginTop:10 }} source={require('../image/card.png')}/>	
	
	  <TextInput
	  placeholder="Nombre del titular"
	  style={{width:315,margin:10, borderColor:"black", 
	  borderWidth:1,borderRadius: 30,}}	
    underlineColorAndroid="transparent"
    keyboardType={'numeric'}
	  />
	  
	  <TextInput
	  placeholder="Numero de tarjeta"
	  style={{width:150,margin:10, borderColor:"black", 
	  borderWidth:1,borderRadius: 30, marginTop: 8,marginRight: 190,marginVertical:-50,    }}	
    underlineColorAndroid="transparent"
    keyboardType={'numeric'}
	  />
    <TextInput
	  placeholder="CVC"
    style={{width:150,margin:0, borderColor:"black", 
	  borderWidth:1,borderRadius: 30,marginLeft: 180,}}	
    underlineColorAndroid="transparent"
    keyboardType={'numeric'}
	  />
	  
	  <TextInput
	   placeholder="Mes"
	  style={{width:150,margin:10, borderColor:"black", 
    borderWidth:1,borderRadius: 30,marginRight: 190, }}	
	  underlineColorAndroid="transparent"
	  keyboardType={'numeric'}
	  />
     <TextInput
    placeholder="Año"
    style={{width:150,margin:0, borderColor:"black", 
	  borderWidth:1,borderRadius: 30,marginLeft: 180,marginVertical:-60,  }}	
    underlineColorAndroid="transparent"
    keyboardType={'numeric'}
	  />

	  <TouchableOpacity
		onPress={this.userRegister}
		style={{width:200,padding:13, backgroundColor:'#193555',paddingTop:10,borderRadius: 30,margin:75,
		alignItems:'center'}}>
	  <Text style={{color:'white'}}>Pagar</Text>
	  </TouchableOpacity>
	  
	  
     </View>
     
  </ScrollView>
 
   );
  }
}

const styles = StyleSheet.create({

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

