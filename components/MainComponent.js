import React, { Component } from "react";
import { View } from "react-native";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetailComponent";
import MenuComponent from "./MenuComponent";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({
      selectedDish: dishId
    });
  }

  render() {
    return (
      <View>
        <MenuComponent
          dishes={this.state.dishes}
          onPress={dishId => this.onDishSelect(dishId)}
        />
        <DishDetail
          
          dish={
            this.state.dishes.filter(
              dish => dish.id === this.state.selectedDish
            )[0]
          }
        />
      </View>
    );
  }
}
export default MainComponent;
