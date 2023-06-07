import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationBar } from "../../components/NavigationBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductManager } from "../../components/InsertProducts";
import { Pencil, ListDashes, Plus, ChartLineUp } from "phosphor-react-native";

async function edit() {
  alert("Nenhuma despesa selecionada");
}

export default function InitialScreen({ navigation }: any) {
  return (
    <SafeAreaView className="flex-1 bg-[#05060A]">
      <View className="flex-1 justify-end h-full w-full">
        <Image
          className="w-80 h-80 ml-2"
          source={require("../../../assets/background2.png")}
        />
        <ProductManager />
      </View>
      <View>
        <View className="bg-[#292727] h-16  rounded-t-xl items-center justify-around flex flex-row">
          <TouchableOpacity>
            <View className="ml-2">
              <Plus size={32} color="gray" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("List")}>
            <View className="ml-2">
              <ListDashes size={32} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("api")}>
            <View className="ml-2">
              <ChartLineUp size={32} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
