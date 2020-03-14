import { StyleSheet } from 'react-native';
import theme from "../../res/theme.style"

const Styles = StyleSheet.create({
    cardTitle: {
        marginBottom: 10,
    },
    textTitle: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 20,
        color: "#43484d"
    },
    text: {
        marginBottom: 10,
        fontSize: 16
    },
    divider: {
        backgroundColor: '#a1a1a1',
        marginBottom: 10
    },
    emailButton: {
        backgroundColor: theme.PRIMARY_COLOR,
        margin: 15
    }

});

export default Styles;