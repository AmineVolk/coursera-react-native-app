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
    this.state = {
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
        <Dish dish={this.props.dishes[dishId]}
          favorite={this.state.favorites.some(el => el === dishId)}
          onPress={() => this.markeFavorite(dishId)}
        />
        <Comments comments={this.props.comments.filter((comment) => comment.dishId === dishId)} />
      </ScrollView>
    )
  }
}
DishDetail.propTypes = {
  dishes: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
}


export default DishDetail;