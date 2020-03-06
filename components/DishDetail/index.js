import { Component, default as React } from 'react';
import { Text, View, ScrollView } from "react-native";
import { Card, Icon } from "react-native-elements";
import Comments from "./comments"
import PropTypes from 'prop-types'
import themes from "../../res/theme.style"
import EditModal from "./EditModal"
import * as Animatable from "react-native-animatable"

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
      color={themes.PRIMARY_COLOR}
      onPress={() => props.favorite ? console.log("already favorite") : props.onPressFavorite()} />
    <Icon
      raised
      reverse
      name={"pencil"}
      type="font-awesome"
      color="#4a89dc"
      onPress={() => props.onPressEdit()} />
  </View>


</Card>;


class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      showModal: false
    })
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }
  render() {
    const dishId = this.props.navigation.state.params.dishId;
    return (
      <ScrollView>
        <EditModal
          dishId={dishId}
          postComment={this.props.postComment}
          toggleModal={this.toggleModal}
          showModal={this.state.showModal} />

        <View style={{ marginBottom: 15 }}>
          <Animatable.View animation="fadeInDown" duration={1500} delay={900}>

            <Dish dish={this.props.dishes[dishId]}
              favorite={this.props.favorites.some(el => el === dishId)}
              onPressFavorite={() => this.props.postFavorite(dishId)}
              onPressEdit={this.toggleModal}
            />
          </Animatable.View>

          <Animatable.View animation="fadeInUp" duration={1500} delay={900}>
            <Comments comments={this.props.comments.filter((comment) => comment.dishId === dishId)} />
          </Animatable.View>
        </View>
      </ScrollView>
    )
  }
}
DishDetail.propTypes = {
  dishes: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired,
  postFavorite: PropTypes.func.isRequired,
  postComment: PropTypes.func.isRequired,
}


export default DishDetail;