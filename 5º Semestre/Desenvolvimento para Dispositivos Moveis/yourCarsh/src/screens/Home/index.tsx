import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Home() {
  return (
    <SafeAreaView className="flex-1 bg-[#05060A] ">
      <View className="flex-col  items-center mt-28">
        <Image
          className="h-44 w-44"
          source={require("../../../assets/Plus.png")}
        />
        <Text className="text-[#938C93]">Em breve ...</Text>
      </View>
      <View className="flex-1 justify-end items-center mb-6">
        <TouchableOpacity className=" w-[94vw] h-14 bg-[#3F64EF] items-center justify-center mt-4 rounded-xl">
          <Text className="font-bold text-md text-white">Em Breve ...</Text>
        </TouchableOpacity>
        <TouchableOpacity  className=" w-[94vw] h-14  bg-[#3F64EF] items-center justify-center mt-4 rounded-xl flex-row">
          <Text className="font-bold text-md text-white">Sair </Text>
          <Image
            className="h-6 w-6 ml-2"
            source={require("../../../assets/ArrowUUpLeft.png")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
