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
  wrap: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  title: {
    color: "white",
    backgroundColor: "gray",
    width: 200,
    marginVertical: 5,
    borderRadius: 5,
    fontFamily: "kanit-regular",
    padding: 5,
  },
  subtitle: {
    color: "white",
    fontFamily: "kanit-regular",
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "gray",
    padding: 5,
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
});
