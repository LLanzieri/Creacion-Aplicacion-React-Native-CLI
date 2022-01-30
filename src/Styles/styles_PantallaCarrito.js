import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 10,
        //borderWidth: 2,
        //borderColor: 'blue',
        alignItems: 'center',
        margin: 10,
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
    texto: {
        color: 'black',
        fontSize: 20,
    },
    containerTotal: {
        backgroundColor: '#04b040',
        alignItems: 'center',
        margin: 10,
        padding: 10

    },
    textoTotal: {
        color: 'white',
        fontSize: 20,
    }

});
