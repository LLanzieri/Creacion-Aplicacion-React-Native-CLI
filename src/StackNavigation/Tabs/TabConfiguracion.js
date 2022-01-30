import Configuracion from '../../Screens/Configuracion';
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Necesario para inicializar el Stack
const Stack = createNativeStackNavigator();

const TabConfiguracion = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PantallaConfiguracion" component={Configuracion}
                options={{
                    title: 'Configuración',
                    headerStyle: {
                        backgroundColor: '#bd9ff5'
                    },
                }} />
        </Stack.Navigator>
    )
}

export default TabConfiguracion; 