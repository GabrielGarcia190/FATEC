import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from "../screens/Login";
import { Home } from "../screens/Home";
// import { InitialScreen } from "../screens/InitialScreen";

const { Navigator, Screen }  = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer >
     <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="Login"
                component={Login}
            />
            {/* <Screen
                name="Apresentation"
                component={InitialScreen}
            /> */}
        </Navigator >
    </NavigationContainer>
  );
}
