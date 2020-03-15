import { Component, default as React } from 'react';
import { Text, View, ScrollView, Alert, PanResponder, Share } from "react-native";
import { Card, Icon } from "react-native-elements";
import Comments from "./comments"
import PropTypes from 'prop-types'
import EditModal from "./EditModal"
import * as Animatable from "react-native-animatable"
import theme from "../../res/theme.style"
const recognizeDragRightToLeft = ({ moveX, moveY, dx, dy }) => {
  if (dx < -200) {
    return true;
  }
  return false;
}
const recognizeDragLeftToRigth = ({ moveX, moveY, dx, dy }) => {
  if (dx > 250) {
    return true;
  }
  return false;
}
const shareDish = (title, message) => {
  Share.share({
    title: title,
    message: `${title} + : ${message}`
  }, {
    dialogTitle: `Share ${title}`
  })

}

const Dish = (props) => {
  const handleViewRef = (ref) => this.myRef = ref;
  const panResonder = PanResponder.create({
    onStartShouldSetPanResponder: (e, gestureState) => {
      return true;
    },
    onPanResponderGrant: () => {
      this.myRef.rubberBand(1000).then(endState => console.log(endState.finished ? "finished" : "cancelled"))
    },
    onPanResponderEnd: (e, gestureState) => {
      if (recognizeDragRightToLeft(gestureState)) {
        Alert.alert('Add Favorite', 'Are you sure you wish to add to favorite ?',
          [{ text: 'Cancel', onPress: () => console.log("cancel add favorite"), style: "cancel" },
          {
            text: "OK", onPress: () => {
              props.favorite ? console.log("Already Favorite") : props.onPressFavorite()
            }
          }
          ],
          { cancelable: false }
        )
        return true;
      }
      else if (recognizeDragLeftToRigth(gestureState)) {
        setTimeout(() => {
          props.onPressEdit();
          return true;
        }, 500)

      }
    }
  })
  return <Animatable.View animation="fadeInDown" duration={1500} delay={500}
    ref={handleViewRef}
    {...panResonder.panHandlers}>
    <Card
      featuredTitle={props.dish.name}
      image={{ uri: props.dish.image }}
      containerStyle={theme.card}
    >
      <Text style={{ margin: 10 }}>{props.dish.description}</Text>
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Icon
          raised
          reverse
          name={"share"}
          type="font-awesome"
          color="#4a89dc"
          onPress={() => shareDish(props.dish.name, props.dish.description)} />
        <Icon
          raised
          reverse
          name={props.favorite ? "heart" : "heart-o"}
          type="font-awesome"
          color={theme.PRIMARY_COLOR}
          onPress={() => props.favorite ? console.log("already favorite") : props.onPressFavorite()} />
        <Icon
          raised
          reverse
          name={"pencil"}
          type="font-awesome"
          color={theme.SECONDARY_COLOR}
          onPress={() => props.onPressEdit()} />
      </View>
    </Card>
  </Animatable.View>
}


  ;

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

          <Dish dish={this.props.dishes[dishId]}
            favorite={this.props.favorites.some(el => el === dishId)}
            onPressFavorite={() => this.props.postFavorite(dishId)}
            onPressEdit={this.toggleModal}
          />

          <Animatable.View animation="fadeInUp" duration={1500} delay={500}>
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