import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.ink01,
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.ink06,
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
  },
});
