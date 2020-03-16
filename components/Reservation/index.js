import React, { Component } from 'react';
import { Text, View, Picker, Switch, Button, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker'
import styles from "./styles"
import themes from "../../res/theme.style"
import { Divider, Card } from "react-native-elements";
import * as Animatable from "react-native-animatable"
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import theme from "../../res/theme.style"
import * as Calendar from 'expo-calendar';
class Reservation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guests: 1,
            smoking: false,
            date: '',
            showModal: false
        }
    }
    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    handleReservation() {
        console.log(JSON.stringify(this.state));
        this.toggleModal();
        this.presentLocalNotif(this.state.date);
        this.addReservationToCalendar(this.state.date)
    }

    resetForm() {
        this.setState({
            guests: 1,
            smoking: false,
            date: '',
            showModal: false
        });
    }

    async obtainNotifPermission() {
        let permission = await Permissions.getAsync(Permissions.USER_FACING_NOTIFICATIONS);
        if (permission.status !== "granted") {
            permission = await Permissions.getAsync(Permissions.USER_FACING_NOTIFICATIONS);
            if (permission.status !== "granted") {
                Alert.alert("Permission not granted to show notifications");
            }
        }
        return permission;

    }

    async presentLocalNotif(date) {
        try {
            await this.obtainNotifPermission();
            Notifications.presentLocalNotificationAsync({
                title: "Your Reservation",
                body: `Reservation for ${date} requested`,
                ios: {
                    sound: true
                },
                android: {
                    sound: true,
                    vibrate: true,
                    color: "#512DA8"
                }
            })
        } catch (e) {
            console.error(`Error in presentLocalNotif ${e}`)
        }
    }
    obtainCalendarPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CALENDAR);
        if (status != 'granted') {
            Alert.alert("No permission to use calandar")
        }
    }
    addReservationToCalendar = async (date) => {
        try {
            await this.obtainCalendarPermission();
            Calendar.createEventAsync(null, {
                title: "Con Fusion Table Reservation",
                startDate: Date(Date.parse(date)),
                endDate: Date(Date.parse(date)),
                timeZone: "Asia/Hong_Kong",
                location: "121, Clear Water Bay Road, Clear Water Bay, Kowloon, Hong Kong",

            })
        } catch (e) {
            console.error(`Error in addReservationToCalendar ${e}`)
            Alert.alert(e)
        }
    }

    onPressOnSubmit = () => {
        Alert.alert("Your Reservation OK ?",
            `Number of Guests : ${this.state.guests}\n\Smoking ? ${this.state.smoking}\n\Date and time : ${this.state.date}`,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Reservation cancel"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => this.handleReservation()
                }
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <View style={styles.root}>
                <Animatable.View animation="zoomIn" >
                    <Card containerStyle={theme.card}>
                        <Text style={styles.titleText}>Reserve your table</Text>
                    </Card>
                    <Card containerStyle={styles.bodyCard}>
                        <View style={styles.formRow}>
                            <Text style={styles.formLabel}>Number of Guests</Text>
                            <Picker
                                style={styles.formItem}
                                selectedValue={this.state.guests}
                                onValueChange={(itemValue, itemIndex) => this.setState({ guests: itemValue })}>
                                <Picker.Item label="1" value="1" />
                                <Picker.Item label="2" value="2" />
                                <Picker.Item label="3" value="3" />
                                <Picker.Item label="4" value="4" />
                                <Picker.Item label="5" value="5" />
                                <Picker.Item label="6" value="6" />
                            </Picker>
                        </View>
                        <Divider style={{
                            backgroundColor: '#a1a1a1',
                            marginBottom: 10

                        }} />
                        <View style={styles.formRow}>
                            <Text style={styles.formLabel}>Smoking ?</Text>
                            <Switch
                                trackColor={{
                                    true: theme.PRIMARY_COLOR
                                }}
                                thumbColor={this.state.smoking ? theme.PRIMARY_COLOR : "grey"}
                                style={styles.formItem}
                                value={this.state.smoking}
                                onValueChange={(value) => this.setState({ smoking: value })}>
                            </Switch>
                        </View>
                        <Divider style={{
                            backgroundColor: '#a1a1a1',
                            marginTop: 10

                        }} />
                        <View style={{ flex: 1, paddingVertical: 15 }}>
                            <Text style={styles.formLabel}>Date and Time : </Text>
                        </View>

                        <DatePicker
                            style={{ width: "100%", marginVertical: 20 }}
                            date={this.state.date}
                            format=''
                            mode="datetime"
                            placeholder="select date and Time"
                            minDate="2017-01-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36,
                                    flex: 1
                                }
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                        <Divider style={{
                            backgroundColor: '#a1a1a1',
                        }} />

                        <Button
                            style={{ flex: 1 }}
                            onPress={() => this.onPressOnSubmit()}
                            title="Reserve"
                            color={themes.PRIMARY_COLOR_LIGTH}
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </Card>
                </Animatable.View>
            </View>
        );
    }
};
export default Reservation;