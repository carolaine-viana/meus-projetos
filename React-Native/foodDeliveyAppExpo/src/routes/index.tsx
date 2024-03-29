import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthRoutes from "./auth.routes";
import { HomePage } from "../views/HomePage";

export function Routes() {
  return (
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
  );
}
