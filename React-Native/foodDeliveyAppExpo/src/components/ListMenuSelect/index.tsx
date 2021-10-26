import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, ScrollView, FlatList } from "react-native";

//menu select
import { categories } from "../../utils/categories";
import { CategoryCard } from "../CategoryCard";

// type Props = {
//   categorySelected: string;
//   setCategory: (categoryId: string) => void;
// };

export function ListMenuSelect({}) {
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView>
        <FlatList
          data={categories}
          renderItem={({ item }) =>(
            <CategoryCard {...item}
              //onPress={() => setCategory(item.title, item.icon)}
              //onPress={() => navigation.navigate('Feed', item.title, item.icon)}
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
