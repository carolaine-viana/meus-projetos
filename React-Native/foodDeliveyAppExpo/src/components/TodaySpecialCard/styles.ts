import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 280,
    marginRight: 10,
    borderRadius: 30,
    backgroundColor: theme.colors.accentorange,
  },
  icone: {
    alignItems: "center",
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  detail: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  info: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 30,
  },
  subtitle: {
    fontFamily: theme.fonts.text400,
    fontSize: 15,
  },
});
