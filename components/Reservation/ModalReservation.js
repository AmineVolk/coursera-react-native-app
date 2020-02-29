import React, { Component } from 'react';
import { Text, View, Button, Modal } from 'react-native';
import { Divider, Card } from "react-native-elements";
import themes from "../../res/theme.style"
import styles from "./styles"
const ReservationModal = (props) =>
    <Modal animationType={"slide"} transparent={false}
        visible={props.showModal}
        onDismiss={() => props.toggleModal()}
        onRequestClose={() => props.toggleModal()}>
        <Card>
            <View style={styles.modal}>
                <Text style={styles.modalTitle}>Your Reservation</Text>
                <Text style={styles.modalText}>Number of Guests: {props.guests}</Text>
                <Text style={styles.modalText}>Smoking ? : {props.smoking ? 'Yes' : 'No'}</Text>
                <Text style={styles.modalText}>Date and Time: {props.date}</Text>

                <Button
                    onPress={() => { props.toggleModal(); props.resetForm(); }}
                    color={themes.PRIMARY_COLOR}
                    title="Close"
                />
            </View>
        </Card>

    </Modal>

export default ReservationModal;