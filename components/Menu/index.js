import { Component, default as React } from "react";
import { FlatList, View } from "react-native";
import { ListItem, Divider } from "react-native-elements";
import PropTypes from "prop-types";
import Loading from "../LoadingComponent";
import * as Animatable from "react-native-animatable";

class Menu extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    title: "Menu",
  };

  render() {
    const { navigate } = this.props.navigation;

    const renderMenuItem = ({ item, index }) => {
      return (
        <Animatable.View animation="fadeInRightBig" duration={1500}>
          <View>
            <ListItem
              title={item.name}
              subtitle={item.description}
              hideChevron={true}
              onPress={() => navigate("Dishdetail", { dishId: item.id })}
              leftAvatar={{ source: { uri: item.image } }}
            />
            <Divider
              style={{
                backgroundColor: "#a1a1a1",
              }}
            />
          </View>
        </Animatable.View>
      );
    };
    if (this.props.isLoading) {
      return <Loading />;
    } else if (this.props.errMess) {
      return (
        <View>
          <Text>{props.dishes.errMess}</Text>
        </View>
      );
    } else {
      return (
        <FlatList
          data={this.props.dishes}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.id.toString()}
        />
      );
    }
  }
}
Menu.propTypes = {
  dishes: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Menu;
