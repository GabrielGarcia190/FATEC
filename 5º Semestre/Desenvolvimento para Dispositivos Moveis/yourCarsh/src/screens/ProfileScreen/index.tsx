import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListDashes, Pencil, Plus } from "phosphor-react-native";
import { id } from "../ListProducts/index";
import firebase from "../../../services/connectionFirebase";

interface Despesa {
  id: string;
  name: string;
  valor: string;
  descricao: string;
  periodo: string;
}

export function ProfileScreen({ navigation }: any) {
  const [despesas, setDespesas] = useState<Despesa[]>([]);
  const [descricao, setDescricao] = useState("");
  const [name, setName] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [valor, setValor] = useState("");

  const list = async () => {
    console.log("Id do produto: ", id)
    if (id === "") {
      setDescricao("Selecione uma despesa para editar");
      setName("Selecione uma despesa para editar");
      setPeriodo("Selecione uma despesa para editar");
      setValor("Selecione uma despesa para editar");
      return
    }

    const dbRef = firebase.database().ref(`depesas/${id}`);
    await dbRef.once("value", (snapshot) => {
      const despesasList: Despesa[] = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        const id = childSnapshot.key;
        childData.id = id;
        despesasList.push(childData);
      });
      console.log(despesasList);
      setName(String(despesasList[0]));
      setDescricao(String(despesasList[1]));
      setPeriodo(String(despesasList[2]));
      setValor(String(despesasList[3]));
      console.log(descricao);
      setDespesas(despesasList);
    });
  };

  useEffect(() => {
    list();
  }, []);

  function updateData(id: string, newData: any) {
    const dataRef = firebase.database().ref(`depesas/${id}`);
    dataRef.update(newData);
    alert("Despesa atualizada com sucesso!");
    navigation.navigate("List");
  }

  function handleSubmit() {
    const newData = { name, valor, descricao, periodo };
    updateData(id, newData);
  }


  return (
    <SafeAreaView className="flex-1 bg-[#05060A] h-screen w-screen">
      <View className="h-fit w-full flex flex-col justify-center items-center">
        <Text className="mt-8 font-bold text-xl text-white">
          Editar Despesas
        </Text>

        <View className="w-full items-start ml-10 mt-6 ">
          <Text className="text-[#6F6A6A] font-light">Nome da despesa</Text>
        </View>
        <TextInput
          className=" bg-[#222121] p-2  w-11/12 h-10 rounded-md"
          value={name}
          onChangeText={(text) => setName(text)}
          color={"#6F6A6A"}
        />
        <View className="w-full items-start ml-10 mt-6 ">
          <Text className="text-[#6F6A6A] font-light">Descrição: </Text>
        </View>
        <TextInput
          className=" bg-[#222121] p-2  w-11/12 h-10 rounded-md"
          value={descricao}
          onChangeText={(text) => setDescricao(text)}
          color={"#6F6A6A"}
        />
        <View className="w-full items-start ml-10 mt-6 ">
          <Text className="text-[#6F6A6A] font-light">Valor:</Text>
        </View>
        <TextInput
          className=" bg-[#222121] p-2  w-11/12 h-10 rounded-md"
          value={valor}
          onChangeText={(text) => setValor(text)}
          color={"#6F6A6A"}
        />
        <View className="w-full items-start ml-10 mt-6 ">
          <Text className="text-[#6F6A6A] font-light">Nome da despesa</Text>
        </View>
        <TextInput
          className=" bg-[#222121] p-2  w-11/12 h-10 rounded-md"
          value={periodo}
          onChangeText={(text) => setPeriodo(text)}
          color={"#6F6A6A"}
        />
        <TouchableOpacity
          onPress={handleSubmit}
          className=" w-4/5 h-14  bg-[#3F64EF] items-center justify-center mt-20 rounded-xl flex-row"
        >
          <Text className="font-bold text-md text-white">Editar</Text>
        </TouchableOpacity>
      </View>

      <View className="bg-[#292727] h-16   mt-52 rounded-t-xl items-center justify-around flex flex-row">
        <TouchableOpacity onPress={() => navigation.navigate("Add")}>
          <View className="ml-2">
            <Plus size={32} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("List")}>
          <View className="ml-2">
            <ListDashes size={32} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="ml-2">
            <Pencil size={32} color="gray" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
