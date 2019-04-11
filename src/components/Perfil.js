import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require('../image/perfil.jpg')}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Brando Estrada</Text>
              <Text style={styles.info}>Juigalpa,Chontales</Text>
              <Text style={styles.description}>Del parque niñes feliz 4c al oeste y media al sur</Text>
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 1</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Opcion 2</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View></ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#193555",
    height:200,
  },
  avatar:{
    marginTop: 8,
    flex:1,
    margin: 2,
    borderRadius: 100
},
  
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
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


});