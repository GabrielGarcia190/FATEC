import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { House } from 'phosphor-react-native';
import { useNavigation } from "expo-router";





export function NavigationBar({navigation}:any) {
    return (
      <View className="bg-[#292727] h-20 rounded-t-xl items-center justify-around flex flex-row">
        <TouchableOpacity onPress={() => navigation.navigate('Apresentation')}>
        <Image
            className="h-10 w-10 ml-2"
            source={require("../../../assets/house.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Image
            className="h-10 w-10 ml-2"
            source={require("../../../assets/chart-bar.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image
            className="h-10 w-10 ml-2"
            source={require("../../../assets/user.png")}
          />
        </TouchableOpacity>
         
      </View>
    );
  }

  
  