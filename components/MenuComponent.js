import { Component, default as React } from "react";
import { FlatList, View } from "react-native";
import { ListItem, Divider } from "react-native-elements";
import { DISHES } from "../shared/dishes";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  }
  static navigationOptions = {
    title: "Menu"
  }

  render() {
    const renderMenuItem = ({ item, index }) => {
      return (
        <View>
          <ListItem
            title={item.name}
            subtitle={item.description}
            hideChevron={true}
            onPress={() => navigate("Dishdetail", { dishId: item.id })}
            leftAvatar={{ source: item.image }}
          />
          <Divider style={{
            backgroundColor: '#a1a1a1',
          }} />
        </View>

      );
    };
    const { navigate } = this.props.navigation;
    return (
      <FlatList
        data={this.state.dishes}
        renderItem={renderMenuItem}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}
