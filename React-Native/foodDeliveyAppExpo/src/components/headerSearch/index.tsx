import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import logo from "../../assets/caracterImage/logo.png";
import { Searchbar } from "react-native-paper";

export default function headerSearch() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={logo} style={styles.avatar} />

        <Searchbar
          placeholder="Dishes, restaurants or cuisines"
          style={styles.searchBar}
        />
      </View>
    </View>
  );
}
