import { StyleSheet } from 'react-native';
import themes from "../../res/theme.style"

const Styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 20,
    },
    formInput: {
        marginBottom: 20,
        paddingLeft: 10
    },
    formCheckbox: {
        backgroundColor: null,
        marginBottom: 20

    },
    title: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20
    },
    card: themes.card
});

export default Styles;