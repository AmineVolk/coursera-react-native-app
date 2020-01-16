import { Component, default as React } from 'react';
import { ScrollView, Text, View } from "react-native";
import { Card } from 'react-native-elements';
import { DISHES } from "../shared/dishes";
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

const RenderItem = (props) => {
    const item = props.item[0];
    if (item != null) {
        return (<Card featuredTitle={item.name}
            featuredSubtitle={item.designation}
            image={require("./images/uthappizza.png")}
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
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }
    static navigationOptions = {
        title: "Home"
    }
    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.state.dishes.filter(dish => dish.featured)} />
                <RenderItem
                    item={this.state.promotions.filter(promo => promo.featured)} />
                <RenderItem
                    item={this.state.leaders.filter(leader => leader.featured)} />
            </ScrollView>
        )
    }
}
