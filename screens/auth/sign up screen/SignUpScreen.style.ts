import { StyleSheet } from "react-native";
import { color } from "../../../utils/theme/light/lightTheme";
import theme from "../../../utils/theme/theme/theme";

export const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        flex: 1,
        padding: 10,
        backgroundColor:theme().background
    },
    btnStyles: {
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: theme().border,
        padding: 19,
        borderRadius:30
    },
    logoImg: {
        width: 100,
        height:100
    },
    logoTxt: {
        fontSize: 30,
        color: theme().text,
        fontFamily: 'climate-regular'
    },
    box: {
        padding: 15,
    },
    btnText: {
        fontFamily: "kanit-medium",
        flex: 1,
        fontSize:17,
        textAlign: 'center',
        color:theme().text
    },
    imgStyles: {
        width: 20,
        height:20
    },
    wrap: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 100,
        paddingRight:30
    },
    btnWrapper: {
      marginTop:30  
    },
    text: {
        fontSize: 17,
        color:theme().text,
        fontFamily:"kanit-medium"
    }
})