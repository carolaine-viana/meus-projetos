import React from "react";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

type Props = RectButtonProperties;

export function ButtonAdd({ ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </RectButton>
  );
}
