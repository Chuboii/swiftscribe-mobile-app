import { StyleSheet } from "react-native";
import theme from "../../utils/theme/theme/theme";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 17,
    textDecorationStyle: "dashed",
    textDecorationColor: "orangered",
    textDecorationLine: "underline",
  },
  text1: {},
  containerStyle: {
    marginTop: 0,
    paddingVertical: 0,
  },
  profileHeadBtn: {
    backgroundColor: "transparent",
    borderRadius: 0,
    width: 100,
    elevation: 0,
  },
  wrapperStyle: {
    alignItems: "flex-start",
  },
  profileHeadBtnText: {
    textAlign: "left",
  },
  input: {},
  btn: {
    padding: 12,
    backgroundColor: theme().green,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  box: {},
  btnText: {
    color: theme().btnText,
    fontFamily: "kanit-medium",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
