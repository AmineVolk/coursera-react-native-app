import { Component, default as React } from 'react';
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { DISHES } from "../shared/dishes";
import imgCard from "./images/uthappizza.png";


class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render() {
    const dishId = 0;
    return (
      <View>
        <Card
          featuredTitle={this.state.dishes[dishId].name}
          image={imgCard}
          imageStyle={{ height: 30 }}
        >
          <Text style={{ margin: 10 }}>{this.state.dishes[dishId].description}</Text>
        </Card>
      </View>
    )
  }
}



export default DishDetail;