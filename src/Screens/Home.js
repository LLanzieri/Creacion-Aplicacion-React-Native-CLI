import { Button, FlatList, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

import ItemLista from '../Components/ItemLista';
import { styles } from '../Styles/Styles_Home';

const Home = () => {
    const [tarea, SetTarea] = useState('');
    const [listaTareas, setListaTareas] = useState([]);

    //Función para probar si se pasa bien el texto ingresado y setear el state
    const onChange = (text) => {
      //  console.warn({ text });
        SetTarea(text);
    }

    const agregarTarea = () => {

        // con esto, se hace una copia del estado actual del elemento y se le agrega el segundo parámetro, en este caso, se copia la lista de tareas actual y se le agrega un objeto CLAVE-VALOR cuyo identificador unívoco es un random
        setListaTareas([...listaTareas, { id: Math.random(), tarea }]);
        SetTarea('');
    }

    const borrarTarea = (id) => {

        // filter devuelve un array donde los id son distintos del que mando por parámetro, de manera que en el array definitivo NO tengo el id que envío por parámetro
        setListaTareas(listaTareas.filter(tarea => tarea.id !== id));
    }

    // consoleo la lista de tareas cuando se refresque el componente para tener bien el estado actual
    //console.warn(listaTareas);

    return (<View style={styles.containerGeneral}>
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput}
                placeholder='Ingrese una tarea'
                onChangeText={(texto) => onChange(texto)}
                value={tarea}
                autoFocus>

            </TextInput>
            <Button
                title='Agregar tarea'
                color={'#003366'}
                onPress={() => agregarTarea()}
                disabled={tarea.trim().length === 0}>

            </Button>
        </View>
        <View style={styles.seccionListaTareas}>
            <Text style={styles.tituloLista}>Lista de tareas</Text>
            {
                listaTareas.length > 0 ?
                    (<FlatList

                        style={styles.estilosLista}
                        data={listaTareas}
                        renderItem={({ item }) => (
                            <View>
                                <ItemLista obj={item} fncBorrar={borrarTarea}> </ItemLista>
                            </View>)

                        }
                        refreshing={true}
                        keyExtractor={(item) => item.id.toString()
                        }
                    />
                    ) : (<Text style={styles.descripciónTarea}>¡ NO HAY TAREAS POR REALIZAR !</Text>)
            }
        </View>
    </View>)

}

export default Home;