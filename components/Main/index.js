import React, { Component } from "react";
import { Platform, View } from "react-native";
import MainNavigator from "../MainNavigator";
import PropTypes from 'prop-types'

class MainComponent extends Component {

  componentDidMount() {
    this.props.fetchDishesDispatch();
    this.props.fetchCommentsDispatch();
    this.props.fetchPromosDispatch();
    this.props.fetchLeadersDispatch();
  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight }}>
        <MainNavigator />
      </View>
    );
  }
}
MainComponent.propTypes = {
  fetchDishesDispatch: PropTypes.func.isRequired,
  fetchCommentsDispatch: PropTypes.func.isRequired,
  fetchPromosDispatch: PropTypes.func.isRequired,
  fetchLeadersDispatch: PropTypes.func.isRequired,

}
export default MainComponent;
