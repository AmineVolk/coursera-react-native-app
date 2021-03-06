import React, { Component } from "react";
import { FlatList, View, Alert, Text } from "react-native";
import { ListItem, Divider } from "react-native-elements";
import Loading from "../LoadingComponent";
import Swipeout from "react-native-swipeout";
import PropTypes from "prop-types";
import * as Animatable from "react-native-animatable";

class Favorite extends Component {
  static navigationOptions = {
    title: "My Favorites",
  };
  onPressOnDelete = (item) => {
    Alert.alert(
      "Delete Favorite ?",
      `Are you sure you wish to delete the favorite ${item.name}`,
      [
        {
          text: "Cancel",
          onPress: () => console.log(item.name + "not deleted"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => this.props.deleteFavoriteDispatch(item.id),
        },
      ],
      { cancelable: false }
    );
  };
  render() {
    const { navigate } = this.props.navigation;
    const renderMenuItem = ({ item, index }) => {
      return (
        <Swipeout
          right={[
            {
              text: "Delete",
              type: "delete",
              onPress: () => this.onPressOnDelete(item),
            },
          ]}
        >
          <Animatable.View animation="fadeInRightBig" duration={1500}>
            <View>
              <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                onPress={() => navigate("Dishdetail", { dishId: item.id })}
                leftAvatar={{ source: { uri: item.image } }}
              />
              <Divider
                style={{
                  backgroundColor: "#a1a1a1",
                }}
              />
            </View>
          </Animatable.View>
        </Swipeout>
      );
    };
    if (this.props.dishes.isLoading) {
      return <Loading />;
    } else if (this.props.dishes.errMess) {
      return (
        <View>
          <Text>{this.props.dishes.errMess}</Text>
        </View>
      );
    } else {
      return (
        <FlatList
          data={this.props.dishes.dishes.filter((dish) =>
            this.props.favorites.some((el) => el === dish.id)
          )}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.id.toString()}
        />
      );
    }
  }
}

Favorite.propTypes = {
  deleteFavoriteDispatch: PropTypes.func.isRequired,
  dishes: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired,
};
export default Favorite;
