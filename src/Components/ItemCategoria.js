import { Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { styles } from '../Styles/styles_ItemCategoria';

const ItemCategoria = ({ obj, OnSelectedItem }) => {
    return (
        <TouchableOpacity
            style={[styles.mainContainer, { backgroundColor: obj.color }]}
            onPress={() => OnSelectedItem(obj)}
        >
            <View>
                <Text style={styles.texto}>{obj.nombre}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default ItemCategoria;
