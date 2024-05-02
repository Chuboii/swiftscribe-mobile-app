import { StyleSheet, Dimensions} from "react-native";
import theme from "../../utils/theme/theme/theme";

const screenWidth = Dimensions.get("window").width

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 20,
    marginTop: 30,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: "kanit-regular",
    marginRight: 8,
    fontSize: 16,
  },
  name: {
    fontFamily: "kanit-bold",
    fontSize: 30,
    marginBottom: 5,
    textTransform: "capitalize",
  },
  btnText: {
    textAlign: "center",
    fontFamily: "kanit-medium",
  },
  btn: {
    padding: 10,
    backgroundColor: theme().gray,
    borderRadius: 30,
    paddingVertical: 16,
    marginTop: 20,
    elevation: 3,
  },
  recommendText:{
    width: screenWidth - 150,
    fontFamily:"kanit-regular",
    marginTop:10
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  btnWrap: {},
  wrap: {
    flexDirection: "row",
  },
  box: {
    marginLeft: 10,
  },
});
