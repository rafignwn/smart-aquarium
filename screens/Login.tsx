import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LoginScreenNavigationProp } from "../utils/types";

export default function Login() {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <View>
      <Text>Halaman Login</Text>
      <Button
        title="Go to Home"
        onPress={() =>
          navigation.navigate("Home", {
            email: "rafi@gmail.com",
            name: "Rafi gunawan",
            username: "rafignwn",
          })
        }
      />
    </View>
  );
}
