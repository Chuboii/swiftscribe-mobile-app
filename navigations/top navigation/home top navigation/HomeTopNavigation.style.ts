import { StatusBar, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../../../utils/theme/theme/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    paddingVertical: 20,
    marginTop: StatusBar.currentHeight,
    justifyContent: "space-between",
    alignItems: "center",
  },
  scene: { flex: 1 },
  text: {
    fontFamily: "kanit-bold",
    fontSize: 30,
    color: theme().text,
  },
  btn: {},
  icon: {
    color: theme().text,
  },
  btnText: {
    color: theme().btnText,
  },
});
