import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { todaySpecial } from "../../utils/todaySpecial";
import { TodaySpecialCard } from "../TodaySpecialCard";
import { styles } from "./styles";

export function ListMenuSpecial() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={todaySpecial}
          renderItem={({ item }) => <TodaySpecialCard {...item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </View>
  );
}
