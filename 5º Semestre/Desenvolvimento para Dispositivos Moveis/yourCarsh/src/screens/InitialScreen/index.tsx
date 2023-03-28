import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationBar } from "../../components/NavigationBar";
import { SafeAreaView } from "react-native-safe-area-context";

export function InitialScreen({ navigation }: any) {
  return (
    <SafeAreaView className="flex-1 bg-[#05060A]">
      <View className="flex-1 items-center justify-center">
        <Text className="text-white text-7xl">HOME</Text>
      </View>
      <View className="bg-red-500 ">
      <NavigationBar />
      </View>
    </SafeAreaView>
  );
}
