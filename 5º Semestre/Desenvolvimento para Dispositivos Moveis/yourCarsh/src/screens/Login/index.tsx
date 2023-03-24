import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "../../../services/connectionFirebase";

export default function Login({ navigation }: any) {
  const [type, setType] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  function handleLogin() {
    if (type === "login") {
      // Aqui fazemos o login
      const user = firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          // props.changeStatus(user.user.uid)
          console.log("Logado com sucesso!");

          navigation.navigate("Apresentation");
        })
        .catch((err) => {
          console.log(err);
          console.log("fodeo")
          alert("Email ou senha não cadastrados!");
          return;
        });
    }
    // else {
    //   // Aqui cadastramos o usuario
    //   const user = firebase.auth().createUserWithEmailAndPassword(userCredentials.email, userCredentials.password)
    //     .then((user) => {
    //       // props.changeStatus(user.user.uid);
    //       console.log("Cadastrado com sucesso!");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       alert('Erro ao Cadastrar!');
    //       return;
    //     })
    // }
  }

  type Props = {
    changeStatus: (uid: string) => void;
  };

  return (
    <SafeAreaView className="flex-1 bg-[#181818] flex  ">
      <View className=" h-32 w-full items-center mt-10 flex flex-col">
        <Image
          className="w-[97.6] h-[103.6]"
          source={require("../../../assets/logo.png")}
        />
        <Text className="text-white mt-5 text-5xl">
          <Text className="font-light">your</Text>
          <Text className="font-bold">Cash</Text>
        </Text>
      </View>
      <View className="mt-24 ml-11">
        <Text className="text-white font-bold text-3xl">Login</Text>
        <Text className="text-white mt-3">
          Por favor de identifique para continuar
        </Text>
        <TextInput
          keyboardType="email-address"
          className="p-2 w-80 mt-4 rounded-xl bg-[#212121] text-[#5C5867]"
          placeholderTextColor="#5C5867"
          placeholder="exameple@gmail.com"
          onChangeText={setEmail}
          value={email}
        />
        <View className=" flex justify-between flex-row p-2 w-80 mt-4 rounded-xl bg-[#212121] text-[#5C5867] ">
          <TextInput
            className="text-[#5C5867]"
            placeholderTextColor="#5C5867"
            placeholder="Insira sua senha"
            onChangeText={(e) => setPassword(e)}
            secureTextEntry={!showPassword}
            value={password}
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#5C5867"
              className="p-2 w-80 mt-5"
            />
          </TouchableOpacity>
        </View>

        <View className="w-80 items-center h-14 flex mt-4">
          <TouchableOpacity
            className=" w-[322px] h-[60px]  bg-[#3F64EF] items-center justify-center rounded-xl flex-row"
            onPress={handleLogin}
          >
            <Text className="font-bold text-md text-white">Entrar </Text>
          </TouchableOpacity>
                  <View className="w-80 items-center">
          <Text className="text-[#3F64EF] font-md font-semibold mt-2">
            Esqueceu sua senha?
          </Text>
        </View>
          <LinearGradient
            colors={["#FF3D00", "#FFC107", "#4CAF50", "#1976D2"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="flex justify-center w-[322px] h-[60px] p-4 items-center rounded-xl mt-12"
          >
            <TouchableOpacity
              activeOpacity={0.9}
              className=" w-[320px] h-[58px]  bg-[#181818] items-center rounded-xl flex flex-row"
              onPress={() => navigation.navigate("Apresentation")}
            >
              <Image
                className="h-10 w-10 ml-2"
                source={require("../../../assets/google.png")}
              />
              <Text className="font-bold text-lg text-white text-center ml-14">
                Entrar com Googe
              </Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={["#3940E8", "#2748CE", "#1976D2", "#1790FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="flex justify-center w-[322px] h-[60px] p-4 items-center rounded-xl mt-4"
          >
            <TouchableOpacity
              activeOpacity={0.9}
              className=" w-[320px] h-[58px]  bg-[#181818] items-center rounded-xl flex flex-row"
              onPress={() => navigation.navigate("Apresentation")}
            >
              <Image
                className="h-10 w-10 ml-2"
                source={require("../../../assets/git.png")}
              />
              <Text className="font-bold text-lg text-white text-center ml-14">
                Entrar com GitHub
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <View className="mt-56 items-center w-80">
          <Text className="text-[#53505C] fonto-md font-semibold ">
            Não tem conta?
            <Text className="text-[#3F64EF]"> Cadastre-se</Text>
          </Text>
        </View>
      </View>
      <StatusBar style="auto" hidden={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "transparent",
  },
});
