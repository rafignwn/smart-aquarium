import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { RouteProp } from "@react-navigation/native";

type StackParamList = {
  Login: undefined;
  Home: { username: string; name: string; email: string };
  Monitoring: undefined;
  About: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  "Login"
>;
type HomeScreenNavigationProp = NativeStackNavigationProp<
  StackParamList,
  "Home"
>;

type LoginScreenRouteProp = RouteProp<StackParamList, "Login">;
type HomeScreenRouteProp = RouteProp<StackParamList, "Home">;

export {
  LoginScreenNavigationProp,
  LoginScreenRouteProp,
  HomeScreenNavigationProp,
  HomeScreenRouteProp,
  StackParamList,
};
