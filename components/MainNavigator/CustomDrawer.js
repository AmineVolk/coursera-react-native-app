import React from "react";
import { Image, ScrollView, Text, View } from "react-native"
import { DrawerItems, SafeAreaView } from "react-navigation";

import styles from "./styles"

const CustomDrawer = (props) => (
    <ScrollView>
        <View style={styles.drawerHeader}>
            <View style={{ flex: 1 }}>
                <Image source={require("../images/logo.png")}
                    style={styles.drawerImage}
                />
            </View>
            <View style={{ flex: 2 }}>
                <Text style={styles.drawerHeaderText}>Ristorent Confusion</Text>
            </View>
        </View>
        <DrawerItems {...props} />

    </ScrollView >
)

export default CustomDrawer;