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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import firebase from "../../../services/connectionFirebase";
import { ListItem } from "react-native-elements";

interface Despesa {
  id: string;
  name: string;
  valor: string;
  descricao: string;
  periodo: string;
}

export function ListProducts({ navigation }: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [despesas, setDespesas] = useState<Despesa[]>([]);

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
      const newDespesas = despesas.filter((despesa) => despesa.id !== despesaId);
      setDespesas(newDespesas);  
      console.log('Despesa excluída com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir despesa:', error);
    }
  };
  

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
      <View className="">
        <View className="bg-[#292727] h-16 rounded-t-xl items-center justify-around flex flex-row">
          <TouchableOpacity
            onPress={() => navigation.navigate("Apresentation")}
          >
            <Image
              className="h-10 w-10 ml-2"
              source={require("../../../assets/house.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              className="h-10 w-10 ml-2"
              source={require("../../../assets/chart-bar1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
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

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "trasparent",
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 5,
  },
});
