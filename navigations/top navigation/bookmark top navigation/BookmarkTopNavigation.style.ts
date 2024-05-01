import { StyleSheet } from "react-native";
import theme from "../../../utils/theme/theme/theme";

export const styles = StyleSheet.create({
  container: {},
  containerPage: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textStyle: {
    fontFamily: "kanit-bold",
    fontSize: 30,
    color: theme().text,
  },
  btnStyle: {
    backgroundColor: theme().green,
    padding: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
  },
  btnText: {
    fontFamily: "kanit-regular",
    color: theme().btnText,
  },
});
