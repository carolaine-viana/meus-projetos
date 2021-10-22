import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainOpt1: {
    width: 120,
    height: 80,
    justifyContent: "center",
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: theme.colors.accentorange,
  },
  cardContainOpt2: {
    width: 120,
    height: 80,
    justifyContent: "center",
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: theme.colors.accentyellow,
  },
  cardContainOpt3: {
    width: 120,
    height: 80,
    justifyContent: "center",
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: theme.colors.accentblue,
  },
});
