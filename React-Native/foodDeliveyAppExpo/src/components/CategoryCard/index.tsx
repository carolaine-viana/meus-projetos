import React from "react";
import { View, Image, ImageSourcePropType } from "react-native";
import { styles } from "./styles";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

type Props = RectButtonProps & {
  id?: number;
  title: string;
  icon: ImageSourcePropType;
};

export const CategoryCard = ({ id, title, icon, ...rest }: Props) => {
  return (
    <View style={styles.container}>
      <RectButton
        {...rest}
        style={
          id == 1
            ? styles.cardContainOpt1
            : id == 2
            ? styles.cardContainOpt2
            : styles.cardContainOpt3
        }
      >
       <Image source={icon} />
      </RectButton>
    </View>
  );
};
