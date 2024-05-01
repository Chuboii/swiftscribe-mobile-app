import { Dimensions, StyleSheet } from "react-native";
import theme from "../../utils/theme/theme/theme";

const screenWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  container: {
    borderBottomColor: theme().gray,
    borderBottomWidth: 0.5,
    paddingVertical: 25,
  },
  desc: {
    fontFamily: "kanit-regular",
    fontSize: 14,
    width: screenWidth - 160,
    color: theme().gray2,
    marginTop: 5,
  },
  icon1: {
    marginRight: 15,
  },
  wrapper2: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapper1: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  name: {
    fontFamily: "kanit-regular",
    marginLeft: 10,
    textTransform: "capitalize",
    color: theme().text,
  },
  btn: {
    marginLeft: 30,
  },
  profileImg: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  postImg: {
    width: 140,
    height: 90,
  },
  wrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: theme().text,
  },
  title: {
    fontFamily: "kanit-bold",
    fontSize: 18,
    width: screenWidth - 160,
    color: theme().text,
  },
  text: {
    fontFamily: "kanit-regular",
    marginRight: 10,
    color: theme().gray2,
  },
});
