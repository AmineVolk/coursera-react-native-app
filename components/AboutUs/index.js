import React, { Component } from 'react'
import { Text, View, ScrollView } from "react-native";
import { Card, Divider } from "react-native-elements";
import { FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { LEADERS } from "../../shared/leaders"
import styles from "./Styles"
export default class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leader: LEADERS
        }
    }
    static navigationOptions = {
        title: "About"
    }

    render() {
        const LeaderItem = ({ item, index }) => {
            return (
                <View>
                    <ListItem
                        title={item.name}
                        subtitle={item.description}
                        hideChevron={true}
                        //onPress={() => navigate("Dishdetail", { dishId: item.id })}
                        leftAvatar={{ source: require("../images/alberto.png") }}
                    />
                    <Divider style={styles.divider} />
                </View>

            );
        };
        return (
            <ScrollView>
                <Card>
                    <View>
                        <Text style={styles.textTitle}>Our History</Text>
                    </View>
                    <Divider style={styles.divider} />
                    <View>
                        <Text style={styles.text}>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</Text>
                        <Text style={styles.text}>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</Text>
                    </View>
                </Card>
                <Card style={{ marginBottom: 10 }}>
                    <View>
                        <Text style={styles.textTitle}>Corporate Leadership</Text>
                    </View>
                    <Divider style={styles.divider} />
                    <View>
                        <FlatList
                            data={this.state.leader}
                            renderItem={LeaderItem}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                </Card>
            </ScrollView>
        )
    }
}
