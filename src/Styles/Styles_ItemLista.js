import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerItemNoFinalizada: {
        margin: 3,
        backgroundColor: '#ff9e9e'
    },
    containerItemFinalizada: {
        margin: 3,
        backgroundColor: '#9dfc97'
    },
    descripciónTarea: {
        marginVertical: 5,
        fontSize: 25,
        color: '#000000',
        textAlign: 'center',
        fontStyle: 'italic'
    },
    containerBotones: {
        flexDirection: 'row',
        //borderWidth: 2,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 12
    },
    tituloTarea: {
        marginBottom: 10,
        fontSize: 15,
        color: '#000000',
        textAlign: 'center'
    }

});
