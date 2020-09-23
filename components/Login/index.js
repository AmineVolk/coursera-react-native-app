import themes from "../../res/theme.style";
import LoginComponent from "./login";
import Register from "./register";
import { createBottomTabNavigator } from "react-navigation-tabs";
const BottomTabs = createBottomTabNavigator(
  {
    Login: LoginComponent,
    Register: Register,
  },
  {
    tabBarOptions: {
      activeBackgroundColor: "#ffffff",
      inactiveBackgroundColor: "#ffffff",
      activeTintColor: themes.PRIMARY_COLOR,
      inactiveTintColor: "grey",
    },
  }
);
export default BottomTabs;
