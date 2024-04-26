import { StyleSheet } from "react-native";
import theme from "../../../utils/theme/theme/theme";


export const styles = StyleSheet.create({
    container: {
        padding:10
    },
    btnText: {
        textAlign: "center",
        fontFamily: "kanit-medium",
        fontSize:17
    },
    btnStyles: {
        backgroundColor: theme().gray,
        padding: 20,
        marginTop:30,
        borderRadius:30
    },
    text: {
        fontFamily: "kanit-regular",
        color: theme().text
    },
    icon: {
        fontSize: 25,
        color:theme().text
    },
    iconBox: {
      
    },
    input: {
        flex: 1,
        paddingHorizontal:15
    },
    wrap: {
      marginTop:20  
    },
    inputBox: {
        borderBottomColor: theme().border,
        borderBottomWidth: .5,
        padding: 5,
        paddingVertical: 10,
       flexDirection:"row"
    },
    emailIcon: {
        color: theme().text
    },
    wrapper: {
        marginTop:50
    }
})