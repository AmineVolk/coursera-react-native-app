import { Component, default as React } from 'react';
import { Text, View, ScrollView } from "react-native";
import { Card, Icon } from "react-native-elements";
import { DISHES } from "../../shared/dishes";
import { COMMENTS } from "../../shared/comments";

import Comments from "./comments"

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS
    }
  }
  render() {
    const dishId = this.props.navigation.state.params.dishId;
    const dish = this.state.dishes[dishId];
    return (
      <ScrollView>
        <Card
          featuredTitle={dish.name}
          image={dish.image}
        >
          <Text style={{ margin: 10 }}>{dish.description}</Text>
        </Card>
        <Comments comments={this.state.comments.filter((comment) => comment.dishId === dishId)} />
      </ScrollView>
    )
  }
}



export default DishDetail;