import { Component, default as React } from 'react';
import { Text, View, ScrollView } from "react-native";
import { Card, Icon } from "react-native-elements";
import Comments from "./comments"
import PropTypes from 'prop-types'

const Dish = (props) => <Card
  featuredTitle={props.dish.name}
  image={{ uri: props.dish.image }}
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
  }


  render() {
    const dishId = this.props.navigation.state.params.dishId;
    return (
      <ScrollView>
        <View style={{ marginBottom: 15 }}>
          <Dish dish={this.props.dishes[dishId]}
            favorite={this.props.favorites.some(el => el === dishId)}
            onPress={() => this.props.postFavorite(dishId)}
          />
          <Comments comments={this.props.comments.filter((comment) => comment.dishId === dishId)} />
        </View>

      </ScrollView>
    )
  }
}
DishDetail.propTypes = {
  dishes: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired,
  postFavorite: PropTypes.func.isRequired
}


export default DishDetail;