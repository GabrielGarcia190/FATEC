import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

interface ListagemProps {
    data?: any;
    deleteItem?: any;
    editItem?: any;
}



export default function List({data, deleteItem, editItem }: ListagemProps) {
  return (
    <View>
      <Text>Produto: {data.nome}</Text>

      <Text>Marca: {data.marca}</Text>

      <Text>Preço(R$): {data.preco}</Text>

      <Text>Imagem: {data.imagem}</Text>

      <View>
        <TouchableOpacity onPress={() => deleteItem(data.key)}>
          <Icon name="trash" color="#A52A2A" size={20}>
            Excluir
          </Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => editItem(data)}>
          <Icon name="create" color="blue" size={20}>
            Editar
          </Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
}
