import { View, Text, StyleSheet, Platform, Alert} from 'react-native'
import React, { useState } from 'react'
import { Button, ImageBackground, ScrollView } from 'react-native-web';

export default function MiGaleriaScreen() {
    const [screen, screenSet] = useState('menu');
    const [title, titleSet] = useState();
    const [detalles, detallesSet] = useState();
  

    const img1 = require('../assets/img/Abismo.jpg');
    const img2 = require('../assets/img/Dados.png');
    const img3 = require('../assets/img/hornet 3.jpg');
    const img4 = require('../assets/img/Hornet con capa blanca.jpg');
    const img5 = require('../assets/img/Hornet.jpg');
    const img6 = require('../assets/img/Hornet.png');


    const mostrarAlerta = () => {
        alert('Vas a ver descripcion de las imagenes');
    }
   

    return(
        <View style={styles.cuerpo}>
            <View style={styles.separacion}>
                <ImageBackground
                    title= 'Una imagen'
                    source={img1}
                    rezideMode= 'cover'
                    imageStyle={styles.image}
                    style={styles.splashImage}
                >
                 
                </ImageBackground>
             
            </View>

            <View style={styles.separacion}>
                <ImageBackground
                    source={img2}
                    rezideMode= 'cover'
                    imageStyle={styles.splashImage}
                    style={styles}
                >
                    <Button title='Ver detalles' onPress={mostrarAlerta}/>
                </ImageBackground>

                <View style={styles.descripcion}>
                    <Text>Descripcion descriptible</Text>
                </View>

            </View>

            <View style={styles.separacion}>
                <ImageBackground
                    source={img2}
                    rezideMode= 'cover'
                    imageStyle={styles.splashImage}
                    style={styles}
                >
                    <Button title='Ver detalles' onPress={mostrarAlerta}/>
                </ImageBackground>

                <View style={styles.descripcion}>
                    <Text>Descripcion descriptible</Text>
                </View>

            </View>

            <View style={styles.separacion}>
                <ImageBackground
                    source={img2}
                    rezideMode= 'cover'
                    imageStyle={styles.splashImage}
                    style={styles}
                >
                    <Button title='Ver detalles' onPress={mostrarAlerta}/>
                </ImageBackground>

                <View style={styles.descripcion}>
                    <Text>Descripcion descriptible</Text>
                </View>

            </View>

            <View style={styles.separacion}>
                <ImageBackground
                    source={img2}
                    rezideMode= 'cover'
                    imageStyle={styles.splashImage}
                    style={styles}
                >
                    <Button title='Ver detalles' onPress={mostrarAlerta}/>
                </ImageBackground>

                <View style={styles.descripcion}>
                    <Text>Descripcion descriptible</Text>
                </View>

            </View>

            <View style={styles.separacion}>
                <ImageBackground
                    source={img2}
                    rezideMode= 'cover'
                    imageStyle={styles.splashImage}
                    style={styles}
                >
                    <Button title='Ver detalles' onPress={mostrarAlerta}/>
                </ImageBackground>

                <View style={styles.descripcion}>
                    <Text>Descripcion descriptible</Text>
                </View>

            </View>

            <View style={styles.separacion}>
                <ImageBackground
                    source={img2}
                    rezideMode= 'cover'
                    imageStyle={styles.splashImage}
                    style={styles}
                >
                    <Button title='Ver detalles' onPress={mostrarAlerta}/>
                </ImageBackground>

                <View style={styles.descripcion}>
                    <Text>Descripcion descriptible</Text>
                </View>

            </View>

          

            

          
        </View>
    )
 
}

const styles = StyleSheet.create({
    cuerpo:{
       
        
    },

    descripcion:{
        padding: 20

    },

    descripcion_texto:{
        color: 'white',
        fontWeight: 'bold',

    },

    splashImage:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
 
        
        
        
    },

    image:{
        flex: 1,

    },

    separacion:{
        marginBottom: 20,

    },

    botones:{

    },


});

