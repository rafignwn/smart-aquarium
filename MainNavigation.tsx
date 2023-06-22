import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StackParamList } from "./utils/types";
import Login from "./screens/Login";
import Home from "./screens/Home";
import colors from "tailwindcss/colors";
import Monitoring from "./screens/Monitoring";
import About from "./screens/About";

export default function MainNavigation() {
  // create Screen container
  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen component={Login} name="Login" />
        <Stack.Screen
          options={{
            title: "Halaman Home",
            headerShown: false,
            statusBarColor: colors.blue[500],
          }}
          initialParams={{
            email: "example@gmail.com",
            username: "username",
            name: "name",
          }}
          component={Home}
          name="Home"
        />
        <Stack.Screen
          options={{
            headerShown: false,
            statusBarStyle: "dark",
            statusBarColor: colors.sky[50],
            animation: "slide_from_left",
          }}
          component={Monitoring}
          name="Monitoring"
        />
        <Stack.Screen
          options={{
            headerShown: false,
            animation: "slide_from_right",
            statusBarColor: colors.sky[500],
          }}
          component={About}
          name="About"
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
