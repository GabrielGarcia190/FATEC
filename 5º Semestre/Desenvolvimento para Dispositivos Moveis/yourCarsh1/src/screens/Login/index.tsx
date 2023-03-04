import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export function Login({ navigation }: any) {
  return (
    <SafeAreaView className="flex-1 bg-[#181818] flex  ">
      <View className=" h-32 w-full items-center mt-10 flex flex-col">
        <Image
          className="w-[97.6] h-[103.6]"
          source={require("../../../assets/logo.png")}
        />
        <Text className="text-white mt-5 text-5xl">
          <Text className="font-light">your</Text>
          <Text className="font-bold">Cash</Text>
        </Text>
      </View>
      <View className="mt-24 ml-11">
        <Text className="text-white font-bold text-3xl">Login</Text>
        <Text className="text-white mt-3">
          Por favor de identifique para continuar
        </Text>
        <TextInput
          keyboardType="email-address"
          className="p-2 w-80 mt-4 rounded-xl bg-[#212121] text-[#5C5867]"
          placeholderTextColor="#5C5867"
          placeholder="exameple@gmail.com"
        />
        <TextInput
          className="p-2 w-80 mt-4 rounded-xl bg-[#212121] text-[#5C5867]  "
          placeholderTextColor="#5C5867"
          placeholder="**********"
        />
        <View className="flex flex-row  mt-6 w-screen pr-24  justify-between">
          <TouchableOpacity className=" bg-[#212121] w-16 h-16 items-center justify-center rounded-full p-2">
            <Image
              className="h-10 w-10"
              source={require("../../../assets/google.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity className=" bg-[#212121] w-16 h-16 items-center justify-center rounded-full p-2">
            <Image
              className="h-8 w-8"
              source={require("../../../assets/discord.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity className=" bg-[#212121] w-16 h-16 items-center justify-center rounded-full p-2">
            <Image
              className="h-8 w-8"
              source={require("../../../assets/git.png")}
            />
          </TouchableOpacity>
        </View>
        <View className="w-80   items-center h-14">
          <TouchableOpacity
            className=" w-[85vw] h-14 bg-[#3F64EF] items-center justify-center mt-4 rounded-xl"
            onPress={() => navigation.navigate("Apresentation")}
          >
            <Text className="font-bold text-md text-white">Fazer Login</Text>
          </TouchableOpacity>
          <Text className="text-[#3F64EF] font-md font-semibold mt-2">
            Esqueceu sua senha?
          </Text>
        </View>
        <View className="mt-36 items-center w-80">
          <Text className="text-[#53505C] fonto-md font-semibold ">
            Não tem conta?
            <Text className="text-[#3F64EF]"> Cadastre-se</Text>
          </Text>
        </View>
      </View>
      <StatusBar style="auto" hidden={true} />
    </SafeAreaView>
  );
}
