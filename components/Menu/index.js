import { Component, default as React } from "react";
import { FlatList, View } from "react-native";
import { ListItem, Divider } from "react-native-elements";
import PropTypes from 'prop-types'

class Menu extends Component {
  constructor(props) {
    super(props);

  }
  static navigationOptions = {
    title: "Menu"
  }

  render() {
    const { navigate } = this.props.navigation;

    const renderMenuItem = ({ item, index }) => {
      return (
        <View>
          <ListItem
            title={item.name}
            subtitle={item.description}
            hideChevron={true}
            onPress={() => navigate("Dishdetail", { dishId: item.id })}
            leftAvatar={{ source: { uri: item.image } }}
          />
          <Divider style={{
            backgroundColor: '#a1a1a1',
          }} />
        </View>

      );
    };
    return (
      <FlatList
        data={this.props.dishes}
        renderItem={renderMenuItem}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}
Menu.propTypes = {
  dishes: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
}

export default Menu;
