import React from 'react';
import{
    View,
    Text,
    TextInput,
    Button,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const LoginApp = (props) => {

    const {
        miOnChangeDeUSuario,
        miOnChangeDePassword,
        miOnPressDeIniciarSesion,
        nombreUsuario,
        contrasenaUsuario,
    } = props;

    return (
        <View>

          <ImageBackground style={styles.fondo2} source={require('./../image/fondo.jpg')}> 

         <Image style={styles.img} source={require('../image/logoDN.png')}/>
        
            <View style = {styles.text}>
                <TextInput
                    onChangeText={miOnChangeDeUSuario}
                    value={nombreUsuario}
                    placeholder="Correo"
                />
            </View>

            <View style = {styles.text}>
                <TextInput
                    onChangeText={miOnChangeDePassword}
                    value={contrasenaUsuario}
                    placeholder="Contraseña"
                />
            </View>
            <View style={styles.recuperacion}>
                <TouchableOpacity>
                    <Text>¿Se te olvido la contraseña?</Text> 
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <View style = {styles.margin}>
                    <Button
                        title={'Entrar'}
                        color='blue'
                        onPress={miOnPressDeIniciarSesion}
                    />
                </View>
                <View style = {styles.margin}>
                    <Button
                        title={'Registrarse'}
                        color='blue'
                        onPress={miOnPressDeIniciarSesion}
                    />
                </View>
            </View>
    
    </ImageBackground>
</View>

)};

const styles = StyleSheet.create({
    recuperacion:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        fontSize: 20
    },

    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    img:{
        marginTop: 0,
        marginLeft: 10,
        marginRight: 0,
        borderRadius: 15
    },
    margin:{
        marginTop: 8,
        flex: 1,
        margin: 2,
        borderRadius: 100
    },
    text:{
        marginTop: 15,
        backgroundColor: 'transparent',
        marginLeft: 10,
        marginRight: 10,
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 50,
        fontSize: 30,
        height: 40
    },
    text1:{
        fontSize: 20,
        marginLeft: 75,
        marginRight: 75,
        color: 'black',
        marginTop: 0,
    },
    text2:{
        fontSize: 20,
        marginLeft: 60,
        marginRight: 60,
        color: 'black',
        marginTop: 15,
    },
    fondo2: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

})

export default LoginApp;