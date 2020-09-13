import React, { Component } from "react";
import themes from "../../res/theme.style";
import styles from "./style";
import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Alert,
} from "react-native";
import { Card, Icon, Input, CheckBox } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as SecureStore from "expo-secure-store";
import { Avatar } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      remember: false,
      imageUrl: "https://i.ibb.co/QjXTrp2/buffet2.jpg",
    };
  }
  static navigationOptions = {
    title: "Register",
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name="user-plus"
        type="font-awesome"
        size={24}
        iconStyle={{ color: tintColor }}
      />
    ),
  };
  componentDidMount() {
    SecureStore.getItemAsync("userinfo").then((userdata) => {
      let userinfo = JSON.parse(userdata);
      if (userinfo) {
        this.setState({ username: userinfo.username });
        this.setState({ firstname: userinfo.firstname });
        this.setState({ lastname: userinfo.lastname });
        this.setState({ email: userinfo.email });
        this.setState({ imageUrl: userinfo.imageUrl });
        this.setState({ password: userinfo.password });
        this.setState({ remember: true });
      }
    });
  }
  getImageFromCamera = async () => {
    const cameraPermisions = await Permissions.getAsync(Permissions.CAMERA);
    const cameraRollPermission = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    if (
      cameraPermisions.status === "granted" &&
      cameraRollPermission.status === "granted"
    ) {
      let capturedImage = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
      if (!capturedImage.cancelled) {
        this.setState({ imageUrl: capturedImage.uri });
      }
    }
  };
  getImageFromGalery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ imageUrl: result.uri });
    }
  };
  onPressAvatar = () => {
    Alert.alert(
      "Add avatar",
      `Take a photo or choose one from your galery`,
      [
        {
          text: "Camera",
          onPress: () => this.getImageFromCamera(),
          style: "cancel",
        },
        {
          text: "Galery",
          onPress: () => this.getImageFromGalery(),
        },
      ],
      { cancelable: true }
    );
  };
  handleRegister = () => {
    if (this.state.remember) {
      SecureStore.setItemAsync(
        "userinfo",
        JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          imageUrl: this.state.imageUrl,
        })
      ).catch((error) => console.log("Could not save user info", error));
    } else {
      SecureStore.deleteItemAsync("userinfo").catch((error) =>
        console.log("Could not delete user info", error)
      );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Card containerStyle={themes.card}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingBottom: 30,
            }}
          >
            <Avatar
              size={100}
              icon={{ name: "rocket", color: "orange", type: "font-awesome" }}
              rounded
              source={{
                uri: this.state.imageUrl,
              }}
              showEditButton
              onPress={this.onPressAvatar}
            />
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
          <Input
            placeholder="Firstname"
            leftIcon={{
              type: "font-awesome",
              name: "user-o",
              color: "#52565a",
            }}
            onChangeText={(firstname) => this.setState({ firstname })}
            value={this.state.firstname}
            containerStyle={styles.formInput}
            inputStyle={{ paddingLeft: 10, color: themes.PRIMARY_TEXT }}
          />
          <Input
            placeholder="Lastname"
            leftIcon={{
              type: "font-awesome",
              name: "user-o",
              color: "#52565a",
            }}
            onChangeText={(lastname) => this.setState({ lastname })}
            value={this.state.lastname}
            containerStyle={styles.formInput}
            inputStyle={{ paddingLeft: 10, color: themes.PRIMARY_TEXT }}
          />
          <Input
            placeholder="Email"
            leftIcon={{ type: "material", name: "email", color: "#52565a" }}
            onChangeText={(email) => this.setState({ email })}
            value={this.state.email}
            containerStyle={styles.formInput}
            inputStyle={{ paddingLeft: 10, color: themes.PRIMARY_TEXT }}
          />

          <TouchableNativeFeedback
            onPress={() => this.handleRegister()}
            background={TouchableNativeFeedback.SelectableBackground()}
          >
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
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Register
              </Text>
            </LinearGradient>
          </TouchableNativeFeedback>
        </Card>
      </View>
    );
  }
}
