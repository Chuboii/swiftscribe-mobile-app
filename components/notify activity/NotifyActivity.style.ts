import { Dimensions, StyleSheet } from "react-native";

import theme from "../../utils/theme/theme/theme";


const screenWidth = Dimensions.get("window").width

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomColor: theme().gray,
        borderBottomWidth: .5,
        paddingVertical: 25,
        flexDirection: "row",
        justifyContent:"space-between"
    },
    date:{
      fontFamily:"kanit-medium"
    },
    wrapper: {
        flexDirection: "row",
        
    },
    box: {
        marginLeft:10
    },
    comment:{
      width:(screenWidth - 10) - 200,
      fontFamily:"kanit-regular",
      color: theme().text
    },
    name: {
        fontFamily: "kanit-medium",
        textTransform: "capitalize",
        color: theme().text
    },
    btn: {
      backgroundColor: theme().gray,
      marginRight:10,
      paddingHorizontal:20,
      flexDirection:'row',
      alignItems:"center",
      paddingVertical:7,
      borderRadius:30
    },
    btnWrap:{
      flexDirection: "row",
      marginTop:10
    },
    profileImg: {
        width: 60,
        height: 60,
        borderRadius:50
    },
    postImg: {
        width: 100,
        height:80,
        borderRadius:10
    },
    wrap: {
        flexDirection: "row"
    },
    icon: {
      color: theme().btnText,
      fontSize:16
    },
    iconHeart:{
      zIndex:1,
      marginLeft:-20,
      backgroundColor:"red",
      height:23,
      width:23,
      borderRadius:50,
      textAlign:'center',
      justifyContent:"center",
      alignItems:"center"
    },
    btnText:{
      fontFamily:"kanit-regular",
      textTransform:"capitalize",
      
    },
    btnIcon:{
      left:5
    },
    iconBox:{
      zIndex:1,
      marginLeft:-20,
      backgroundColor:theme().secondary,
      height:25,
      width:25,
      borderRadius:50,
      textAlign:'center',
      fontSize:17,
      justifyContent:"center",
      alignItems:"center"
    },
    title: {
        fontFamily: "kanit-bold",
        fontSize: 18,
        width: (screenWidth - 160),
        color: theme().text
    },
   text:{
       fontFamily: "kanit-regular",
       marginRight: 10,
       color: theme().gray2
    }
})