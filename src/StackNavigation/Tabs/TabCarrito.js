import PantallaCarrito from '../../Screens/PantallaCarrito';
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Necesario para inicializar el Stack
const Stack = createNativeStackNavigator();

const TabCarrito = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PantallaCarrito" component={PantallaCarrito}
                options={{
                    title: 'Carrito de compras',
                    headerStyle: {
                        backgroundColor: '#bd9ff5'
                    },
                }} />
        </Stack.Navigator>
    )
}

export default TabCarrito; 