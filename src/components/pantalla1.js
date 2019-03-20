import React from 'react';
import{
    View,
    Text,
    ScrollView,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native'
import Slide from './Slider'
   
const Inicio =(props)=>{
    const { categorias, productos } = props 

    console.log("InicioComponente", productos)

 return( 
   
   <ScrollView >
        <View style={styles.listCategoria}>

            <Text style={styles.titleCategoria}>CATEGORIAS</Text>

            <FlatList
                data={
                    categorias
                }
                renderItem={
                    ({ item }) => (
                        <TouchableOpacity>
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
            style={styles.listaProductos}
            data={productos}
            renderItem={
                ({ item }) => (
                    <ItemProducto
                        item={item}
                    />
                )
            }
            horizontal={false}
        />
        </ScrollView>
    </ScrollView>
       
)};

    const ItemProducto = (props) => {

        const { item } = props

        return (
            <View key={item.key} style={styles.header}>
                <Image
                    source={{uri: item.imagenUrl}}
                    style={styles.headerImage}
                    width={150}
                    height={198}
                />
            
                <Text style={styles.nombre}>{item.nombre}</Text>
                <Text style={styles.descripcion}>{item.descripcion}</Text>
                <Text style={styles.precio}> C$ {item.precio}  ¡Comprar Ahora!</Text>
             
             </View>
        )

    }

    const styles = StyleSheet.create({
        listaProductos: {
            flex: 1,
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
        marginRight: 0,
        marginTop:-200,
        fontSize: 20,
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
    
      
});
export default Inicio;