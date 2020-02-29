import React from 'react'
import { Card, Divider, Rating } from "react-native-elements";
import { Text, View, FlatList } from "react-native";
const Comments = (props) => {
    const comments = props.comments;

    const renderCommentItem = ({ item, index }) => {

        return (
            <View key={index} >
                <Text style={{ fontSize: 14 }}>{item.comment}</Text>
                <View style={{
                    flex: 1,
                    paddingLeft: 0,
                    flexDirection: 'row',
                    justifyContent: "flex-start",
                    paddingVertical: 8
                }}>
                    <Rating startingValue={item.rating} imageSize={12} />

                </View>
                <Text style={{ fontSize: 12 }}>{'-- ' + item.author + ', ' + item.date} </Text>
                <Divider style={{
                    backgroundColor: '#a1a1a1',
                    marginVertical: 8
                }} />
            </View>
        );
    };

    return (
        <Card title='Comments' >
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

export default Comments;