import { Routes } from './src/routes';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";


export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-[#181818] flex  ">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      hidden={true}
      />
      <Routes />
    </SafeAreaView>
  );
}
