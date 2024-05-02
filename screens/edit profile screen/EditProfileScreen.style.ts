import { StyleSheet } from "react-native";
import theme from "../../utils/theme/theme/theme";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 20,
fontFamily: "kanit-medium"
  },
  text1: {
    fontFamily: "kanit-regular"
  },
  containerStyle: {
    marginTop: 20,
    paddingVertical: 0,
    padding:0
    
  },
  profileHeadBtn: {
    backgroundColor: "transparent",
    borderRadius: 0,
    width: 100,
    elevation: 0,
    marginTop:0,
    paddingVertical:0,
    padding:0
  },
  wrapperStyle: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    
  },
  profileHeadBtnText: {
    textAlign: "left",
    color:"green",
    fontSize:16
  },
  input: {
    borderBottomColor:'black',
    borderBottomWidth:.5,
    paddingVertical:10,
    fontFamily:"kanit-regular"
  },
  btn: {
    padding: 12,
    backgroundColor: theme().green,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  box: {
    paddingVertical:10
  },
  btnText: {
    color: theme().btnText,
    fontFamily: "kanit-medium"
  },
  boxWrap:{
    padding:10,
    marginTop:30
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
