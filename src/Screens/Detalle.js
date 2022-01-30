import { Button, Image, SafeAreaView, Text, View } from "react-native";

import React from "react";
import { styles } from '../Styles/styles_Detalle'

const ImgDetalle = require('../../assets/images/evaluacion.png');

const Detalle = ({ navigation, route }) => {

    const { objetoElegido } = route.params;

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.containerElementos}>

                <View style={styles.imagen}>
                    <Image source={ImgDetalle} />
                </View>

                <View style={styles.containerTexto}>
                    <Text style={styles.texto}>{objetoElegido.nombre}</Text>
                    <Text style={styles.texto}>Descripción: {objetoElegido.descripcion}</Text>
                    <Text style={styles.texto}>Peso: {objetoElegido.peso}</Text>
                    <Text style={styles.texto}>$ {objetoElegido.precio}</Text>
                </View>

                <Button title='Volver a Home' onPress={() => navigation.popToTop()} style={styles.boton} color='#bd9ff5' />

            </View>
        </SafeAreaView >
    )
}

export default Detalle;