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
        miOnPressDeRegistrarse,
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
                <View style = {styles.Botones}>
                    <Button
                        title={'Entrar'}
                        color='#193555'
                        onPress={miOnPressDeIniciarSesion}

                    />
                </View>
                <View style = {styles.Botones}>
                    <Button
                        title={'Registrarse'}
                        color='#193555'
                        onPress={miOnPressDeRegistrarse}
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
        justifyContent:  'space-around',
    },

    img:{
        marginTop: 0,
        marginLeft: 10,
        marginRight: 0,
        borderRadius: 15
    },
   Botones:{
        marginTop: 8,
        flex:1,
        margin: 2,
        borderRadius: 100
    },
    
    text:{
        marginTop: 15,
        backgroundColor: 'transparent',
        marginLeft: 20,
        marginRight: 20,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 30,
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