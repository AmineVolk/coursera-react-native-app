import React from "react";
import { View, StatusBar } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";
const CustomStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
CustomStatusBar.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};
export default CustomStatusBar;
