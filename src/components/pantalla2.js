import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button,TextInput,TouchableOpacity
} from 'react-native';


export default class register extends Component {
  render() {
    return (
	<View style={styles.container}>
      	
	
	  <TextInput
	  placeholder="Enter Name"
	  style={{width:250,margin:10, borderColor:"#333", 
	  borderWidth:1}}	
	  underlineColorAndroid="transparent"
  onChangeText= {userName => this.setState({userName})}
	  
	  />
	  
	  <TextInput
	  placeholder="Enter Email"
	  style={{width:250,margin:10, borderColor:"#333", 
	  borderWidth:1}}	
	  underlineColorAndroid="transparent"
	  onChangeText= {userEmail => this.setState({userEmail})}
	  />
	  
	  <TextInput
	  placeholder="Enter Password"
	  style={{width:250,margin:10, borderColor:"#333", 
	  borderWidth:1}}	
	  underlineColorAndroid="transparent"
	  onChangeText= {userPassword => this.setState({userPassword})}
	  />
	  
	  <TouchableOpacity
		onPress={this.userRegister}
		style={{width:250,padding:10, backgroundColor:'magenta',
		alignItems:'center'}}>
	  <Text style={{color:'#193555'}}>Signup</Text>
	  </TouchableOpacity>
	  
	  
     </View>
  
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

AppRegistry.registerComponent('register', () => register);