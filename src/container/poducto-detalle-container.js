import React, { Component } from 'react';
import ProductoDetalle from './../components/detaproducto';
import firebase from 'react-native-firebase';

class ProductoDetalleContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            datos: {},
        };
    }

    OnPressCompras=() => {
        this.props.navigation.navigate('compra');
    }

    render() {

        const { datos } = this.state;

        return (
            <ProductoDetalle
                OnPressCompras={this.OnPressCompras}
                datos={datos}
            />
        )
    }

    componentDidMount() {

        const productoId = this.props.navigation.getParam('productoId', '');

        this.getProductoDetalle(productoId);

    }

    getProductoDetalle = (productoId) => {

        const db = firebase.firestore();

        db
        .collection('productos')
        .doc(productoId)
        .onSnapshot((snapshot) => {
            
            let { datos } = this.state;

            datos = {
                nombre: snapshot.data().nombre,
                descripcion: snapshot.data().descripcion,
                imagenUrl: snapshot.data().imagenUrl,
                precio: snapshot.data().precio,
            };

            this.setState({
                datos: datos,
            });
            

        })

    }
    

}

export default ProductoDetalleContainer;