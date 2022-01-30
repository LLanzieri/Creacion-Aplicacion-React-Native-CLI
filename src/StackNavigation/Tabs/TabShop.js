import Detalle from '../../Screens/Detalle';
import ListaCategorias from '../../Screens/ListaCategorias';
import ListaProductos from '../../Screens/ListaProductos';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Necesario para inicializar el Stack
const Stack = createNativeStackNavigator();

const TabShop = () => {
    return (
        <Stack.Navigator initialRouteName='ListaCategorias'>
            <Stack.Screen name="ListaCategorias" component={ListaCategorias}
                options={{
                    title: 'Lista de categorías',
                    headerStyle: {
                        backgroundColor: '#bd9ff5'
                    },
                }}
            />

            <Stack.Screen name="ListaProductos" component={ListaProductos}
                options={({ route }) => ({
                    title: route.params.titulo,
                    headerStyle: {
                        backgroundColor: route.params.color
                    },
                })}
            />

            <Stack.Screen name="DetalleProducto" component={Detalle}
                options={{
                    title: 'Detalle del producto',
                    headerStyle: {
                        backgroundColor: '#bd9ff5'
                    },
                }} />

        </Stack.Navigator>
    )
}

export default TabShop;