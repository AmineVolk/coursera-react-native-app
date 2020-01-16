import React, { Component } from "react";
import { Platform, View } from "react-native";
import MenuNavigator from "./MenuNavigator";
class MainComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight }}>
        <MenuNavigator />
      </View>
    );
  }
}
export default MainComponent;
