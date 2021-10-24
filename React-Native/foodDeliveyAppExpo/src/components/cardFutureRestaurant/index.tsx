import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import chicken from '../../assets/foodImage/chicken.png';

export const CardFutureRestaurant = () => {
  return(
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={chicken}
        />
      </View>
    </View>
  )
}
