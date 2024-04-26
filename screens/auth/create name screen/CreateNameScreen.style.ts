import { StyleSheet } from "react-native";
import theme from "../../../utils/theme/theme/theme";


export const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        justifyContent:"space-between"
    },
    wrapper: {
     
        
    },
    iconBox: {
        marginVertical: 10
    },
    icon: {
        color: theme().text
    },
    title: {
        fontFamily: "kanit-bold",
        fontSize: 30,
        marginTop: 30,
        color: theme().text
    },
    textInput: {
        paddingVertical: 10,
        borderBottomColor: theme().border,
        borderBottomWidth: .5,
        fontFamily: "kanit-regular",
        color: theme().text
    },
    text1: {
        fontFamily: "kanit-regular",
        marginVertical: 10,
        color: theme().text
    },
    text2: {
        fontFamily: "kanit-medium",
        color: theme().text
    },
    btnStyle: {
        backgroundColor: theme().primary,
        padding: 17,
        borderRadius:40
    },
    btnText: {
        color: theme().btnText,
        textAlign: 'center',
        fontFamily: "kanit-medium",
        fontSize:17
    }
})