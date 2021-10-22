import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: getStatusBarHeight() + 1,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    borderRadius: 10,
    marginRight: 5,
  },
  searchBar: {
    width: "90%",
    borderRadius: 10,
    paddingHorizontal: 5,
    backgroundColor: theme.colors.ink03,
  },
});
