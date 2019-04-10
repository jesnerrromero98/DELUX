import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    ImageBackground,
    Button,
} from 'react-native';
import Slide from './Slider';
import X from './shearch';

const Inicio = (props) => {

    const { categorias,
        productos,
        onPressItemDetalleProducto,
        onChangeSearch,
        searchText,
        onPressCategoria,
    } = props

    console.log("Productos de Jesner", productos);
    
    return (
        <View>
                   <X> </X>
            <ImageBackground style={styles.fondo2} source={require('./../image/fondo2.png')}> 
                <ScrollView>
                    
                    <X
                        onChangeSearch={onChangeSearch}
                        searchText={searchText}
                    />
                        
                    <View style={styles.listCategoria}>

                        <Text style={styles.titleCategoria}>CATEGORIAS</Text>

                        <FlatList
                            data={
                                categorias
                            }
                            renderItem={
                                ({ item }) => (
                                    <TouchableOpacity onPress={
                                        () => {
                                            onPressCategoria(item);
                                        }
                                    }>
                                        <View style={styles.itemDeCategoria}><Text style={styles.categoria}>{item.categoria}</Text></View>
                                    </TouchableOpacity>
                                )
                            }
                            horizontal={true}
                            ItemSeparatorComponent={
                                () => (
                                    <View style={styles.separator} />
                                )
                            }
                        />
                    
                    </View>
                    <View style={[styles.promo]}> 
                        <Slide> </Slide>
                    </View>
                    
                    <ScrollView>
                    <FlatList
                        ListHeaderComponent={
                            () => {
                                return(
                                    <View>
                                        <Text style={styles.titleCategoria}>LO MAS NUEVO</Text>
                                    </View>
                                )
                            }
                        }
                        style={styles.listaProductos}
                        data={productos}
                        renderItem={
                            ({ item }) => (
                                <ItemProducto
                                    item={item}
                                    onPressItemDetalleProducto={onPressItemDetalleProducto}
                                />
                            )
                        }
                        horizontal={false}
                    />
                    </ScrollView>
                    

                </ScrollView>
            </ImageBackground>
        </View>
    )
};

    const ItemProducto = (props) => {
        
        const { item, onPressItemDetalleProducto } = props;

        return (
            <TouchableOpacity
                onPress={() => { onPressItemDetalleProducto(item.key) }}
            >
                <View key={item.key} style={styles.header} >
                    <Image
                        source={{uri: item.imagenUrl}}
                        style={styles.headerImage}
                        width={150}
                        height={198}
                    />
                
                    <Text style={styles.nombre}>{item.nombre}</Text>
                    <Text style={styles.descripcion}>{item.descripcion}</Text>
                    <Text style={styles.precio}> C$ {item.precio} </Text> 
                </View>
                <View style={styles.compra}>
                    <Text>
                        ¡Comprar Ahora!
                    </Text>
                </View>
            </TouchableOpacity>
        )

    }
  

    const styles = StyleSheet.create({
        compra: {
            flex: 1,
            width: '100%',
            alignItems: 'flex-end',
        },
        listaProductos: {
            width: '100%',
            height: '100%',
        },
    
    header: {
        backgroundColor:'white' ,
        marginTop: 5,
        marginLeft: 0,
        width: 370,
        height: 200,
        
    },
    headerImage: {
        backgroundColor: 'white',
        width: 150,
        height: 198,
        resizeMode: 'cover',
        marginTop:0
    },
    nombre:{
        color:'black',
        marginLeft:150,
        marginRight: 20,
        marginTop:-200,
        fontSize: 18,
        fontFamily: 'Fontastique',
        fontWeight: 'bold',
        fontStyle: 'italic'
        
    },
    descripcion:{
        color:'black',
        marginLeft:150,
        marginRight:0,
        fontSize: 16,
        marginTop:5,
    },
    precio:{
        color:'black',
        marginLeft: 150,
        marginRight: 0,
        margin :100,
        fontSize: 15,
        fontWeight: 'bold',
        marginTop:5,
        
    },
    text3:{
        color:'black',
        backgroundColor: '#0000CC',
        marginLeft: 0,
        marginRight: 0,
        fontSize: 20,
        marginTop:10,
    },

    titleCategoria: {
        marginBottom: 4,
        marginLeft: 4,
        fontSize: 10,
        fontWeight: '500',
        color: '#263238'
    },

    listCategoria: {
        margin: 8,
        flex: 1,
    },

    itemDeCategoria: {
        padding: 8,
        borderRadius: 50,
        backgroundColor: '#193555',
    },
    separator: {
        width: 4,
    },
    categoria: {
        color: 'white',
    },
    fondo: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    promo:{
        marginTop :5,
        backgroundColor:'#E5E8E8' , 
        flex: 1,
    },
    busca:{
        color:'blue',
        borderColor: 'red',
    },
    
    Botones:{
        width: 100
    },
    fondo2: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
   
      
});
export default Inicio;