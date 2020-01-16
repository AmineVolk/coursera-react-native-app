import React, { Component } from "react";
import { Platform, View } from "react-native";
import MainNavigator from "./MainNavigator";
class MainComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight }}>
        <MainNavigator />
      </View>
    );
  }
}
export default MainComponent;
