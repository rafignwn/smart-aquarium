import { SafeAreaView, Text, View, ScrollView } from "react-native";

export default function About() {
  return (
    <View className="p-5 bg-sky-500 h-full">
      <SafeAreaView className="relative h-full">
        <Text className="text-xl font-bold">
          Tentang Aplikasi Smart Aquarium!
        </Text>
        <ScrollView className="mt-5">
          <Text className="text-justify text-base">
            Aplikasi Smart Aquarium adalah solusi inovatif yang dirancang khusus
            untuk memudahkan Anda dalam mengelola dan memantau Aquarium Anda
            secara efisien. Dengan integrasi teknologi terkini, aplikasi ini
            memberikan kontrol penuh atas suhu dan kekeruhan air, serta
            memberikan kemampuan untuk memberikan pakan secara otomatis kepada
            ikan peliharaan Anda.
          </Text>
          <Text className="text-justify text-base mt-5">
            Untuk memberikan keandalan dan keamanan data, aplikasi Smart
            Aquarium terhubung dengan Firebase, sebuah platform yang menyediakan
            penyimpanan dan sinkronisasi data secara real-time.
          </Text>
          <Text className="text-justify text-base mt-5">
            Aplikasi Smart Aquarium dibangun menggunakan teknologi React Native,
            yang memungkinkan aplikasi ini berjalan dengan lancar dan kompatibel
            dengan berbagai perangkat mobile. Dengan antarmuka yang intuitif dan
            responsif, penggunaan aplikasi ini menjadi lebih mudah dan
            menyenangkan.
          </Text>
        </ScrollView>
        <View className="absolute bottom-0">
          <Text className="text-lg">Oleh : </Text>
          <Text className="text-lg font-semibold">
            Ardy Kusuma Wijaya - 20041019
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
