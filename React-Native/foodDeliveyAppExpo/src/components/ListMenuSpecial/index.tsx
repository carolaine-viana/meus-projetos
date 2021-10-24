import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { todaySpecial } from "../../utils/todaySpecial";
import { TodaySpecialCard } from "../TodaySpecialCard";
import { styles } from "./styles";


type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
};

export function ListMenuSpecial({categorySelected, setCategory}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={todaySpecial}
          renderItem={({ item }) =>(
            <TodaySpecialCard {...item}
              onPress={() => setCategory((todaySpecial))}
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
