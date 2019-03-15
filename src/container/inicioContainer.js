import React, { Component} from 'react'

import Pantalla1 from './../components/pantalla1'

import firebase from 'react-native-firebase'

class InicioContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categorias: [],
            productos: [],
        }
    }

    render() {

        const { categorias, productos, } = this.state

        console.log("render", productos)

        return (
            <Pantalla1
                categorias={categorias}
                productos={productos}
            />
        )

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

            const { productos } = this.state
            snapshot.docChanges.forEach((change) => {
                if(change.type === 'added') {
                    productos.push({
                        key: change.doc.id,
                        imagenUrl: change.doc.data().imagenUrl,
                        nombre: change.doc.data().nombre,
                        descripcion: change.doc.data().descripcion,
                        precio: change.doc.data().precio,
                    })
                }
            })
            this.setState({
                productos: productos,
            })
        })

    }

}

export default InicioContainer