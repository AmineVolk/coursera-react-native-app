import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";
import { DrawerItems } from "react-navigation-drawer";
import { LinearGradient } from "expo-linear-gradient";
import * as SecureStore from "expo-secure-store";
import { Avatar } from "react-native-elements";
import styles from "./styles";

export default class CustomDrawer extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "Ristorent Confusion",
      email: "email@gmail.com",
      imageUrl: "../images/logo.png",
    };
  }
  componentDidMount() {
    SecureStore.getItemAsync("userinfo").then((userdata) => {
      let userinfo = JSON.parse(userdata);
      if (userinfo) {
        this.setState({ username: userinfo.username });
        this.setState({ email: userinfo.email });
        this.setState({ imageUrl: userinfo.imageUrl });
      }
    });
  }
  render() {
    return (
      <ScrollView>
        <LinearGradient
          colors={["#ffac00", "#FFBC10", "#FFCC20"]}
          start={[0, 1]}
          end={[1, 0]}
          style={{
            paddingVertical: 25,
            paddingLeft: 20,
            alignItems: "flex-start",
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }}>
            <Avatar
              size={70}
              rounded
              source={{
                uri: this.state.imageUrl,
              }}
            />
          </View>
          <View style={{ flex: 2, marginTop: 5 }}>
            <Text style={styles.drawerHeaderText}>{this.state.username}</Text>
            <Text style={{ fontSize: 13, color: "white" }}>
              @{this.state.email}
            </Text>
          </View>
        </LinearGradient>

        <DrawerItems {...this.props} />
      </ScrollView>
    );
  }
}
