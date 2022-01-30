import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 10,
        borderWidth: 2,
        borderColor: 'purple',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'center'
    },
    containerProducto: {
        flex: 1,
        alignItems: 'center',

    },
    texto: {
        color: 'black',
        fontSize: 20,
        margin: 5
    }

});
