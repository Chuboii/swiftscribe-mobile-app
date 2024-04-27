import { StyleSheet } from "react-native";
import theme from "../../../utils/theme/theme/theme";


export const styles = StyleSheet.create({
    container: {
        padding:10
    },
    inputBox: {
        padding: 10,
        paddingVertical: 15,
        marginTop: 10,
        borderColor: theme().border,
        borderWidth: .5,
        borderRadius: 5,
        flexDirection: "row",
        alignItems:"center"
    },
    title: {
        paddingTop: 50,
        fontSize: 25,
        color: theme().text,
        textAlign: 'center',
        paddingBottom: 40,
        fontFamily:"kanit-bold"
    },
    input: {
        flex: 1,
        color:theme().text,
        fontFamily:"kanit-regular"
    },
    iconBox: {
        marginTop:10,
        marginBottom:50
    },
    inputIcon: {
        color:theme().text,
    },
    wrapper: {
        marginTop:40
    },
    wrap: {
        flexDirection: 'row',
        alignItems: "center",
        marginVertical:6
    },
    icon: {
        color:theme().text,
    },
    text: {
        fontFamily: "kanit-regular",
        marginLeft: 10,
        color:theme().text
    },
    btnStyle: {
        padding:20,
        backgroundColor: theme().secondary,
        borderRadius: 30,
        marginTop: 30,
        opacity:.5
    },
    btnText: {
        textAlign: "center",
        fontFamily:"kanit-medium",
        color:theme().btnText
    }
})