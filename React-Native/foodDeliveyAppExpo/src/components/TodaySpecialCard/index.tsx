import React, { useState } from "react";
import { View, Text, Image, ImageSourcePropType, Pressable } from "react-native";
import { styles } from "./styles";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import star from "../../assets/foodImage/star-rating.png";
import { useNavigation } from "@react-navigation/native";
import { todaySpecial } from "../../utils/todaySpecial";

type Props = RectButtonProps & {
  id: number;
  specialTitle: string;
  specialIcon: ImageSourcePropType;
  stars: number;
  category: string;
};

export const TodaySpecialCard = ({id, specialTitle, specialIcon, stars, category, ...rest}: Props) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('RestaurantProfile', {
          id, specialTitle, specialIcon, category
        })}
      >
        <View style={styles.icone}>
          <Image source={specialIcon} style={{ width: 100, height: 100 }} />
        </View>

        <View>
          <Text style={styles.title}>{specialTitle}</Text>
          <View style={styles.detail}>
            <Image source={star} style={{ width: 30 }} />
            <Text>{stars}</Text>
            <Text>$ $ $</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.subtitle}>Restaurant: </Text>
            <Text style={styles.subtitle}>{category}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
