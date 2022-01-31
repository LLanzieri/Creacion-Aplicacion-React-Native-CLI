import { Button, FlatList, Image, SafeAreaView, Text, View } from "react-native";

import ItemProducto from "../Components/ItemProducto";
import { PRODUCTOS } from "../Utils/Data/Productos";
import React from "react";
import { styles } from '../Styles/styles_ListaProductos'

const ImgProductos = require('../../assets/images/estar.png');

const ListaProductos = ({ navigation, route }) => {

    // AGARRO EL OBJETO QUE SE LE ENVÍA A LA VISTA POR PARÁMETRO DE RUTAS
    const { objeto } = route.params;

    // CREO UN NUEVO ARRAY DONDE TENGO LOS PRODUCTOS CON LA MISMA CATEGORÍA QUE LA SELECCIONADA
    // POR CADA producto, PREGUNTO categoría del producto ES IGUAL A objeto.id DONDE TENGO LA CATEGORÍA SELECCIONADA
    const productosMismaCategoria = PRODUCTOS.filter(producto => producto.categoria === objeto.id)

    const handleOnSelectedProduct = (item) => {
        navigation.navigate('DetalleProducto',
            {
                // Envío todo el ítem seleccionado para utilizar en la vista bajo el identificador 'OBJETOELEGIDO'
                objetoElegido: item
            }
        )
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.containerElementos}>

                <View style={styles.imagen}>
                    <Image source={ImgProductos} />
                </View>

                <FlatList
                    style={styles.lista}
                    data={productosMismaCategoria}
                    renderItem=
                    {
                        ({ item }) => (
                            <ItemProducto obj={item} handleOnSelectedProduct={handleOnSelectedProduct} />
                        )
                    }
                    ListEmptyComponent=
                    {
                        <View style={styles.listaVacia}>
                            <Text style={styles.textoListaVacia}>¡ NO HAY PRODUCTOS QUE COINCIDAN CON ESTA CATEGORIA !</Text>
                        </View>
                    }
                />

            </View>
        </SafeAreaView>
    )
}

export default ListaProductos;