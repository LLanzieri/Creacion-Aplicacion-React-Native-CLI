import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 2
    },
    containerGeneral: {
        flex: 1,
        margin: 5,
        padding: 5
    },
    inputContainer: {
        // Necesario establecer que quiero tratar el container como fila, sino los objetos se apilan en columnas
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'space-between',
        padding: 2,
        alignItems: 'center'
    },
    textInput: {
        flex: 0.9,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
    },
    seccionListaTareas: {
        flex: 1,
        margin: 10,
    },
    tituloLista: {
        marginVertical: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#000000',
        textAlign: 'center'
    },
    estilosLista: {
        borderWidth: 2,
        marginVertical: 2
    },
    descripciónTarea: {
        marginVertical: 10,
        fontSize: 15,
        color: '#000000',
        textAlign: 'center'
    }

});

