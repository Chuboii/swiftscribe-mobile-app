import { StyleSheet } from "react-native";
import theme from "../../../utils/theme/theme/theme";


export const styles = StyleSheet.create({
    container: {
        padding: 10,
        justifyContent: 'space-between',
        flex:1
    },
    wrapper: {
        
    },
    iconBox: {
        marginTop:10
    },
    icon: {
        
    },
    title: {
        fontFamily: "kanit-bold",
        fontSize: 30,
        marginTop:50
    },
    plus: {
        alignSelf: "center",
        fontSize: 50,
        color:theme().primary
    },
    box: {
        borderStyle: "dashed",
        justifyContent:"center",
        borderWidth: 1.5,
        height:150,
        borderColor: theme().border,
        marginTop:30
    },
    image: {
        zIndex: 1,
        flex:1,
        width:100
    },
    btnText: {
        color: theme().btnText,
        textAlign: "center",
        fontFamily:"kanit-medium"
    },
    btnStyle: {
     
        backgroundColor: theme().primary,
        padding: 19,
        borderRadius:30
    }
})