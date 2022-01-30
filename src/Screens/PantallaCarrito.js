import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from "react";

import { CARRITOCOMPRAS } from '../Utils/Data/CarritoCompras';
import ItemCarrito from '../Components/ItemCarrito';
import { styles } from '../Styles/styles_PantallaCarrito';

const PantallaCarrito = () => {

    const [total, setTotal] = useState(0);

    const calcularTotal = () => {
        let total = 0;
        for (let i = 0; i < CARRITOCOMPRAS.length; i++) {
            total += (CARRITOCOMPRAS[i].precio * CARRITOCOMPRAS[i].cantidad)
        }
        setTotal(total);
    }

    useEffect(() => {
        calcularTotal();
    }, [])

    return (
        <SafeAreaView>

            <FlatList
                style={styles.lista}
                data={CARRITOCOMPRAS}
                renderItem=
                {
                    ({ item }) => (
                        <ItemCarrito obj={item} />
                    )
                }
            />
            <TouchableOpacity style={styles.containerTotal} onPress={() => console.warn("CONFIRMAR COMPRA")}>
                <Text style={styles.textoTotal}>Confirmar compra: $ {total}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default PantallaCarrito; 