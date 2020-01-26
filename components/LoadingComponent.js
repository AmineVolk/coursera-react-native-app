import React from 'react';
import theme from "../res/theme.style"
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View,
} from 'react-native'

const styles = StyleSheet.create({
    loadingView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loadingText: {
        color: theme.PRIMARY_COLOR,
        fontSize: 14,
        fontWeight: 'bold'
    }
});

const Loading = () => {
    return (
        <View style={styles.loadingView} >
            <ActivityIndicator size="large" color={theme.PRIMARY_COLOR} />
            <Text style={styles.loadingText} >Loading . . .</Text>
        </View>
    );
};

export default Loading;