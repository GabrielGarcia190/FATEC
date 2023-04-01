import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, View, TouchableOpacity, Image, StatusBar } from "react-native";
import React, { useState } from "react";

export function ProductManager() {
    const [nome, setNome] = useState("");
    const [marca, setMarca] = useState("");
    const [preco, setPreco] = useState("");
    const [periodo, setPeriodo] = useState("");
    return (
        <SafeAreaView className="w-full h-4/5 bg-[#111113] flex flex-col items-center">

            <Text className="mt-8 font-bold text-xl text-white">
                Cadastro de Despesas
            </Text>

            <View className="w-full items-start ml-20 mt-6 ">
                <Text className="text-[#6F6A6A] font-light">Nome da despesa</Text>
            </View>
            <TextInput
                className="h-10 w-4/5 bg-[#222121] p-2 rounded-md"
                value={nome}
                onChangeText={(text) => setNome(text)}
            />


            <View className="w-full items-start ml-20 mt-6 ">
                <Text className="text-[#6F6A6A] font-light">Descrição da despesa</Text>
            </View>

            <TextInput
                className="h-10 w-4/5 bg-[#222121] p-2 rounded-md"

                value={marca}
                onChangeText={(text) => setMarca(text)}
            />

            <View className="w-full items-start ml-20 mt-6 ">
                <Text className="text-[#6F6A6A] font-light">Periodo</Text>
            </View>

            <TextInput
                className="h-10 w-4/5 bg-[#222121] p-2 rounded-md" value={periodo}
                onChangeText={(text) => setPeriodo(text)}
            />


            <View className="w-full items-start ml-20 mt-6 ">
                <Text className="text-[#6F6A6A] font-light">Valor</Text>
            </View>
            <TextInput
                className="h-10 w-4/5 bg-[#222121] p-2 rounded-md" value={preco}
                onChangeText={(text) => setPreco(text)}
            />
            <TouchableOpacity
                className=" w-4/5 h-14  bg-[#3F64EF] items-center justify-center mt-20 rounded-xl flex-row"
                onPress={() => navigation.navigate("Login")}
            >
                <Image />
                <Text className="font-bold text-md text-white">Cadastrar </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )

}