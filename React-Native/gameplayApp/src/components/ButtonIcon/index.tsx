import React from "react";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";
import {View, Text, Image} from "react-native";

import DiscordImg from "../../screens/assets/discord.png";
import { styles } from "./styles";

//interface Props {}
//se for opcoional title com interrogacao do lado
type Props = RectButtonProperties & {
  title: string;
};
//..rest = quero o title e todo o resto
export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image
          source={DiscordImg}
          style={styles.icon}
          />
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  );
}
