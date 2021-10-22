import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  button: {
    width: "70%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.utilityWarning,
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontWeight: "bold",
    fontSize: 16,
  },
});
