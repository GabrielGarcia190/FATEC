import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Button,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import firebase from "../../../services/connectionFirebase";
import { ListItem } from "react-native-elements";
import {
  Check,
  ListDashes,
  NotePencil,
  Pencil,
  Plus,
  X,
} from "phosphor-react-native";

export interface Despesa {
  id: string;
  name: string;
  valor: string;
  descricao: string;
  periodo: string;
}

export let id = "";

export function ListProducts({ navigation }: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [despesas, setDespesas] = useState<Despesa[]>([]);
  const [mostrar, setMostrar] = useState<boolean>(true);
  const [modalVisible, setModalVisible] = useState(false);
  
  useEffect(() => {
    list();
  }, []);

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

  const excluirDespesa = async (despesaId: string) => {
    try {
      await firebase.database().ref(`depesas/${despesaId}`).remove();
      const newDespesas = despesas.filter(
        (despesa) => despesa.id !== despesaId
      );
      setDespesas(newDespesas);
      console.log("Despesa excluída com sucesso!");
      setModalVisible(false);
    } catch (error) {
      console.error("Erro ao excluir despesa:", error);
    }
  };

  async function editar(id_cara: string) {
    id = id_cara;
    navigation.navigate("Edit");
  }

  function mesagem() {
    alert("Nenhuma despesa selecionada");
  }

  function openModal(id_cara: string) {
    id = id_cara;
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }
  return (
    <SafeAreaView className="flex-1 bg-[#05060A]">
      <View className="flex-1 items-center justify-center">
        <Text className="text-white mt-9 text-xl">Listagem de Despesas</Text>

        {isLoading ? (
          <ActivityIndicator size="large" color="#3F64EF" />
        ) : (
          <ScrollView className="h-fit w-full">
            <Modal
              transparent={true}
              visible={modalVisible}
              animationType="fade"
              onRequestClose={closeModal}
            >
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text className="text-xl uppercase text-white font-bold text-center">
                    AVISO
                  </Text>
                  <Text className="text-sm uppercase text-white text-center mb-2 p-4">
                    Confirmar exclusão
                  </Text>
                  <View className=" flex flex-row justify-around">
                    <TouchableOpacity
                      onPress={() => excluirDespesa(id)}
                      className="bg-green-700 rounded-xl p-2"
                    >
                      <Check size={32} color="#ffffff" weight="bold" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={closeModal}
                      className="bg-red-700 rounded-xl p-2"
                    >
                      <X size={32} color="#ffffff" weight="bold" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
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
                            onPress={() => editar(despesa.id)}
                          >
                            <NotePencil size={25} color="#4a4a4a" />
                          </TouchableOpacity>
                        </View>
                      </View>
                      <TouchableOpacity
                        className="w-full h-fit bg-red-700 p-2 flex justify-center items-center rounded-xl mt-2"
                        onPress={() => openModal(despesa.id)}
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
          <Text className="font-bold text-md text-white">Atualizar Lista</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View className="bg-[#292727] h-16  rounded-t-xl items-center justify-around flex flex-row">
          <TouchableOpacity onPress={() => navigation.navigate("Add")}>
            <View className="ml-2">
              <Plus size={32} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="ml-2">
              <ListDashes size={32} color="gray" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={mesagem}>
            <View className="ml-2">
              <Pencil size={32} color="white" />
            </View>
          </TouchableOpacity>
        </View>
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  modalContent: {
    backgroundColor: "#4a4a4a",
    borderRadius: 5,
    padding: 20,
  },
});
