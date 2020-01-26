import { Component, default as React } from 'react';
import { ScrollView, Text, View, StatusBar } from "react-native";
import { Card } from 'react-native-elements';
import PropTypes from 'prop-types'
import Loading from "../LoadingComponent"

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
class Home extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        if (this.props.isLoading) {
            return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Loading />
            </View>)
        }
        else if (this.props.errMess) {
            return (
                <View>
                    <Text>{this.props.erreMess}</Text>
                </View>
            );
        }
        else {
            return (
                <View style={{ flex: 1 }}>
                    <ScrollView >
                        <View style={{ marginBottom: 15 }}>
                            <RenderItem
                                item={this.props.dishes.filter(dish => dish.featured)} />
                            <RenderItem
                                item={this.props.promotions.filter(promo => promo.featured)} />
                            <RenderItem
                                item={this.props.leaders.filter(leader => leader.featured)} />
                        </View>
                    </ScrollView>
                </View>

            )
        }
    }
}
Home.propTypes = {
    dishes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    promotions: PropTypes.array.isRequired,
    leaders: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default Home;