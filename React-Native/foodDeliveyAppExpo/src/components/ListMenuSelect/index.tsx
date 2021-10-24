import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";

//menu select
import { categories } from "../../utils/categories";
import { CategoryCard } from "../CategoryCard";

import { styles } from "./styles";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
};

export function ListMenuSelect({categorySelected, setCategory}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={categories}
          renderItem={({ item }) =>(
            <CategoryCard {...item}
              onPress={() => setCategory(item.title, item.icon)}
          />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
}
