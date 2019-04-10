import React, { Component} from 'react'

import Pantalla1 from './../components/pantalla1'

import firebase from 'react-native-firebase'

class InicioContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categorias: [
                {
                    key: '',
                    categoria: 'Todos',
                }
            ],
            productos: [],
            searchText: '',
            categoria: {},
        }
    }

    handlePressItemProducto = (productoId) => {
        this.props.navigation.navigate("compra", { productoId: productoId });
    }

    handlePressItemDetalleProducto =(productoId)=>{
        this.props.navigation.navigate("detaproducto", { productoId: productoId });
    }

    handlePressItemCompras =(productoId)=>{
        this.props.navigation.navigate("Compras", { productoId: productoId });
    }

    handleChangeSearch = (searchText) => {
        this.setState({
            searchText: searchText,
        })
    };

    handlePressCategoria = (categoria) => {
        this.setState({
            categoria: categoria,
        });
    };

    render() {

        const {
            categorias,
            productos,
            searchText,
            categoria,
        } = this.state

        return (

            <Pantalla1
                searchText={searchText}
                onChangeSearch={this.handleChangeSearch}
                categorias={categorias}
                onPressCategoria={this.handlePressCategoria}
                productos={this.filtrarDatos(searchText, productos, categoria ? categoria.key : '')}
                onPressItemProducto={this.handlePressItemProducto}
                onPressItemDetalleProducto={this.handlePressItemDetalleProducto}
                onPressIteCompras={this.handlePressItemCompras}
            />

        )

    }

    filtrarDatos = (searchText, productos, categoria) => {

        console.log("Categoria de Jesner: ", categoria)

        //filtro por categoria
        if(categoria !== '') {
            productos = productos.filter(item => {
                return item.categoria === categoria;
            });
        }


        //filtro por 
        if(productos.length > 0) {
            return productos.filter(item => {
                return item.nombre ? item.nombre.indexOf(searchText) > -1 : false;
            })
        }
        else {
            return []
        }
    }

    componentDidMount() {

        this.getProducts()

        this.getCategories()

    }

    getCategories = () => {

        const ref = firebase.firestore().collection('categorias')

        ref.onSnapshot((snapshot) => {
            const { categorias } = this.state
            snapshot.docChanges.forEach((change) => {
                if(change.type === 'added') {
                    categorias.push({
                        key: change.doc.id,
                        categoria: change.doc.data().categoria,
                    })
                }
            })
            this.setState({
                categorias: categorias,
            })
        })

    }

    getProducts = () => {

        const ref = firebase.firestore().collection('productos')
    
        ref.onSnapshot((snapshot) => {

            const { productos } = this.state;

            snapshot.docChanges.forEach((change) => {
                
                if(change.type === 'added') {
                    productos.push({
                        key: change.doc.id,
                        imagenUrl: change.doc.data().imagenUrl,
                        nombre: change.doc.data().nombre,
                        descripcion: change.doc.data().descripcion,
                        precio: change.doc.data().precio,
                        categoria: change.doc.data().categoria,
                    })
                }
            })

            this.setState({
                productos: productos,
            });

        });

    }

    getdetaproducto = () => {

        const ref = firebase.firestore().collection('detaproducto')
    
        ref.onSnapshot((snapshot) => {

            const { detaproducto } = this.state
            snapshot.docChanges.forEach((change) => {
                if(change.type === 'added') {
                    detaproducto.push({
                     
                    })
                }
            })
            this.setState({
                detaproducto: detaproducto,
            })
        })

    }
}

export default InicioContainer