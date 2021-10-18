import React from "react";
import { styles } from "./styles";
import { View, Text, Image } from "react-native";
import illustration from "../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";


export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={illustration}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {"\n"} e organize suas jogatinas.
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {"\n"} favoritos com seus amigos
          </Text>
          <ButtonIcon
              title="Entrar no discord"
              onPress={handleSignIn}
            />
        </View>
      </View>
    </Background>
  );
}
