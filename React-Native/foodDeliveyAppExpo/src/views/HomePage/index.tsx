import React, { useState } from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import { styles } from "./styles";
import { SvgProps } from "react-native-svg";
import Illustration from "../../assets/caracterImage/Illustration.png";
import { ButtonStandard } from "../../components/ButtonStandard";
import { useNavigation } from "@react-navigation/native";
import { Feed } from "../Feed";

type Props = {
  CaracterSvg: React.FC<SvgProps>;
};

export function HomePage({}: Props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContent}>
        <Text style={styles.title}>
          Your Favorite Food,{"\n"} Delivered Fast.
        </Text>
        <Text style={styles.subtitle}>
          Find the best restaurants in your city and get it delivered to your
          place!
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={Illustration} width={100} height={100} />
      </View>
      <ButtonStandard
        title="Order Now!"
        onPress={() => navigation.navigate("Feed")}
      />
    </SafeAreaView>
  );
}
