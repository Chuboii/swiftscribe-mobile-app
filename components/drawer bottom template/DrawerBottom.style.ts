import { StyleSheet } from "react-native";
import theme from "../../utils/theme/theme/theme";

export const styles = StyleSheet.create({
  container: {
    height: "73%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#0C0C0C",
    zIndex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
    elevation: 36,
  },
  btnPub: {
    backgroundColor: "green",
    padding: 20,
    borderRadius: 30,
    marginTop: 30,
  },
  btnTxt: {
    color: theme().btnText,
    textAlign: "center",
    fontFamily: "kanit-medium",
  },
  wrapBottom: {
    paddingBottom: 170,
  },
  icon: {
    marginRight: 10,
    fontSize: 19,
  },
  category: {
    borderColor: "white",
    borderWidth: StyleSheet.hairlineWidth,
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categoryText: {
    color: "white",
    fontFamily: "kanit-regular",
  },
  categorySelected: {
    backgroundColor: "white",
    borderColor: "white",
    borderWidth: StyleSheet.hairlineWidth,
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  categorySelectedTxt: {
    color: "black",
    fontFamily: "kanit-regular",
  },
  wrapper: {},
  wrap: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontFamily: "kanit-regular",
  },
  subtitle: {},
  text: {
    color: "gray",
    fontFamily: "kanit-regular",
    marginRight: 5,
  },
  btn: {
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 25,
  },
  tag: {
    color: "white",
    fontFamily: "kanit-regular",
    backgroundColor: "gray",
    padding: 10,
    minWidth: 70,
    borderRadius: 20,
    textAlign: "center",
    margin: 5,
  },
  catInputBox: {
    position: "relative",
    marginTop: 20,
  },
  catInputTxt: {
    color: "white",
    position: "absolute",
    top: -10, // Adjust this value to position the text as desired
    left: 10, // Adjust this value to position the text as desired
    backgroundColor: "#0C0C0C",
    paddingHorizontal: 5,
  },
  catInput: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: "white",
    fontFamily: "kanit-regular",
  },
  catBtn: {
    padding: 15,
    backgroundColor: "orangered",
    marginTop: 20,
    borderRadius: 30,
  },
  catBtnTxt: {
    color: "white",
    fontFamily: "kanit-medium",
    textAlign: "center",
  },
  tagInput: {
    borderColor: "white",
    padding: 10,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    marginTop: 10,
  },
  tagTxt: {
    color: "white",
    flex: 1,
    fontFamily: "kanit-regular",
    textAlign: "center",
    fontSize: 20,
  },
  tagIcon: {},
  tagHead: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  tagWrap: {
    paddingVertical: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
