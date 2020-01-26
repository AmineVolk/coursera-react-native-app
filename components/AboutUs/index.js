import React, { Component } from 'react'
import { Text, View, ScrollView } from "react-native";
import { Card, Divider } from "react-native-elements";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import styles from "./Styles"
import PropTypes from 'prop-types'
import Loading from "../LoadingComponent"
class AboutUs extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        title: "About",
    }

    render() {
        const History = () => <Card>
            <View>
                <Text style={styles.textTitle}>Our History</Text>
            </View>
            <Divider style={styles.divider} />
            <View>
                <Text style={styles.text}>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</Text>
                <Text style={styles.text}>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</Text>
            </View>
        </Card>
        const LeaderItem = ({ item, index }) => {
            return (
                <View >
                    <ListItem
                        title={item.name}
                        subtitle={item.description}
                        hideChevron={true}
                        //onPress={() => navigate("Dishdetail", { dishId: item.id })}
                        leftAvatar={{ source: { uri: item.image } }}
                    />
                    <Divider style={styles.divider} />
                </View>

            );
        };
        if (this.props.isLeadersLoading) {
            return (
                <ScrollView>
                    <History />
                    <Card>
                        <Loading />
                    </Card>
                </ScrollView>
            );
        } else if (this.props.errMess) {
            <ScrollView>
                <History />
                <Card>
                    <Text>{this.props.leaders.errMess}</Text>

                </Card>
            </ScrollView>
        }
        else {
            return (
                <ScrollView style={{ flex: 1 }}>
                    <History />
                    <View style={{ marginBottom: 15 }}>
                        <Card style={{ backgroundColor: "red" }}>
                            <View>
                                <Text style={styles.textTitle}>Corporate Leadership</Text>
                            </View>
                            <Divider style={styles.divider} />
                            <FlatList

                                data={this.props.leaders}
                                renderItem={LeaderItem}
                                keyExtractor={item => item.id.toString()}
                            />
                        </Card>
                    </View>

                </ScrollView>
            )
        }
    }
}
AboutUs.propTypes = {
    leaders: PropTypes.array.isRequired,
    isLeadersLoading: PropTypes.bool.isRequired
}
export default AboutUs;