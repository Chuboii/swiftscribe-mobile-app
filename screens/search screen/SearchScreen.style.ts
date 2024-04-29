import { StyleSheet } from "react-native";
import theme from "../../utils/theme/theme/theme";


export const styles = StyleSheet.create({
    container: {
        padding: 10,
        
    },
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },
    wrap1: {
        flexDirection: "row",
        alignItems: "center",
     
    },
    wrapBox: {
      marginTop:30  
    },
    searchTerm: {
        marginLeft: 20,
        color:theme().text,
      fontFamily:"kanit-regular"  
    },
    title: {
        fontFamily: "kanit-medium",
        textTransform: "capitalize",
        color: theme().text,
        fontSize: 19,
        marginBottom:20
    },
    icon: {
        fontSize: 25,
        color: theme().text
    },
    inputBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: theme().gray,
        borderRadius: 30,
        padding: 12,
        paddingLeft: 20,
        flex: 1,
        marginLeft:15
    },
    input: {
        paddingLeft: 10,
        fontFamily: "kanit-regular",
        flex:1
    },
    wrap: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
     
    }
})