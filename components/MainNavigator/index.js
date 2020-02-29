import React from "react";
import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import DishDetail from "../DishDetail/dishDetailContainer";
import Home from "../Home/homeContainer";
import MenuComponent from "../Menu/menuContainer";
import Contact from "../Contact"
import AboutUs from "../AboutUs/aboutUsContainer"
import theme from "../../res/theme.style"
import { Icon } from "react-native-elements"
import Reservation from "../Reservation"
import CustomDrawer from "./CustomDrawer"
import Favorites from "../Favorite/favoriteContainer"




const customNavigationOptions = ({ navigation }) => ({
    title: navigation.state.routeName,

    headerStyle: {
        backgroundColor: theme.PRIMARY_COLOR,
        height: 30,
        paddingBottom: 25,
    },
    headerTintColor: theme.HEADER_TINT_COLOR,
    headerTitleStyle: {
        color: theme.HEADER_TITLE_COLOR,
    },
    headerLeft: (<Icon
        name="menu"
        size={24}
        color="white"
        onPress={() => navigation.toggleDrawer()}
    />)
})

const FavoritesNavigator = createStackNavigator({
    Favorites: { screen: ({ navigation }) => <Favorites navigation={navigation} />, }
}, {
    initialRouteName: 'Favorites',
    navigationOptions: customNavigationOptions
})

const MenuNavigator = createStackNavigator({
    Menu: {
        screen: ({ navigation }) => <MenuComponent navigation={navigation} />,
    },
    Dishdetail: { screen: ({ navigation }) => <DishDetail navigation={navigation} /> },
}, {
    initialRouteName: 'Menu',
    navigationOptions: customNavigationOptions
});

const HomeNavigator = createStackNavigator({
    Home: {
        screen: ({ navigation }) => <Home navigation={navigation} />
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
    About: { screen: ({ navigation }) => <AboutUs navigation={navigation} /> },
}, {
    initialRouteName: 'About',
    navigationOptions: customNavigationOptions
});
const ReservationNavigator = createStackNavigator({
    Reservation: { screen: Reservation }
}, {
    initialRouteName: 'Reservation',
    navigationOptions: customNavigationOptions
})

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: "Home",
            drawerLabel: "Home",
            drawerIcon: ({ tintColor }) => (
                <Icon name="home"
                    type="font-awesome"
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: "Menu",
            drawerLabel: "Menu",
            drawerIcon: ({ tintColor }) => (
                <Icon name="list"
                    type="font-awesome"
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            title: "Favorites",
            drawerLabel: "Favorites",
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name="heart"
                    type="font-awesome"
                    size={24}
                    color={tintColor}
                />
            )
        }
    },
    Reservation:
    {
        screen: ReservationNavigator,
        navigationOptions: {
            title: 'Reserve Table',
            drawerLabel: 'Reserve Table',
            drawerIcon: ({ tintColor, focused }) => (
                <Icon
                    name='cutlery'
                    type='font-awesome'
                    size={24}
                    iconStyle={{ color: tintColor }}
                />
            ),
        }
    },
    Contact: {
        screen: ContactNavigator,
        navigationOptions: {
            title: "Contact",
            drawerLabel: "Contact",
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name="contacts"
                    type='font-awsome'
                    size={22}
                    color={tintColor}
                />
            )
        }
    },
    About: {
        screen: AboutUsNavigator,
        navigationOptions: {
            title: "About",
            drawerLabel: "About",
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name="info"
                    type="font-awesome"
                    size={24}
                    color={tintColor}
                />
            )
        }
    }
}, {
    drawerBackgroundColor: "white",
    contentComponent: CustomDrawer,
    contentOptions: {
        activeTintColor: theme.PRIMARY_COLOR,

    }
});

export default MainNavigator;
