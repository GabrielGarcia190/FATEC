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
      <View className="">
         <View className="bg-[#292727] h-16  rounded-t-xl items-center justify-around flex flex-row">
        <TouchableOpacity>
        <Image
            className="h-10 w-10 ml-2"
            source={require("../../../assets/house1.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")} >
        <Image
            className="h-10 w-10 ml-2"
            source={require("../../../assets/chart-bar.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image
            className="h-10 w-10 ml-2"
            source={require("../../../assets/user.png")}
          />
        </TouchableOpacity>  
      </View>
      </View>
    </SafeAreaView>
  );
}