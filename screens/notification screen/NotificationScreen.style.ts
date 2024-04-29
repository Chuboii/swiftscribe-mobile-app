import { StyleSheet } from "react-native";

import theme from "../../utils/theme/theme/theme";

export const styles = StyleSheet.create({
    container: {
        padding:10
    },
    text: {
        fontFamily: "kanit-bold",
        color: theme().text,
        fontSize:25,
        marginLeft:20
    },
    header:{
      flexDirection:"row",
      alignItems:"center",
      padding:20
    },
    icon: {
        fontSize: 25,
        color:theme().text
    },
    iconBox: {
      
    },
    wrap: {
      marginTop:20  
    },
    wrapper: {
        marginTop:0
    }
})

