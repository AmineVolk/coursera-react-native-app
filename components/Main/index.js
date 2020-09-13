import React, { Component } from "react";
import { Platform, StyleSheet, View, ToastAndroid } from "react-native";
import MainNavigator from "../MainNavigator";
import PropTypes from "prop-types";
import NetInfo from "@react-native-community/netinfo";
import ErrorBoundary from "../ErrorBoundary";

class MainComponent extends Component {
  componentDidMount() {
    this.props.fetchDishesDispatch();
    this.props.fetchCommentsDispatch();
    this.props.fetchPromosDispatch();
    this.props.fetchLeadersDispatch();

    NetInfo.fetch().then((connectionInfo) => {
      ToastAndroid.show(
        "Initial Network Connectivity Type: " +
          connectionInfo.type +
          ", effectiveType: " +
          connectionInfo.effectiveType,
        ToastAndroid.LONG
      );
    });

    unsubscribe = NetInfo.addEventListener(this.handleConnectivityChange);
  }
  componentWillUnmount() {
    unsubscribe();
  }

  handleConnectivityChange = (connectionInfo) => {
    switch (connectionInfo.type) {
      case "none":
        ToastAndroid.show("Your are now offline !", ToastAndroid.LONG);
        break;
      case "wifi":
        ToastAndroid.show(
          "Your are now connected to wifi !",
          ToastAndroid.LONG
        );
        break;
      case "celular":
        ToastAndroid.show(
          "Your are now connected to celular !",
          ToastAndroid.LONG
        );
        break;
      case "uknown":
        ToastAndroid.show("Your have uknown connection !", ToastAndroid.LONG);
        break;
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ErrorBoundary>
          <MainNavigator />
        </ErrorBoundary>
      </View>
    );
  }
}
MainComponent.propTypes = {
  fetchDishesDispatch: PropTypes.func.isRequired,
  fetchCommentsDispatch: PropTypes.func.isRequired,
  fetchPromosDispatch: PropTypes.func.isRequired,
  fetchLeadersDispatch: PropTypes.func.isRequired,
};
export default MainComponent;
