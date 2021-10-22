import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Header from "../../components/headerSearch";
import { ListDivider } from "../../components/ListDivider";
import { ListMenuSelect } from "../../components/ListMenuSelect";
import { ListMenuSpecial } from "../../components/ListMenuSpecial";
import { styles } from "./styles";

type Props = {
  title: string;
};

export function Feed() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
        <Text style={styles.title}>Popular categories</Text>
        <ListDivider />
        <ListMenuSelect />
        <Text style={styles.title}>Today’s special menu</Text>
        <ListDivider />
        <ListMenuSpecial />
        <Text style={styles.title}>Featured restaurants</Text>
        <ListDivider />
      </View>
    </SafeAreaView>
  );
}
