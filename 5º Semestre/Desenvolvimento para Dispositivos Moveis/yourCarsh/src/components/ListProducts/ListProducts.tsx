import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import firebase from "../../../services/connectionFirebase";
import { ListItem } from "react-native-elements";
import { NotePencil } from "phosphor-react-native";

interface Despesa {
  id: string;
  name: string;
  valor: string;
  descricao: string;
  periodo: string;
}

export function ListProducts() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [despesas, setDespesas] = useState<Despesa[]>([]);
  const [mostrar, setMostrar] = useState<boolean>(true);

  const list = async () => {
    setIsLoading(true);
    const dbRef = firebase.database().ref("depesas");
    await dbRef.once("value", (snapshot) => {
      const despesasList: Despesa[] = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();
        const id = childSnapshot.key;
        childData.id = id;
        despesasList.push(childData);
      });
      console.log(despesasList);
      setDespesas(despesasList);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    list();
  }, []);

  const excluirDespesa = async (despesaId: string) => {
    try {
      await firebase.database().ref(`depesas/${despesaId}`).remove();
      const newDespesas = despesas.filter(
        (despesa) => despesa.id !== despesaId
      );
      setDespesas(newDespesas);
      console.log("Despesa excluída com sucesso!");
    } catch (error) {
      console.error("Erro ao excluir despesa:", error);
    }
  };

  function handleEditDespesa(despesas: Despesa) {
    setMostrar(false);
  }
  return (
    <SafeAreaView className="flex-1 bg-[#05060A]">
      <View className="flex-1 items-center justify-center">
        <Text className="text-white">Listagem de Despesas</Text>

        {isLoading ? (
          <ActivityIndicator size="large" color="#3F64EF" />
        ) : (
          <ScrollView className="h-fit w-full">
            {despesas.map(
              (despesa, index) =>
                despesa.name && (
                  <ListItem
                    className="h-fit w-full"
                    containerStyle={styles.listItem}
                    key={index}
                  >
                    <ListItem.Content className="bg-[#292727] p-2 rounded-lg">
                      <View className="flex flex-row w-full pl-4">
                        <View className="flex flex-col w-5/6">
                          <ListItem.Title className="text-gray-300 text-xl">
                            Nome: {despesa.name}
                          </ListItem.Title>
                          <ListItem.Subtitle className="text-gray-300">
                            Valor: R$ {despesa.valor}
                          </ListItem.Subtitle>
                          <ListItem.Subtitle className="text-gray-300">
                            Descrição: {despesa.descricao}
                          </ListItem.Subtitle>
                          <ListItem.Subtitle className="text-gray-300">
                            Periodo: {despesa.periodo}
                          </ListItem.Subtitle>
                        </View>
                        <View className=" justify-start flex items-end w-1/6">
                          <TouchableOpacity
                            key={despesa.id}
                            onPress={() => handleEditDespesa(despesa)}
                          >
                            <NotePencil size={25} color="#4a4a4a" />
                          </TouchableOpacity>
                        </View>
                      </View>
                      <TouchableOpacity
                        className="w-full h-fit bg-red-700 p-2 flex justify-center items-center rounded-xl mt-2"
                        onPress={() => excluirDespesa(despesa.id)}
                      >
                        <Text className="font-bold text-md text-white">
                          Excluir
                        </Text>
                      </TouchableOpacity>
                    </ListItem.Content>
                  </ListItem>
                )
            )}
          </ScrollView>
        )}
        <TouchableOpacity
          className=" w-4/5 h-14 mb-5 bg-[#3F64EF] items-center justify-center mt-20 rounded-xl flex-row"
          onPress={list}
        >
          <Text className="font-bold text-md text-white">Listar Despesas </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "trasparent",
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 5,
  },
});
