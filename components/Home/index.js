import { Component, default as React } from "react";
import { ScrollView, Text, View } from "react-native";
import { Card } from "react-native-elements";
import PropTypes from "prop-types";
import Loading from "../LoadingComponent";
import theme from "../../res/theme.style";

const RenderItem = (props) => {
  const item = props.item[0];
  if (item != null) {
    return (
      <Card
        containerStyle={theme.card}
        featuredTitle={item.name}
        featuredSubtitle={item.designation}
        image={{ uri: item.image }}
      >
        <Text style={{ margin: 10 }}>{item.description}</Text>
      </Card>
    );
  } else {
    return <View></View>;
  }
};
class Home extends Component {
  constructor() {
    super();
  }
  static navigationOptions = {
    title: "Home",
  };

  render() {
    const { errMess } = this.props;
    if (this.props.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Loading />
        </View>
      );
    } else if (errMess) {
      return (
        <View>
          <Text>{errMess}</Text>
        </View>
      );
    } else {
      return (
        <ScrollView>
          <View style={{ marginBottom: 15 }}>
            <RenderItem
              item={this.props.dishes.filter((dish) => dish.featured)}
            />
            <RenderItem
              item={this.props.promotions.filter((promo) => promo.featured)}
            />
            <RenderItem
              item={this.props.leaders.filter((leader) => leader.featured)}
            />
          </View>
        </ScrollView>
      );
    }
  }
}
Home.propTypes = {
  dishes: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  promotions: PropTypes.array.isRequired,
  leaders: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errMess: PropTypes.object,
};

export default Home;
