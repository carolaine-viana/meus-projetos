import React from "react";
import { View, ScrollView, FlatList } from "react-native";
import { todaySpecial } from "../../utils/todaySpecial";
import { TodaySpecialCard } from "../TodaySpecialCard";

// type Props = {
//   categorySelected: string;
//   setCategory: (categoryId: string) => void;
// };

export function ListMenuSpecial({}) {
  return (
    <View>
      <ScrollView>
        <FlatList
          data={todaySpecial}
          renderItem={({ item }) =>(
            <TodaySpecialCard {...item}
              //onPress={() => setCategory((todaySpecial))}
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
