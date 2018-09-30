import React, { Component } from "react";
import { DISHES } from "../shared/dishes";
import MenuComponent from "./MenuComponent";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return <MenuComponent dishes={this.state.dishes} />;
  }
}
export default MainComponent;
