import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  card: {
    width: 180,
    height: 300,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.accentorange,
  },
  card2: {
    width: 180,
    height: 300,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.accentblue,
  },
  card3: {
    width: 180,
    height: 300,
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.accentpurple,
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 25,
    padding: 10,
    justifyContent: "space-between",
  },
  cardPrice: {
    width: 80,
    height: 70,
    borderRadius: 100,
    alignItems: "center",
    backgroundColor: "white",
    textAlign: "center",
  },
  subtitle: {
    fontFamily: theme.fonts.text500,
    fontSize: 18,
    padding: 10,
    paddingVertical: 30,
  },
});
