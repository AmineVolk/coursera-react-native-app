import { createStackNavigator } from "react-navigation";
import DishDetail from "./DishDetailComponent";
import MenuComponent from "./MenuComponent";

const MenuNavigator = createStackNavigator({
    Menu: { screen: MenuComponent },
    Dishdetail: { screen: DishDetail }
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

export default MenuNavigator;
