import { StyleSheet } from "react-native";
import theme from "../../utils/theme/theme/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme().gray,
    padding: 10,
    paddingVertical: 30,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrap1: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },
  box: {
    marginLeft: 15,
  },
  name: {
    fontFamily: "kanit-regular",
    textTransform: "capitalize",
    marginBottom: 5,
  },
  boxIcon: {
    alignItems: "flex-end",
  },
  stories: {
    fontFamily: "kanit-regular",
    marginRight: 20,
  },
  icon: {
    color: theme().text,
    fontSize: 17,
  },
  icon1: {
    marginRight: 25,
  },
  nameList: {
    fontFamily: "kanit-medium",
    fontSize: 19,
  },
  profileImg: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
});
