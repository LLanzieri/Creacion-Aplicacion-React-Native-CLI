import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    containerElementos: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    imagen: {
        flex: 1,
        flexGrow: 0.2,
        justifyContent: 'center',
        //borderWidth: 2,
        //borderColor: 'blue',
    },
    containerTexto: {
        flex: 1,
        flexGrow: 0.5,
        borderWidth: 2,
        borderColor: 'purple',
        alignItems: 'center',
        padding: 10

    },
    texto: {
        fontSize: 20,
        color: 'black',
        margin: 10,
        fontStyle: 'italic'
    },
    boton: {
        flex: 1
    }

});
