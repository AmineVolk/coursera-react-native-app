import React, { Component, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Modal, Text, Button } from "react-native";
import { Input, Rating, Card } from "react-native-elements";
import themeStyle from '../../res/theme.style';
import PropTypes from 'prop-types'

const EditModal = ({ postComment, toggleModal, showModal, dishId }) => {

    const [rating, setRating] = useState(2)
    const [author, setAuthor] = useState("")
    const [comment, setComment] = useState("")

    const onAuthorChange = (e) => setAuthor(e)

    const onCommentChange = (e) => setComment(e)


    const handleSubmit = () => {
        const commentToCreate = {
            author,
            comment,
            dishId: dishId,
            rating: rating
        }
        console.log(`*** on click submit comment : ${JSON.stringify(commentToCreate)}`)
        postComment(commentToCreate);
        toggleModal();
    }
    return <Modal animationType={"slide"} transparent={false}
        visible={showModal}
        onDismiss={() => toggleModal()}
        onRequestClose={() => toggleModal()}
        style={{ backgroundColor: "red" }}
    >
        <Card
        >
            <Text style={{ textAlign: "center", color: "#f1c40f" }}>Rating <Text style={{ fontSize: 20 }}>{rating}</Text>/5</Text>
            <Rating onFinishRating={(rate) => setRating(rate)}
                startingValue={rating}
                imageSize={40}
                style={{ marginVertical: 15 }} />
            <Input
                placeholder='Author'
                style={{ marginBottom: 8, color: "#808080" }}
                onChangeText={onAuthorChange}
                leftIcon={
                    <Icon
                        style={{ marginRight: 8 }}
                        name='user'
                        size={24}
                        color='#808080'
                    />
                }
            />
            <Input
                placeholder='Comment'
                onChangeText={onCommentChange}
                style={{ color: "#808080" }}
                leftIcon={
                    <Icon
                        style={{ marginRight: 5 }}

                        name='comments'
                        size={24}
                        color='#808080'
                    />
                }
            />
            <View style={{ marginVertical: 15 }}
            >
                <Button
                    onPress={() => handleSubmit()}
                    title="Submit"
                    color={themeStyle.PRIMARY_COLOR}
                    icon={
                        <Icon
                            name="check"
                            size={15}
                            color="white"
                        />}
                />
            </View>
            <Button
                onPress={() => toggleModal()}
                color="#808080"
                title="Cancel"
            />
        </Card>
    </Modal>
}
EditModal.propTypes = {
    postComment: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    dishId: PropTypes.number.isRequired
}
export default EditModal;