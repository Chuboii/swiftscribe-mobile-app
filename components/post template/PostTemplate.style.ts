import { Dimensions, StyleSheet } from "react-native";
import theme from "../../utils/theme/theme/theme";

const screenWidth = Dimensions.get("window").width

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomColor: theme().gray,
        borderBottomWidth: .5,
        paddingVertical: 25,
    },
    wrapper: {
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop:10  
    },
    box: {
        flexDirection: "row",
        justifyContent:"space-between",
        marginTop: 10,
        alignItems:"center"
    },
    name: {
        fontFamily: "kanit-regular",
        marginLeft: 10,
        textTransform: "capitalize",
        color: theme().text
    },
    btn: {
      marginLeft:35
    },
    profileImg: {
        width: 30,
        height: 30,
        borderRadius:50
    },
    postImg: {
        width: 140,
        height:90
    },
    wrap: {
        flexDirection: "row",
        alignItems:"center"
    },
    icon: {
      color: theme().gray
    },
    title: {
        fontFamily: "kanit-bold",
        fontSize: 20,
        width: (screenWidth - 160),
        color: theme().text
    },
   text:{
       fontFamily: "kanit-regular",
       marginRight: 10,
       color: theme().gray2
    }
})