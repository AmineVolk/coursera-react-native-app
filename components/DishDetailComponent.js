import { Component, default as React } from 'react';
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { DISHES } from "../shared/dishes";


class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  render() {
    const dish = this.state.dishes[this.props.navigation.state.params.dishId];
    return (
      <View>
        <Card
          featuredTitle={dish.name}
          image={dish.image}
        //imageStyle={{ height: 50 }}
        >
          <Text style={{ margin: 10 }}>{dish.description}</Text>
        </Card>
      </View>
    )
  }
}



export default DishDetail;