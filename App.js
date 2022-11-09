import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen.js";
import ToDoList from "./src/screens/ToDo.js";

const navigator = createStackNavigator(
    {
        Home: HomeScreen,
        ToDo: ToDoList,
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "Home",
            headerShown: false,
        },
    }
);

export default createAppContainer(navigator);
