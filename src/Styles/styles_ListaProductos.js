import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    containerElementos: {
        flex: 1,
        justifyContent: 'center',
        /* alignItems: 'center', */
        //borderColor: 'purple',
        //borderWidth: 2
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
        margin: 5,
        //borderColor: 'green',
        borderWidth: 2,

    },
    containerTexto: {
        flex: 1,
        justifyContent: 'center',
    },
    texto: {
        fontSize: 25,
        color: 'black'
    },
    listaVacia: {
        margin: 10,
        alignItems: 'center'
    },
    textoListaVacia: {
        margin: 15,
        fontSize: 25,
        color: 'black',
        alignItems: 'center',
        padding: 10
    }

});
