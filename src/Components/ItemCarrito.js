import { Button, Text, TouchableOpacity, View } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';
import React from "react";
import { styles } from "../Styles/styles_ItemCarrito";

const ItemCarrito = ({ obj, handleOnSelectedProduct }) => {

    return (
        <View
            style={styles.mainContainer}
            /* onPress={() => handleOnSelectedProduct(obj)} */>

            <View style={styles.containerProducto}>
                <View style={styles.titulo}>
                    <Text style={styles.texto}>{obj.nombre}</Text>
                </View>

                <Text style={[styles.texto, { fontStyle: 'italic' }]}>Precio por unidad: $ {obj.precio}</Text>
                <Text style={[styles.texto, { fontStyle: 'italic' }]}>Cantidad elegida: {obj.cantidad}</Text>

            </View>

            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => console.warn('Eliminar' + ' ' + obj.id)}>
                <Icon name='trash' size={20} style={styles.btnBorrar}> BORRAR ITEM</Icon>
            </TouchableOpacity>

        </View>)
}

export default ItemCarrito;