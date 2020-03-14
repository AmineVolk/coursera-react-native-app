import React, { Component } from 'react'
import { Text, View } from "react-native";
import styles from "./Styles"
import * as Animatable from "react-native-animatable"
import { Card, Icon, Button } from "react-native-elements"
import * as MailComposer from 'expo-mail-composer';
export default class Contact extends Component {
    static navigationOptions = {
        title: "Contact"
    }
    sendMail() {
        MailComposer.composeAsync({
            recipients: ["confusion@food.net"],
            subject: "Enquiry",
            body: "To whom it may concern"
        })
    }

    render() {
        return (
            <View>
                <Animatable.View animation="fadeInDown" duration={1500} delay={300}>
                    <View>
                        <Card style={styles.cardTitle}>
                            <Text style={styles.textTitle}>Contact Information</Text>
                        </Card>
                        <Card>
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
                        </Card>
                        <Button title="Send Email"
                            buttonStyle={styles.emailButton}
                            icon={<Icon
                                name="email"
                                type="material"
                                color="white"
                            />}
                            onPress={this.sendMail}
                        />

                    </View>
                </Animatable.View>
            </View>
        )
    }
}



