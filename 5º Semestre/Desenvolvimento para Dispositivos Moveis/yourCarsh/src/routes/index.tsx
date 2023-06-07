import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import { Home } from "../screens/Home";
import InitialScreen from "../screens/InitialScreen";
import { ListProducts } from "../screens/ListProducts";
import { ProfileScreen } from "../screens/ProfileScreen";
import { NavigationBar } from "../components/NavigationBar";
import { TransitionSpecs } from "@react-navigation/stack";
import { SignUp } from "../screens/SignUp";
import { ConsultaAPI } from "../screens/consultaAPI/consultaAPI";
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
        <Stack.Screen name="Add" component={InitialScreen} />
        <Stack.Screen name="List" component={ListProducts} />
        <Stack.Screen name="Edit" component={ProfileScreen} />
        <Stack.Screen name="Navigat" component={NavigationBar} />
        <Stack.Screen name="api" component={ConsultaAPI} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
