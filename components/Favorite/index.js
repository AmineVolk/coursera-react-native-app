import React, { Component } from 'react'
import { FlatList, View } from "react-native";
import { ListItem, Divider } from "react-native-elements";
import Loading from "../LoadingComponent"
export default class Favorite extends Component {
    static navigationOptions = {
        title: "My Favorites"
    }
    render() {
        const { navigate } = this.props.navigation;
        const renderMenuItem = ({ item, index }) => {
            return (
                <View>
                    <ListItem key={index} title={item.name}
                        subtitle={item.description} hideChevron={true}
                        onPress={() => navigate("Dishdetail", { dishId: item.id })}
                        leftAvatar={{ source: { uri: item.image } }}
                    />
                    <Divider style={{
                        backgroundColor: '#a1a1a1',
                    }} />
                </View>
            )
        }
        if (this.props.dishes.isLoading) {
            return <Loading />
        }
        else if (this.props.dishes.errMess) {
            return <View>
                <Text>{this.props.dishes.errMess}</Text>
            </View>
        }
        else {
            return (
                <FlatList
                    data={this.props.dishes.dishes.filter(dish => this.props.favorites.some(el => el === dish.id))}
                    renderItem={renderMenuItem}
                    keyExtractor={item => item.id.toString()}

                />
            )
        }
    }
}
