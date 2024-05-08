import { Dimensions, StatusBar, StyleSheet } from "react-native";

const screenHeight = Dimensions.get("window").height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  btn: {
    padding: 13,
    paddingHorizontal: 30,
    backgroundColor: "green",
    borderRadius: 7,
    marginLeft: 10,
  },
  btnText: { color: "white", fontFamily: "kanit-medium" },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    paddingVertical: 10,
  },
  rich: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#e3e3e3",
  },
  richBar: {
    borderColor: "#efefef",
  },
  spinnerTextStyle: {
    fontFamily: "kanit-medium",
  },
  content: {
    minHeight: 300,
  },
  input: {
    fontFamily: "kanit-bold",
    fontSize: 35,
    borderWidth: 0,
    padding: 10,
  },
  root: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "white",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  editor: {
    flex: 1,
    padding: 0,
    minHeight: 500,
    backgroundColor: "white",
    paddingBottom: 150,
  },
  icon: {
    fontSize: 24,
  },
});
