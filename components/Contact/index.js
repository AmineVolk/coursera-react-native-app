import React, { Component } from 'react'
import { Text, View } from "react-native";
import { Card, Divider } from "react-native-elements";
import styles from "./Styles"
export default class Contact extends Component {
    static navigationOptions = {
        title: "Contact"
    }

    render() {
        return (
            <View>
                <Card>
                    <View style={styles.cardTitle}>
                        <Text style={styles.textTitle}>Contact Information</Text>
                    </View>
                    <Divider style={styles.divider} />
                    <View>
                        <Text style={styles.text}>
                            121, Clear Water Bay Road
                        </Text >
                        <Text style={styles.text}>
                            Clear Water Bay, Kowloon
                        </Text>
                        <Text style={styles.text}>
                            HONG KONG
                        </Text>
                        <Text style={styles.text}>
                            Tel: +852 1234 5678
                        </Text>
                        <Text style={styles.text}>
                            Fax: +852 8765 4321
                        </Text>
                        <Text style={styles.text}>
                            Email:confusion@food.net
                        </Text>
                    </View>

                </Card>
            </View>
        )
    }
}



