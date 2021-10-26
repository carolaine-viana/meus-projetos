import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

//png
import American from "../../assets/caracterImage/Image.png";
import Chinese from "../../assets/foodImage/Chinese.png";
import Mexican from "../../assets/foodImage/Buddies.png";
import Choose from '../../assets/foodImage/choose.png';

import Ionicons from "react-native-vector-icons/Ionicons";

import { List } from "../../components/ListAllFood";

export function RestaurantProfile({ route }) {
  const { specialTitle, category } = route.params;
  const navigation = useNavigation();

  //console.warn(route.name); //nome da tela
  //console.warn(route.params); //oq essa tela recebe

  function selectBanner() {
    switch (category) {
      case "Mexican":
        return (
          <Image source={Mexican} style={styles.image}/>
        );
        break;
      case "American":
        return (
          <Image source={American} style={styles.image}/>
        );
        break;
      case "Asian":
        return (
          <Image source={Chinese} style={styles.image}/>
        );
        break;
      default:
        return (
          <Image source={Choose} style={styles.image}/>
        );
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={30} />
        </Pressable>
        <Text style={{ fontSize: 20 }}>Restaurant:</Text>
        <Text style={styles.title}>{specialTitle}</Text>
        <View>{selectBanner()}</View>
      </View>
      <List />
    </SafeAreaView>
  );
}
