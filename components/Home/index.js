import { Component, default as React } from 'react';
import { ScrollView, Text, View, StatusBar } from "react-native";
import { Card } from 'react-native-elements';

const RenderItem = (props) => {
    const item = props.item[0];
    if (item != null) {
        return (<Card featuredTitle={item.name}
            featuredSubtitle={item.designation}
            image={{ uri: item.image }}
        >
            <Text style={{ margin: 10 }}>
                {item.description}</Text>
        </Card>);
    } else {
        return (<View></View>);
    }
}
export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        title: "Home",
    }
    render() {
        return (
            <ScrollView >
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <RenderItem
                    item={this.props.dishes.filter(dish => dish.featured)} />
                <RenderItem
                    item={this.props.promotions.filter(promo => promo.featured)} />
                <RenderItem
                    item={this.props.leaders.filter(leader => leader.featured)} />
            </ScrollView>
        )
    }
}
