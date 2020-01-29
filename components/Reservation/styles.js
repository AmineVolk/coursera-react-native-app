import { StyleSheet } from 'react-native';
import themes from "../../res/theme.style"

const Styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    datePickerView: {
        flex: 1,
        flexDirection: "column",
        marginVertical: 10
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
    buttonView: {
        flex: 1,
        marginTop: 15
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