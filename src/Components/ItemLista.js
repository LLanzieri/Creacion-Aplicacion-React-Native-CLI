import { Button, Text, TouchableOpacity, View } from 'react-native';

import React from 'react'
import { styles } from '../Styles/Styles_ItemLista';
import { useState } from 'react/cjs/react.development';

const ItemLista = (props) => {

    const [estado, setEstado] = useState(false);

    const cambiarEstado = () => {
        setEstado(!estado)
    }

    return (
        <View style={estado === false ? styles.containerItemNoFinalizada : styles.containerItemFinalizada}>

            <Text style={styles.descripciónTarea}> {props.obj.tarea}</Text>
            {
                estado === false ?
                    <Text style={styles.tituloTarea}>☢ 🤔 ¡ TAREA INCOMPLETA ! 🤔 ☢</Text>
                    :
                    <Text style={styles.tituloTarea}> ✔ 😄 ¡ TAREA FINALIZADA ! 😄 ✔</Text>
            }
            <TouchableOpacity style={styles.containerBotones}>
                <Button title="BORRAR TAREA"
                    color={'#b30000'}
                    onPress={() => props.fncBorrar(props.obj.id)}>

                </Button>
                <Button title={estado === false ? "TAREA COMPLETA" : "TAREA INCOMPLETA"} color={'#339966'} onPress={() => cambiarEstado()}> </Button>

            </TouchableOpacity>
        </View >
    )
}

export default ItemLista;