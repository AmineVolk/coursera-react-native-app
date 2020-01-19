import { Component, default as React } from 'react';
import { Text, View, ScrollView } from "react-native";
import { Card, Icon } from "react-native-elements";
import { DISHES } from "../../shared/dishes";
import { COMMENTS } from "../../shared/comments";

import Comments from "./comments"

const Dish = (props) => <Card
  featuredTitle={props.dish.name}
  image={props.dish.image}
>
  <Text style={{ margin: 10 }}>{props.dish.description}</Text>
  <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
    <Icon
      raised
      reverse
      name={props.favorite ? "heart" : "heart-o"}
      type="font-awesome"
      color="#f50"
      onPress={() => props.favorite ? console.log("already favorite") : props.onPress()} />
  </View>


</Card>;

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      favorites: []
    }
  }
  markeFavorite(dishId) {
    this.setState({ favorites: this.state.favorites.concat(dishId) })
  }


  render() {
    const dishId = this.props.navigation.state.params.dishId;

    return (
      <ScrollView>
        <Dish dish={this.state.dishes[dishId]}
          favorite={this.state.favorites.some(el => el === dishId)}
          onPress={() => this.markeFavorite(dishId)}
        />
        <Comments comments={this.state.comments.filter((comment) => comment.dishId === dishId)} />
      </ScrollView>
    )
  }
}



export default DishDetail;