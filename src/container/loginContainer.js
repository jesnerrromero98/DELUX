import React, { Component } from 'react';
import {
    Alert,
} from 'react-native'
import LoginApp from '../components/loginApp';
import MenuDrawer from '../components/menuDrawer';

class LoginContainer extends Component {

    constructor(props) {
        
        super(props);

        this.state = {
            usuario: '',
            pass: '',
            logged: false,
            registrarse: false,
        };
        
    }

    miEventoDeUsuario = (text) => {
        this.setState({ usuario: text, });
    }

    miEventoDePass = (text) => {
        this.setState({ pass: text, });
    }

    miEventoDeBotonIniciarSession = () => {
        const { usuario, pass } = this.state;
        if(usuario === "" && pass === "") {
            this.props.navigation.navigate('MenuDrawer');
        }
        else {
            Alert.alert("INICIO ERRONERO", "Usuario o contraseña incorrecto");
        }
    }

    miEventoDeRegistrarse = () => {
        this.props.navigation.navigate('Registro');
    }

    isLogged = () => {

        const { logged } = this.state;

        return logged;

    };

    render() {

        const usuario = this.state.usuario;
        const pass = this.state.pass;

        if(!this.isLogged()) {
            return (
                <LoginApp
                    miOnChangeDeUSuario={ this.miEventoDeUsuario }
                    miOnChangeDePassword={ this.miEventoDePass }
                    miOnPressDeIniciarSesion={ this.miEventoDeBotonIniciarSession }
                    miOnPressDeRegistrarse={ this.miEventoDeRegistrarse }
                    nombreUsuario={ usuario }
                    contrasenaUsuario={ pass }
                />
            );
        } else {
            return (
                <MenuDrawer/>
            );
        }
    }

}

export default LoginContainer;