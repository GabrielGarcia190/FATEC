import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import { Home } from "../screens/Home";
import { InitialScreen } from "../screens/InitialScreen";
import { HomeScreen } from "../screens/TabNavBar/HomeScreen";
import { SearchScreen } from "../screens/TabNavBar/SeacrScreen";
import { ProfileScreen } from "../screens/TabNavBar/ProfileScreen";
import { NavigationBar } from "../components/NavigationBar";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Apresentation" component={InitialScreen} />
        <Stack.Screen name="InitialScreen" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
