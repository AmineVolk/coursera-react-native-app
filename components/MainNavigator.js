import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import DishDetail from "./DishDetailComponent";
import Home from "./HomeComponent";
import MenuComponent from "./MenuComponent";
import Contact from "./Contact"
import AboutUs from "./AboutUs"

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

const ContactNavigator = createStackNavigator({
    Contact: { screen: Contact },
}, {
    initialRouteName: 'Contact',
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

const AboutUsNavigator = createStackNavigator({
    About: { screen: AboutUs },
}, {
    initialRouteName: 'About',
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
    drawerBackgroundColor: "#2a73cc"
});

export default MainNavigator;
