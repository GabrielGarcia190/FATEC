import { useNavigation } from "expo-router";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function InitialScreen() {  
  return (
    <View className="flex-1 bg-[#05060A] flex   ">
      <ImageBackground
        source={require("../../../assets/background.png")}
        defaultSource={require("../../../assets/background.png")}
        className=" w-[390px] h-[600px] bg-[#05060A]/50 object-cover flex justify-end"
      >
        <Text className="text-white  font-bold  text-3xl  pl-4 pt-4">
          {"\n"}Organize {"\n"}e otimize seus rendimentos financeiros
        </Text>
      </ImageBackground>
      <Text className="text-white text-md font-light mt-4 pl-4">
        Faça login ou cadastre-se e comece {"\n"}a organizar sua vida financeira
      </Text>
      <View className="items-center w-4/4">
        <TouchableOpacity  className=" w-[94vw] h-14  bg-[#3F64EF] items-center justify-center mt-20 rounded-xl flex-row">
          <Text className="font-bold text-md text-white">Vamos começar </Text>
          <Image
            className="h-6 w-6 ml-2"
            source={require("../../../assets/ArrowRight.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
