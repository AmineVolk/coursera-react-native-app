import React from "react";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import DishDetail from "./DishDetail";
import Home from "./HomeComponent";
import MenuComponent from "./MenuComponent";
import Contact from "./Contact"
import AboutUs from "./AboutUs"
import theme from "../res/theme.style"
import { Icon } from "react-native-elements"

const customNavigationOptions = ({ navigation }) => ({
    headerStyle: {
        backgroundColor: theme.PRIMARY_COLOR,
        height: 30,
        paddingBottom: 25,
    },
    headerTintColor: theme.HEADER_TINT_COLOR,
    headerTitleStyle: {
        color: theme.HEADER_TITLE_COLOR,
        textAlign: "center",
        flex: 1,
    },
    headerLeft: (<Icon
        name="menu"
        size={24}
        color="white"
        onPress={() => navigation.toggleDrawer()}
    />)
})


const MenuNavigator = createStackNavigator({
    Menu: {
        screen: MenuComponent,
    },
    Dishdetail: { screen: DishDetail },
}, {
    initialRouteName: 'Menu',
    navigationOptions: customNavigationOptions
});

const HomeNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
}, {
    navigationOptions: customNavigationOptions
});

const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact },
}, {
    initialRouteName: 'Contact',
    navigationOptions: customNavigationOptions
});

const AboutUsNavigator = createStackNavigator({
    About: { screen: AboutUs },
}, {
    initialRouteName: 'About',
    navigationOptions: customNavigationOptions
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
    },
    Contact: {
        screen: ContactNavigator,
        navigationOptions: {
            title: "Contact",
            drawerLabel: "Contact"
        }
    },
    About: {
        screen: AboutUsNavigator,
        navigationOptions: {
            title: "About",
            drawerLabel: "About"
        }
    }
}, {
    drawerBackgroundColor: theme.PRIMARY_COLOR
});

export default MainNavigator;
