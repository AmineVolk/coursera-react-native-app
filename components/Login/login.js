import React, { Component } from "react";
import { View, Button, StyleSheet, Text } from "react-native";
import { Card, Icon, Input, CheckBox } from "react-native-elements";
import * as SecureStore from "expo-secure-store";
import styles from "./style";
import themes from "../../res/theme.style";
import { LinearGradient } from "expo-linear-gradient";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      remember: false,
      activeTab: "login",
    };
  }
  static navigationOptions = {
    title: "Login",
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name="sign-in"
        type="font-awesome"
        size={24}
        iconStyle={{ color: tintColor }}
      />
    ),
  };
  handleLogin() {
    console.log(JSON.stringify(this.state));
    if (this.state.remember)
      SecureStore.setItemAsync(
        "userinfo",
        JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        })
      ).catch((error) => console.log("Could not save user info", error));
    else
      SecureStore.deleteItemAsync("userinfo").catch((error) =>
        console.log("Could not delete user info", error)
      );
  }
  componentDidMount() {
    SecureStore.getItemAsync("userinfo").then((userdata) => {
      let userinfo = JSON.parse(userdata);
      if (userinfo) {
        this.setState({ username: userinfo.username });
        this.setState({ password: userinfo.password });
        this.setState({ remember: true });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <View>
            <Icon
              name="account-circle"
              type="material"
              color={themes.PRIMARY_COLOR_LIGTH}
              size={40}
            />
            <Text style={styles.title}>Signin</Text>
          </View>
          <Input
            placeholder="Username"
            leftIcon={{
              type: "font-awesome",
              name: "user-o",
              color: "#52565a",
            }}
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
            containerStyle={styles.formInput}
            inputStyle={{ paddingLeft: 10, color: themes.PRIMARY_TEXT }}
          />
          <Input
            placeholder="Password"
            leftIcon={{ type: "font-awesome", name: "key", color: "#52565a" }}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
            containerStyle={styles.formInput}
            inputStyle={{ paddingLeft: 10, color: themes.PRIMARY_TEXT }}
            secureTextEntry={true}
          />
          <CheckBox
            title="Remember Me"
            center
            checked={this.state.remember}
            onPress={() => this.setState({ remember: !this.state.remember })}
            containerStyle={styles.formCheckbox}
            checkedColor={themes.PRIMARY_COLOR}
          />
          <LinearGradient
            colors={["#ffac00", "#FFBC10", "#FFCC20"]}
            start={[0, 1]}
            end={[1, 0]}
            style={{
              padding: 10,
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
          </LinearGradient>
        </Card>
      </View>
    );
  }
}
