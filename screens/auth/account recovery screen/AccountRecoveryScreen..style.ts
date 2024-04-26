import { StyleSheet } from "react-native";
import theme from "../../../utils/theme/theme/theme";


export const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        backgroundColor:theme().background
    },
    icon: {
      color: theme().text  
    },
    iconBox: {
        
    },
    title: {
        marginBottom: 30,
        fontSize:30,
        fontFamily: "kanit-bold",
        color:theme().text
    },
    text: {
        textAlign: "center",
        marginBottom: 30,
        fontSize: 17,
        color:theme().text
    },
    btnText: {
        color: theme().btnText,
        textAlign: "center",
        fontSize:17
    },
    btnStyle: {
        backgroundColor: theme().primary,
        padding: 15,
        borderRadius: 30,
        width: "100%",
        marginBottom:50
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: "center",
        flex:1
    }
})