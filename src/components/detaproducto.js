import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  Button,ImageBackground,
} from 'react-native';

const ProductoDetalle = (props ) => {

  const { datos,OnPressCompras } = props;

  return (

    
    
    
      
      datos ?
    <ScrollView>
      <ImageBackground style={styles.fondo2} source={require('./../image/fondo2.png')}> 
      <View style={styles.container}>
        <Image style={{ width: '75%', height: 320, resizeMode: 'cover',marginLeft:50,marginTop:5 }} source={{ uri: datos.imagenUrl }} />
      </View >
      <View style={{ width: '75%', height: 30, resizeMode: 'cover',marginRight:40,marginLeft:40}}>
        <Text style={{ fontWeight: 'bold',color:'black',fontSize: 16,marginRight:0,marginLeft:0 }}>Nombre: {datos.nombre}</Text>
      </View>
   
      <View style={{ width: '75%', height: 80, resizeMode: 'cover',marginRight:40,marginLeft:40 }}>
        <Text style={{color:'black',fontSize: 16,marginRight:0,marginLeft:0 ,}}>Descripcion: {datos.descripcion}</Text>
      </View>
   
      <View style={{ width: '75%', height: 40, resizeMode: 'cover',marginLeft:100}}>
      <Text style={{ fontWeight: 'bold',color:'black',fontSize: 16,marginRight:0,marginLeft:0 }}>Precio: C$ {datos.precio}</Text>
      </View>
   
      <View style = {{ marginTop: 8, flex:1, margin: 2, borderRadius: 50}}>
           <Button
           title={'Comprar'}
           color='#193555'
           onPress={OnPressCompras}
           />
      </View> 
    
  </ImageBackground>
    </ScrollView>
    
    :

    <View>
      <ActivityIndicator size="large" color="#0000ff" />
      
    </View>
   

  );
}

const styles = StyleSheet.create({
  fondo2: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
},
})
export default ProductoDetalle;