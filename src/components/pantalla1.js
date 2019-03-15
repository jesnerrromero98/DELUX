import React from 'react';
import{
    View,
    Text,
    ScrollView,
    StyleSheet,
    FlatList,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'



const Inicio =(props)=>{

    const { categorias, productos } = props

    console.log("InicioComponente", productos)

 return( 
    <View >

        <ImageBackground style={styles.fondo} source={require('./../image/fondo.jpg')}>

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

        </ImageBackground>
        
    </View>
        
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
            
                <Text style={styles.texto}>{item.nombre}</Text>
                <Text style={styles.text1}>{item.descripcion}</Text>
                <Text style={styles.text2}> C$ {item.precio}</Text>
             
             </View>
        )

    }

    const styles = StyleSheet.create({
        listaProductos: {
            flex: 1,
            width: '100%',
            height: 500,
        },
    
    header: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 30,
        width: 340,
        height: 200,
    },
    headerImage: {
        backgroundColor: 'white',
        width: 150,
        height: 198,
        resizeMode: 'cover',
        marginTop:0
    },
    texto:{
        color:'black',
        marginLeft:190,
        marginRight: 0,
        marginTop:-200,
        fontSize: 25,
        fontFamily: 'Fontastique',
        fontWeight: 'bold',
        fontStyle: 'italic'
        
    },
    text1:{
        color:'black',
        marginLeft:160,
        marginRight:5,
        fontSize: 16,
        marginTop:10,
        
    },
    text2:{
        color:'black',
        marginLeft: 190,
        marginRight: 65,
        fontSize: 20,
        marginTop:30,
        borderWidth: 1,
        
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
    },

    itemDeCategoria: {
        padding: 8,
        borderRadius: 50,
        backgroundColor: 'red',
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
});
export default Inicio;