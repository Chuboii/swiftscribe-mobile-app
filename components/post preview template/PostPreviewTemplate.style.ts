import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.2,
    paddingVertical: 10,
    borderBottomColor: "gray",
  },
  wrapper: {
    padding: 10,
  },
  box: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageIcon: {
    borderStyle: "dotted",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    height: 100,
    minWidth: 100,
    justifyContent: "center",
    padding: 5,
  },
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  title: {
    color: "black",
    backgroundColor: "white",
    width: 210,
    marginVertical: 5,
    borderRadius: 5,
    fontFamily: "kanit-regular",
    padding: 10,
  },
  subtitle: {
    color: "black",
    fontFamily: "kanit-regular",
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "white",
    padding: 10,
    width: 210,
  },
  btn: {
    alignSelf: "flex-end",
  },
  text: {
    fontFamily: "kanit-medium",
    color: "green",
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  name: {
    color: "white",
    marginLeft: 10,
    fontFamily: "kanit-medium",
    fontSize: 15,
  },
  image: {
    borderRadius: 10,
    width: 100,
    height: 100,
  },
});
