import { Button, Image, SafeAreaView, Text, View } from "react-native";

import React from "react";
import { styles } from '../Styles/styles_Detalle'

const ImgDetalle = require('../../assets/images/evaluacion.png');

const Detalle = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.containerElementos}>

                <View style={styles.imagen}>
                    <Image source={ImgDetalle} />
                </View>

                <View style={styles.containerTexto}>
                    <Text style={styles.texto}>Screen: Detalle</Text>
                </View>

            </View>
        </SafeAreaView >
    )
}

export default Detalle;