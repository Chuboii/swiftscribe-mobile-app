import {StyleSheet} from "react-native"
import theme from "../../utils/theme/theme/theme"

export const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    padding:10,
    paddingVertical:30,
    justifyContent:"space-between",
    alignItems:"center"
  },
  text:{
    fontFamily:"kanit-bold",
    fontSize: 30,
    color: theme().text
  },
  btn:{
    
  },
  icon:{
    color: theme().text
  },
  btnText:{
    color:theme().btnText
  }
})