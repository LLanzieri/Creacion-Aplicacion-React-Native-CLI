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

    const handlerOnConfirm = () => {
        console.warn("CONFIRMAR COMPRA");
    }

    const handlerDelete = (item) => {
        console.warn('Eliminar' + ' ' + item)
    }

    useEffect(() => {
        calcularTotal();
    }, [])

    return (
        <SafeAreaView style={styles.mainContainer}>

            <FlatList
                style={styles.lista}
                data={CARRITOCOMPRAS}
                renderItem=
                {
                    ({ item }) => (
                        <ItemCarrito obj={item} handlerDelete={handlerDelete} />
                    )
                }
            />
            <TouchableOpacity style={styles.containerTotal} onPress={() => handlerOnConfirm()}>
                <Text style={styles.textoTotal}>Confirmar compra: $ {total}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default PantallaCarrito; 