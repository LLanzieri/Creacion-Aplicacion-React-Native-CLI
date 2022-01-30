import { Button, FlatList, Image, SafeAreaView, Text, View } from "react-native";

import { CATEGORIAS } from '../Utils/Data/Categorias'
import ItemCategoria from "../Components/ItemCategoria";
import React from "react";
import { styles } from '../Styles/styles_ListaCategorias'

const ImgCategorias = require('../../assets/images/opciones.png');

const ListaCategorias = ({ navigation }) => {

    const handlerOnSelectedItem = (item) => {
        navigation.navigate('ListaProductos',
            {
                objeto: item,
                titulo: item.nombre,
                color: item.color
            }
        );
    }

    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={styles.containerElementos}>

                <View style={styles.imagen}>
                    <Image source={ImgCategorias} />
                </View>

                <FlatList
                    style={styles.lista}
                    data={CATEGORIAS}
                    renderItem=
                    {
                        ({ item }) =>
                        (
                            < ItemCategoria obj={item} OnSelectedItem={handlerOnSelectedItem} />
                        )
                    }
                    keyExtractor={item => item.id}
                />

                {/*
                <View style={styles.containerTexto}>
                    <Text style={styles.texto}>Screen: Lista de categorías</Text>
                </View>

                <View style={styles.boton}>
                    <Button title="IR A LISTA DE PRODUCTOS" onPress={() => navigation.navigate('ListaProductos')} />
                </View> */}

            </View>
        </SafeAreaView >
    )
}

export default ListaCategorias;