import { ChartLineUp, ListDashes, Pencil, Plus } from "phosphor-react-native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import SvgUri from 'react-native-svg-uri';
import { ListItem } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";


export function ConsultaAPI({ navigation }: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [quote, setQuote] = useState<Array<any>>([]);
  const [name, setNameQuote] = useState<string>("");

  useEffect(() => {
    fetchStockQuote();
  }, []);

  function message() { 
    alert("Nenhuma despesa selectionada para edição")
  }

  const fetchStockQuote = async () => {
    try {
      const response = await fetch("https://brapi.dev/api/quote/list?sortBy=name&sortOrder=desc&limit=8");
      const data = await response.json();
      setQuote(data.stocks);
      console.log(data.stocks[0].stock);
    } catch (error) {
      console.log("Error fetching stock quote:", error);
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-[#05060A]">
      {isLoading ? (
        <ActivityIndicator size="large" color="#3F64EF" />
      ) : (
        <ScrollView className="mt-1">
          {quote.map(
            (quote, index) =>
              quote.name && (
                <ListItem
                  className="h-fit w-full"
                  containerStyle={styles.listItem}
                  key={index}
                >
                  <ListItem.Content className="bg-[#292727] p-2 rounded-lg">
                    <View className="flex flex-row w-full pl-4">
                      <View className=" flex items-center justify-center">
                      <SvgUri  source={{ uri:`${quote.logo}`}}  width="60" height="60"/>
                      </View>
                      <View className="flex flex-col w-5/6 ml-4">
                        <ListItem.Title className="text-gray-300 text-lg">
                         <Text className="font-bold">Código:</Text> {quote.stock}
                        </ListItem.Title>
                        <ListItem.Subtitle className="text-gray-300">
                         <Text className="font-bold">Nome da Ação:</Text> {quote.name}
                        </ListItem.Subtitle>
                        <ListItem.Subtitle className="text-gray-300">
                          <Text className="font-bold">Valor de fechamento</Text> {quote.close}
                        </ListItem.Subtitle>
                        <ListItem.Subtitle className="text-gray-300">
                          <Text className="font-bold">Área de atuação:</Text> {quote.sector}
                        </ListItem.Subtitle>
                      </View>
                      <View className=" justify-start flex items-end w-1/6">
                      </View>
                    </View>
                  </ListItem.Content>
                </ListItem>
              )
          )}
        </ScrollView>
      )}
      <View>
        <View className="bg-[#292727] h-16  rounded-t-xl items-center justify-around flex flex-row">
          <TouchableOpacity onPress={() => navigation.navigate("Add")}>
            <View className="ml-2">
              <Plus size={32} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("List")}>
            <View className="ml-2">
              <ListDashes size={32} color="white"  />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="ml-2">
            <ChartLineUp size={32} color="gray" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  quote: {
    fontSize: 16,
  },
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
