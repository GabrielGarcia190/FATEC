import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, View, TouchableOpacity, Image, Keyboard } from "react-native";
import React, { useState } from "react";
import firebase from "../../../services/connectionFirebase";

interface productProps {
    name?: string;
}

export function ProductManager() {
    const [descricao, setDescricao] = useState("");
    const [name, setName] = useState("");
    const [periodo, setPeriodo] = useState("");
    const [valor, setValor] = useState("");
    const [key, setKey] = useState("");


    async function insertProducts() {
        //editar dados
        // if (name !== '' & descricao !== '' & periodo !== '' & valor !== '' & key !== '') {

        //     alert('Produto Editado!');
        //    firebase.database().ref('depesas').child(key).update({
        //     descricao: descricao, name: name,  periodo: periodo, valor: valor
        //   })

        //   alert('Produto Editado!');
        //   setKey('');
        //   return;
        // }    



        //cadastrar dados
        let despesas = await firebase.database().ref('depesas');
        let chave = despesas.push().key;

        if(descricao === '' || name === '' || periodo === '' || valor === ''){
            return alert('Preencha todos os campos corretamente!');
        }

        despesas.child(String(chave)).set({
            name: name,
            descricao: descricao,
            valor: valor,
            periodo: periodo
        });

        alert('Produto Cadastrado!');
    }



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
                value={name}
                onChangeText={(text) => setName(text)}
                color={'#6F6A6A'}
            />


            <View className="w-full items-start ml-20 mt-6 ">
                <Text className="text-[#6F6A6A] font-light">Descrição da despesa</Text>
            </View>

            <TextInput
                className="h-10 w-4/5 bg-[#222121] p-2 rounded-md"
                color={'#6F6A6A'}
                value={descricao}
                onChangeText={(text) => setDescricao(text)}
            />

            <View className="w-full items-start ml-20 mt-6 ">
                <Text className="text-[#6F6A6A] font-light">Periodo</Text>
            </View>

            <TextInput
                className="h-10 w-4/5 bg-[#222121] p-2 rounded-md" value={periodo}
                onChangeText={(text) => setPeriodo(text)}
                color={'#6F6A6A'}
            />


            <View className="w-full items-start ml-20 mt-6 ">
                <Text className="text-[#6F6A6A] font-light">Valor</Text>
            </View>
            <TextInput
                className="h-10 w-4/5 bg-[#222121] p-2 rounded-md" value={valor}
                onChangeText={(text) => setValor(text)}
                color={'#6F6A6A'}
            />
            <TouchableOpacity
                className=" w-4/5 h-14  bg-[#3F64EF] items-center justify-center mt-20 rounded-xl flex-row"
                onPress={insertProducts}
            >
                <Text className="font-bold text-md text-white">Cadastrar </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )

}

