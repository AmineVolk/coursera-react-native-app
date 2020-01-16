import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import DishDetail from "./DishDetailComponent";
import Home from "./HomeComponent";
import MenuComponent from "./MenuComponent";

const MenuNavigator = createStackNavigator({
    Menu: { screen: MenuComponent },
    Dishdetail: { screen: DishDetail },
}, {
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#2a73cc'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});
const HomeNavigator = createStackNavigator({
    Home: { screen: Home },
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#2a73cc'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: "Home",
            drawerLabel: "Home"
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: "Menu",
            drawerLabel: "Menu"
        }
    }
}, {
    drawerBackgroundColor: "#2a73cc"
});

export default MainNavigator;
