import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "../global/styles/theme";
import { RectButton, RectButtonProperties } from "react-native-gesture-handler";

//icons
import Fontisto from "react-native-vector-icons/Fontisto";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

// views
import { HomePage } from "../views/HomePage";
import { Orders } from "../views/Orders";
import { Profile } from "../views/Profile";
import { Feed } from "../views/Feed";
import { useNavigation } from "@react-navigation/native";
import { RestaurantProfile } from "../views/RestaurantProfile";

const Tab = createMaterialBottomTabNavigator();

//const Stack = createStackNavigator();

export default function authRoutes() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="HomePage"
        activeColor={theme.colors.utilityWarning}
        barStyle={{ backgroundColor: theme.colors.ink01 }}
      >
        <Tab.Screen
          name="HomePage"
          component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => (
              <Fontisto
                name="home"
                size={30}
                color={focused ? "#fff" : "#ddd"}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{
            tabBarIcon: ({ focused }) => (
              <Octicons
                name="tasklist"
                size={30}
                color={focused ? "#fff" : "#ddd"}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="restaurant-outline"
                size={30}
                color={focused ? "#fff" : "#ddd"}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="user-circle"
                size={30}
                color={focused ? "#fff" : "#ddd"}
              />
            ),
          }}
        />

        <Tab.Screen
          name="RestaurantProfile"
          component={RestaurantProfile}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="user-circle"
                size={30}
                color={focused ? "#fff" : "#ddd"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
