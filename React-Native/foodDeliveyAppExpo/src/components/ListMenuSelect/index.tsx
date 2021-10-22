import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";

//menu select
import { categories } from "../../utils/categories";
import { CategoryCard } from "../CategoryCard";

import { styles } from "./styles";

export function ListMenuSelect() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={categories}
          renderItem={({ item }) => <CategoryCard {...item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
}
