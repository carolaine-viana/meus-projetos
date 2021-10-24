import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  card: {
    width: '100%',
    backgroundColor: theme.colors.accentyellow,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 20,
  },
});
