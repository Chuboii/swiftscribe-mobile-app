import { StyleSheet } from "react-native";
import theme from "../../utils/theme/theme/theme";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  wrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    marginRight: 25,
  },
  imageBox: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  text: {
    fontFamily: "kanit-regular",
    marginRight: 7,
  },
  name: {
    fontFamily: "kanit-medium",
    fontSize: 17,
  },
  btnText: {
    fontFamily: "kanit-medium",
    fontSize: 17,
    marginLeft: 10,
    color: theme().primary,
  },
  title: {
    fontFamily: "kanit-medium",
    fontSize: 31,
    textTransform: "capitalize",
    width: "100%",
  },
  subTitle: {
    fontFamily: "kanit-regular",
    fontSize: 20,
    color: "gray",
    marginTop: 5,
    marginBottom: 20,
  },
  wrapper: {},
});
