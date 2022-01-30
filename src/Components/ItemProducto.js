import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "../Styles/styles_ItemProducto";

const ItemProducto = ({ obj, handleOnSelectedProduct }) => {
    return (
        <TouchableOpacity
            style={styles.mainContainer}
            onPress={() => handleOnSelectedProduct(obj)}>

            <View style={styles.containerProducto}>

                <Text style={[styles.texto, { fontStyle: 'italic', textDecorationLine: 'underline' }]}>{obj.nombre}</Text>
                <Text style={styles.texto}>{obj.descripcion}</Text>

            </View>
        </TouchableOpacity>)
}

export default ItemProducto;