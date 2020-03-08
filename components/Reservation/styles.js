import { StyleSheet } from 'react-native';
import themes from "../../res/theme.style"

const Styles = StyleSheet.create({
    root: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        height: "100%",
    },
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 20
    },
    formLabel: {
        fontSize: 18,

    },
    formItem: {
        flex: 1
    },
    titleView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    titleText: {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 20,
        color: "#43484d"
    },

    // model style

    modal: {
        justifyContent: 'center',
        margin: 5
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: themes.PRIMARY_COLOR,
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
});

export default Styles;