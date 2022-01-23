import { Button, Image, SafeAreaView, Text, View } from "react-native";

import React from "react";
import { styles } from '../Styles/styles_ListaProductos'

const ImgProductos = require('../../assets/images/estar.png');

const ListaProductos = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.containerElementos}>

                <View style={styles.imagen}>
                    <Image source={ImgProductos} />
                </View>

                <View style={styles.containerTexto}>
                    <Text style={styles.texto}>Screen: Lista de productos</Text>
                </View>

                <View style={styles.boton}>
                    <Button title="IR A DETALLE" onPress={() => navigation.navigate('DetalleProducto')} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ListaProductos;