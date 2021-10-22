import React from "react";
import {
  ScrollView,
  Image,
  View,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
} from "react-native";
import { categories } from "../../utils/categories";
import { Category } from "../Category";
import { styles } from "./styles";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
};

export function CategorySelect({ categorySelected, setCategory, hasCheckBox = false }: Props) {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <Category
            {...item}
            checked={item.id === categorySelected}
            onPress={() => setCategory(item.id)}
            hasCheckBox={hasCheckBox}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}
