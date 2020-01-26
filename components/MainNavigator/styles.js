import { StyleSheet } from 'react-native';
import theme from "../../res/theme.style"
const Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: theme.PRIMARY_COLOR,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row",
        height: 140,
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    },
    drawerHeaderText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    }

});

export default Styles;