import { Image, SafeAreaView, Text, View } from 'react-native'

import React from "react";
import { styles } from '../Styles/styles_Configuracion'

const ImgSettings = require('../../assets/images/settings.png');

const Configuracion = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={styles.imagen}>
                <Image source={ImgSettings} />
            </View>

            <Text style={styles.texto}>Screen: CONFIGURACIÓN</Text>

        </SafeAreaView>
    )
}

export default Configuracion; 