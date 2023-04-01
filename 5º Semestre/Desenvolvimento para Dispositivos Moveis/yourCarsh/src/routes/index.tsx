import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import { Home } from "../screens/Home";
import InitialScreen from "../screens/InitialScreen";
import { Dashboard } from "../screens/Dashboard";
import { ProfileScreen } from "../screens/ProfileScreen";
import { NavigationBar } from "../components/NavigationBar";
import { TransitionSpecs } from "@react-navigation/stack";
import { SignUp } from "../screens/SignUp";
const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animationTypeForReplace: "pop",
          animation: "fade",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            animation: "fade",
          }}
        />
        <Stack.Screen name="Apresentation" component={InitialScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Navigat" component={NavigationBar} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
