import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="auto" hidden={true} />
      <View className="p-4">
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
