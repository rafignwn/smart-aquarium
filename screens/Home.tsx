import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../utils/types";
import SafeAreaView from "react-native-safe-area-view";
import logo from "./../assets/koi-fish.png";
import rumput from "./../assets/reef.png";

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView>
      <View className="p-5 h-full bg-blue-500 relative">
        <Text className="mt-10 text-center text-white font-bold text-xl">
          Monitoring dan Control Smart Aquarium Ikan Koki Menggunakan Teknologi
          Internet of Things (IoT)
        </Text>

        <View className="flex items-center">
          <Image
            className="h-32 my-8"
            resizeMode="contain"
            source={logo}
          ></Image>
        </View>

        <View className="h-full">
          <View>
            <Text className="mb-5 font-semibold text-gray-100 uppercase text-base">
              Menu
            </Text>

            <View className="flex flex-row gap-5">
              <TouchableOpacity
                onPress={() => navigation.navigate("Monitoring")}
                activeOpacity={0.8}
                className="flex-1 h-16 rounded-lg flex justify-center bg-amber-400"
              >
                <Text className="text-white uppercase text-center font-bold text-xl">
                  Monitoring
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("About")}
                activeOpacity={0.8}
                className="flex-1 h-16 rounded-lg flex justify-center bg-sky-300"
              >
                <Text className="text-white uppercase text-center font-bold text-xl">
                  About
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* dekorasi */}
        <View className="absolute flex items-center bottom-24 -right-12 w-full h-40">
          <Image className="w-3/4" resizeMode="contain" source={rumput}></Image>
        </View>
      </View>
    </SafeAreaView>
  );
}
