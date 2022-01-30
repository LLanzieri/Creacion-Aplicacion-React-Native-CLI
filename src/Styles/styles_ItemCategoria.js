import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        height: height / 8,
        padding: 10,
        borderWidth: 2,
        //borderColor: 'blue',
        alignItems: 'center',
        margin: 10,
        justifyContent: 'center'
    },
    texto: {
        color: 'black',
        fontSize: 20,
    }

});
