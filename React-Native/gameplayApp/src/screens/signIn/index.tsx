import React from "react";
import { useState } from "react";
import { styles } from "./styles";
import { View, Text, Image, StatusBar } from "react-native";
import illustration from "../assets/illustration.png";
import { ButtonIcon } from "../components/ButtonIcon";

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Image source={illustration} style={styles.image} resizeMode="stretch" />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {"\n"} e organize suas jogatinas.
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {"\n"} favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar no discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}
