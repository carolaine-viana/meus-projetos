import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, Button, ScrollView, Pressable } from "react-native";
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Choose from "../../assets/caracterImage/Image.png";
import Chinese from "../../assets/foodImage/Chinese.png";
import American from "../../assets/foodImage/Burger.png";
import Mexican from "../../assets/foodImage/tacosBag.png";

import Ionicons from "react-native-vector-icons/Ionicons";

import { Menu } from "../../utils/foodMenu";
import { ButtonStandard } from "../../components/ButtonStandard";
import { ListDivider } from "../../components/ListDivider";

type Props = {
  title: string;
};

export function RestaurantProfile({ route }) {
  const { id, specialTitle, category, specialIcon } = route.params;
  const navigation = useNavigation()


  // console.warn(route.name); //nome da tela
  // console.warn(route.params); //oq essa tela recebe

  function selectBanner() {
    switch (category) {
      case "Mexican":
        return <Image source={Mexican} style={{ width: 100, height: 80 }} />;
        break;
      case "American":
        return <Image source={American} style={{ width: 100, height: 100 }} />;
        break;
      case "Asian":
        return <Image source={Chinese} style={{ width: 100, height: 100 }} />;
        break;
      default:
        return <Image source={Choose} style={{ width: 100, height: 100 }} />;
    }
  }

  const showMenu = Menu.map((p) => {
    return (
        <View style={p.title == 'Item 1' ? styles.card : p.title == 'Item 2' ? styles.card2 : styles.card3}>
          <Text style={styles.title}>{p.title}</Text>

          <ListDivider/>

          <View style={styles.cardPrice}>
            <Text style={styles.subtitle}>${p.price}</Text>
          </View>

          <View>
            <Image source={p.icon} style={{ width: 100, height: 100, resizeMode: 'contain'}} />
            <ButtonStandard title="Buy it" />
          </View>
        </View>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.banner}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={30} />
        </Pressable>

        <Text>Restaurant:</Text>

        <Text style={styles.title}>{specialTitle}</Text>
        {selectBanner()}

      </View>
      <ScrollView style={styles.containerCard}>{showMenu}</ScrollView>
    </SafeAreaView>
  );
}
