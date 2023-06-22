import { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <View className="bg-red-500 h-full flex justify-center items-center">
      <Text>Halaman Home</Text>
      {/* <Text>Email : {params?.email}</Text> */}
      {/* <Text>Temperature : {temperature}</Text> */}
      <TouchableOpacity onPress={() => setCount((prev) => prev + 1)}>
        <Text>Counter : {count}</Text>
      </TouchableOpacity>
    </View>
  );
}
