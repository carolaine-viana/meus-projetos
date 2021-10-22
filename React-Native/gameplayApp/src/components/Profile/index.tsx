import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import { styles } from "./styles";
import {Avatar} from '../Avatar/index';
import { Background } from "../Background";

export function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Avatar urlImage="https://github.com/carolaine-viana.png"/>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            Carolaine
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória.
        </Text>
      </View>
    </SafeAreaView>
  );
}
