import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import TabCarrito from './Tabs/TabCarrito';
import TabConfiguracion from './Tabs/TabConfiguracion';
import TabShop from './Tabs/TabShop';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Necesario para inicializar el Stack de pestañas
const BottomTabs = createBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
        
            <BottomTabs.Navigator initialRouteName='Compra' screenOptions={{
                headerShown: false
            }}>

                <BottomTabs.Screen name='Compra' component={TabShop}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon name='home' size={25} />
                        )
                    }}
                />

                <BottomTabs.Screen name='Carrito' component={TabCarrito}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Icon name='cart' size={25} />
                        )
                    }} />
                <BottomTabs.Screen name='Configuracion' component={TabConfiguracion}
                    options={{
                        title: 'Configuración',
                        tabBarIcon: ({ focused }) => (
                            <Icon name='settings' size={25} />
                        )
                    }} />

            </BottomTabs.Navigator>
        </NavigationContainer >
    )
}

export default AppNavigation;