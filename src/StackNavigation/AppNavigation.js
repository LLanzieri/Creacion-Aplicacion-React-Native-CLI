import Detalle from '../Screens/Detalle';
import ListaCategorias from '../Screens/ListaCategorias';
import ListaProductos from '../Screens/ListaProductos';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Necesario para inicializar el Stack
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ListaCategorias'>
                <Stack.Screen name="ListaCategorias" component={ListaCategorias} options={{ title: 'Lista de categorías' }} />
                <Stack.Screen name="ListaProductos" component={ListaProductos} options={{ title: 'Lista de productos' }} />
                <Stack.Screen name="DetalleProducto" component={Detalle} options={{ title: 'Detalle del producto' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;