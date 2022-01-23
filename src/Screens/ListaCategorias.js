import { Button, Image, SafeAreaView, Text, View } from "react-native";

import React from "react";
import { styles } from '../Styles/styles_ListaCategorias'

const ImgCategorias = require('../../assets/images/opciones.png');

const ListaCategorias = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.containerElementos}>

                <View style={styles.imagen}>
                    <Image source={ImgCategorias} />
                </View>

                <View style={styles.containerTexto}>
                    <Text style={styles.texto}>Screen: Lista de categorías</Text>
                </View>

                <View style={styles.boton}>
                    <Button title="IR A LISTA DE PRODUCTOS" onPress={() => navigation.navigate('ListaProductos')} />
                </View>

            </View>
        </SafeAreaView >
    )
}

export default ListaCategorias;