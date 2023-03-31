import React from "react";
import { View , Text, TouchableOpacity, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";

export function ProfileScreen({navigation}:any) {
  return (
    <SafeAreaView className="flex-1 bg-[#05060A]">
    <View className="flex-1 items-center justify-center">
      <Text className="text-white text-7xl">PROFILE</Text>
    </View>
    <View className="">
         <View className="bg-[#292727] h-16 rounded-t-xl items-center justify-around flex flex-row">
        <TouchableOpacity onPress={() => navigation.navigate('Apresentation')}>
        <Image
            className="h-10 w-10 ml-2"
            source={require("../../../assets/house.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
        <Image
            className="h-10 w-10 ml-2"
            source={require("../../../assets/chart-bar.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
            className="h-10 w-10 ml-2"
            source={require("../../../assets/user1.png")}
          />
        </TouchableOpacity>  
      </View>
      </View>
  </SafeAreaView>
  );
}
