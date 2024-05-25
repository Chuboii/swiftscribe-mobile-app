import { Dimensions, StyleSheet } from "react-native";
import theme from "../../utils/theme/theme/theme";

const screenWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    paddingVertical: 13,
  },
  wrapper: {
    flexDirection: "row",
  },
  wrap: {
    flexDirection: "column",
    marginLeft: 15,
  },
  btn: {
    //width: 70,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingVertical: 7,
    marginTop: 5,
    borderRadius: 30,
    right: 5,
    borderColor: theme().primary,
    borderWidth: 1,
    backgroundColor: theme().background,
  },
  btnText: {
    color: theme().primary,
    fontFamily: "kanit-medium",
    textTransform: "capitalize",
  },
  name: {
    fontFamily: "kanit-medium",
    textTransform: "capitalize",
    color: theme().text,
    fontSize: 18,
  },
  bio: {
    fontFamily: "kanit-regular",
    color: theme().gray2,
    width: screenWidth - 160,
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
