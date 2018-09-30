import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import imgCard from "./images/uthappizza.png";

function RenderDish(props) {
  const dish = props.dish;

  if (dish != null) {
    return (
      <Card
        featuredTitle={dish.name}
        image={imgCard}
        imageStyle={{ height: 30 }}
      >
        <Text style={{ margin: 10 }}>{dish.description}</Text>
      </Card>
    );
  } else {
    return <View />;
  }
}

function DishDetail(props) {
  return <RenderDish dish={props.dish} />;
}

export default DishDetail;
