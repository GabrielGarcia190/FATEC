import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-[#D9CCCC]">
      <StatusBar style="auto" hidden={false} />
      <View className="p-4 ">

        <Image />

        <Text className="font-bold text-lg"> Email:</Text>
        <TextInput
          className="h-12 rounded-lg w-full border p-2 items-center"
          placeholder="exemplo@gmail.com"
        />
      </View>
      <View className="p-4">
        <Text className="font-bold text-lg">
          Senha:
        </Text>
        <TextInput
          secureTextEntry={true}
          className="h-12 rounded-lg w-full border p-2 items-center"
          placeholder="***********"
        />
      </View>
      <View>
        <TouchableOpacity className="bg-blue-500 p-2 rounded-lg m-4">
          <Text className="text-white text-center">Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
