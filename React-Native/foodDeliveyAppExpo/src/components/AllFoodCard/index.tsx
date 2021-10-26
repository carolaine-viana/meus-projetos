import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import { ButtonStandard } from "../ButtonStandard";
import { styles } from "./styles";

type Props = {
  id: number;
  title: string;
  icon: ImageSourcePropType;
  price: number;
};

export const AllFoodCard = ({ id, title, icon, price, ...rest }: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={id == 1 ? styles.card : id == 2 ? styles.card2 : styles.card3}
        >
        <Text style={styles.title}>{title}</Text>

        <View style={styles.cardPrice}>
          <Text style={styles.subtitle}>${price}</Text>
        </View>

        <View>
          <Image
            source={icon}
            style={{ width: 100, height: 100, resizeMode: "contain" }}
          />
        </View>

          <ButtonStandard title="Buy it" />
      </View>
    </View>
  );
};
