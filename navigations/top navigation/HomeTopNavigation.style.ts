import {StyleSheet} from "react-native"
import theme from "../../utils/theme/theme/theme"
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
  // container:{
  //   flexDirection:"row",
  //   padding:20,
  //   paddingVertical:30,
  //   justifyContent:"space-between",
  //   alignItems:"center"
  // },
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
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
})