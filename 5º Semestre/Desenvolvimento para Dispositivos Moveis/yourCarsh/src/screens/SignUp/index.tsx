import React from "react";
import { View, Text, TouchableOpacity, Image, Button, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function SignUp({ navigation }: any) {
  return (
    <SafeAreaView className="flex-1 bg-[#05060A] items-center justify-end">
      <View className="bg-[#111113] rounded-t-xl w-full h-4/5 flex flex-col items-center">
        <TextInput placeholder="" showSoftInputOnFocus={false} className="bg-[#222121] rounded-xl w-4/5 h-10 mt-8 p-2"/>
        <Button title="Cadastra-se"/>
      </View>
    </SafeAreaView>
  );
}
