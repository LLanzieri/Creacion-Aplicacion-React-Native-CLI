import { Button, FlatList, Image, SafeAreaView, Text, View } from "react-native";

import { CATEGORIAS } from '../Utils/Data/Categorias'
import ItemCategoria from "../Components/ItemCategoria";
import React from "react";
import { styles } from '../Styles/styles_ListaCategorias'

const ImgCategorias = require('../../assets/images/opciones.png');

const ListaCategorias = ({ navigation }) => {

    // Cuando se hace click en el elemento, navego a la pantalla 'ListaProductos'
    const handlerOnSelectedItem = (item) => {
        navigation.navigate('ListaProductos',
            {
                // Le paso a la pantalla los parámetros que espera bajo los identificadores 'TITULO' y 'COLOR' y el item entero con el identificador 'OBJETO' para utilizarlo en la vista
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

            </View>
        </SafeAreaView >
    )
}

export default ListaCategorias;