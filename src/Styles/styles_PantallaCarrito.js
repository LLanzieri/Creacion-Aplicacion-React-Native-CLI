import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 5,
        /* borderWidth: 2,
        borderColor: 'pink', */
        justifyContent: 'center'
    },
    imagen: {
        flex: 1,
        flexGrow: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        //borderWidth: 2,
        //borderColor: 'red',
        margin: 5
    },
    lista: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'black'
    },
    texto: {
        color: 'black',
        fontSize: 20,
    },
    containerTotal: {
        flex: 1,
        flexGrow: 0.09,
        backgroundColor: '#04b040',
        alignItems: 'center',
        margin: 10,
        padding: 5,
        justifyContent: 'center'
    },
    textoTotal: {
        color: 'white',
        fontSize: 20,
    }

});
