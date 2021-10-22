import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";

import { styles } from "./styles";

type Props = RectButtonProperties & {
  title: string;
};

export function ButtonStandard({ title, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <RectButton style={styles.button} {...rest}>
        <Text style={styles.title}>{title}</Text>
      </RectButton>
    </View>
  );
}
