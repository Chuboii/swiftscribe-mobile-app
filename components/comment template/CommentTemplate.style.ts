import { StyleSheet } from "react-native";
import theme from "../../utils/theme/theme/theme";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    zIndex: 2000,
    left: 0,
    right: 0,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    elevation: 25,
    maxHeight: "70%",
  },
  icon: {
    fontSize: 19,
  },
  text: {
    fontFamily: "kanit-regular",
    marginLeft: 5,
  },
  header: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTxt: {
    fontSize: 19,
  },
  headerIcon: {},
  wrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  box: {
    alignItems: "center",
  },
  cmmt: {
    fontSize: 15,
  },
  name: {
    fontSize: 16,
    fontFamily: "kanit-bold",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 10,
  },
  btn: {
    justifyContent: "center",
  },
  profile: {
    width: 25,
    height: 25,
    borderRadius: 50,
  },
  input: {
    backgroundColor: theme().gray,
    marginHorizontal: 10,
    padding: 6,
    borderRadius: 7,
    width: "100%",
    fontFamily: "kanit-regular",
  },
  heart: {},
  wrapBox: {
    width: "80%",
    paddingRight: 10,
    alignItems: "flex-start",
  },
  gap: {
    marginTop: 7,
  },
  submit: {
    backgroundColor: theme().primary,
    padding: 8,
    borderRadius: 50,
  },
  footer: {
    padding: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  inputBox: {
    flex: 1,
    marginRight: 15,
  },
  footerIcon: {
    position: "absolute",
    right: 5,
  },
});
