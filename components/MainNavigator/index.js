import React from "react";
import { createDrawerNavigator, createStackNavigator, DrawerItems, SafeAreaView } from "react-navigation";
import DishDetail from "../DishDetail/dishDetailContainer";
import Home from "../Home/homeContainer";
import MenuComponent from "../Menu/menuContainer";
import Contact from "../Contact"
import AboutUs from "../AboutUs/aboutUsContainer"
import theme from "../../res/theme.style"
import { Icon } from "react-native-elements"
import { Image, ScrollView, Text, View } from "react-native"
import styles from "./styles"
const customNavigationOptions = ({ navigation }) => ({
    headerStyle: {
        backgroundColor: theme.PRIMARY_COLOR,
        height: 30,
        paddingBottom: 25,
    },
    headerTintColor: theme.HEADER_TINT_COLOR,
    headerTitleStyle: {
        color: theme.HEADER_TITLE_COLOR,
        // textAlign: "center",
        // flex: 1,
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

const customDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: "never" }} >
            <View style={styles.drawerHeader}>
                <View style={{ flex: 1 }}>
                    <Image source={require("../images/logo.png")}
                        style={styles.drawerImage}
                    />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.drawerHeaderText}>Ristorent Confusion</Text>
                </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
)

const MainNavigator = createDrawerNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: "Home",
            drawerLabel: "Home",
            drawerIcon: ({ tintColor }) => (
                <Icon name="home"
                    type="font-awsome"
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
                    type="font-awsome"
                    size={24}
                    color={tintColor}
                />
            )
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
                    type="font-awsome"
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
                    type="font-awsome"
                    size={24}
                    color={tintColor}
                />
            )
        }
    }
}, {
    drawerBackgroundColor: "white",
    contentComponent: customDrawerContentComponent,
    contentOptions: {
        activeTintColor: theme.PRIMARY_COLOR,

    }
});

export default MainNavigator;
