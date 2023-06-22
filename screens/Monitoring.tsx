import { Text, TouchableOpacity, View, Image } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import logo from "./../assets/fish-tank.png";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { onValue, ref, set } from "firebase/database";
import { useNavigation } from "@react-navigation/native";

export default function Monitoring() {
  const [temperature, setTemperature] = useState<number>(0);
  const [turbidity, setTurbidity] = useState<number>(0);
  const navigation = useNavigation();
  const [feedLoading, setFeedLoading] = useState<boolean>(false);

  useEffect(() => {
    const unsubTemperature = onValue(
      ref(db, "suhu-air"),
      (snapshot) => {
        const value = snapshot.val();

        if (value) {
          setTemperature(value);
        }
      },
      (error) => {
        console.log("Terjadi Error :", error);
      }
    );

    const unsubTurbidity = onValue(
      ref(db, "kekeruhan-air"),
      (snapshot) => {
        const value = snapshot.val();

        if (value) {
          setTurbidity(value);
        }
      },
      (error) => {
        console.log("Terjadi Error :", error);
      }
    );

    const unsubFeed = onValue(
      ref(db, "kondisi/beri-pakan"),
      (snapshot) => {
        const value = snapshot.val();

        console.log(value);
        if (value == 0) {
          setFeedLoading(false);
        } else {
          setFeedLoading(true);
        }
      },
      (error) => {
        console.log("Firebase Error : ", error);
      }
    );

    return () => {
      unsubTurbidity();
      unsubTemperature();
      unsubFeed();
    };
  }, []);

  async function handleFeed() {
    try {
      setFeedLoading(true);
      await set(ref(db, "kondisi/beri-pakan"), 1);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView>
      <View className="h-full bg-sky-50 p-5 relative">
        {/* judul halaman */}
        <Text className="font-bold text-2xl text-center text-sky-700">
          Monitoring Smart Aquarium
        </Text>

        <View className="flex items-center">
          <Image
            className="mt-8 w-1/2 h-28 object-contain"
            source={logo}
          ></Image>
        </View>

        {/* content halaman */}
        <View className="w-full h-full mt-8">
          {/* kondisi air akuarium */}
          <View className="relative">
            <View className="bg-sky-300 w-8 h-10 absolute top-10 left-16 border-x border-yellow-500"></View>
            <View className="bg-amber-300 w-8 h-10 absolute top-10 right-16 border-x border-yellow-500"></View>
            <Text className="mb-5 text-xl border border-yellow-500 font-bold text-amber-500 bg-sky-200 text-center py-2 rounded-lg">
              KONDISI AIR AQUARIUM
            </Text>
            <View className="flex flex-row gap-5">
              <View className="bg-sky-300 flex-1 rounded-lg p-5">
                <Text className="text-xl rounded-md bg-white text-sky-500 uppercase text-center">
                  Suhu Air
                </Text>
                <Text className="mt-4 rounded-md bg-sky-100 px-4 py-2 font-bold text-2xl text-sky-700 text-center">
                  {temperature}°C
                </Text>
              </View>

              <View className="bg-amber-300 flex-1 rounded-lg p-5">
                <Text className="text-xl rounded-md bg-white text-amber-500 uppercase text-center">
                  Kekeruhan
                </Text>
                <Text className="mt-4 rounded-md bg-amber-100 px-4 py-2 font-bold text-2xl text-amber-700 text-center">
                  {turbidity}%
                </Text>
              </View>
            </View>
          </View>
          {/* end kondisi air akuarium */}

          <View className="mt-10 border-2 bg-white flex items-center justify-center border-amber-200 p-8">
            <Text className="font-bold py-2 rounded-lg text-sky-500 uppercase text-xl text-center">
              Kontrol Pakan Ikan
            </Text>

            <View className="mt-4">
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleFeed}
                disabled={feedLoading}
                className={`${
                  feedLoading ? "bg-yellow-300" : "bg-sky-300"
                } w-full py-2 px-6 rounded-lg`}
              >
                <Text
                  className={`${
                    feedLoading ? "text-yellow-800" : "text-sky-800"
                  } font-bold text-base rounded uppercase`}
                >
                  {feedLoading ? "Sedang Memberi Pakan..." : "Beri Pakan Ikan"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* back button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute bottom-5 left-5 rounded-lg bg-amber-50 px-6 py-2"
        >
          <Text className="text-base uppercase text-amber-500 font-semibold">
            Kembali
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
