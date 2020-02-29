import React, { Component } from 'react';
import { Text, View, ScrollView, Picker, Switch, Button, Modal } from 'react-native';
import DatePicker from 'react-native-datepicker'
import styles from "./styles"
import themes from "../../res/theme.style"
import { Divider, Card } from "react-native-elements";
import ReservationModal from "./ModalReservation"
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
    }

    resetForm() {
        this.setState({
            guests: 1,
            smoking: false,
            date: '',
            showModal: false
        });
    }


    render() {

        return (

            <ScrollView>
                <View>
                    <Card >
                        <Text style={styles.titleText}>Reserve your table</Text>
                    </Card>
                    <Card>
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
                                style={styles.formItem}
                                value={this.state.smoking}
                                trackColor={themes.PRIMARY_COLOR}
                                onValueChange={(value) => this.setState({ smoking: value })}>
                            </Switch>
                        </View>
                        <Divider style={{
                            backgroundColor: '#a1a1a1',
                            marginTop: 10

                        }} />
                        <View style={styles.datePickerView}>
                            <Text style={styles.formLabel}>Date and Time : </Text>
                            <DatePicker
                                style={{ flex: 1, width: "100%", marginVertical: 10, }}
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
                        </View>
                        <Divider style={{
                            backgroundColor: '#a1a1a1',
                        }} />
                        <View style={styles.buttonView}>
                            <Button
                                style={{ flex: 1 }}
                                onPress={() => this.handleReservation()}
                                title="Reserve"
                                color={themes.PRIMARY_COLOR}
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>
                    </Card>
                </View>
            </ScrollView>
        );
    }

};
export default Reservation;