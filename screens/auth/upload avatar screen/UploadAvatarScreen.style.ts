import { StyleSheet } from "react-native";
import theme from "../../../utils/theme/theme/theme";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width


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
        fontSize: 50,
        color: theme().primary,
    },
    box: {
        borderStyle: "dashed",
        justifyContent:"center",
        borderWidth: 1.5,
        alignItems:'center',
        borderColor: theme().border,
        marginTop: 30,
        height:200
    },
    image: {
        height: 200,
        width:screenWidth - 25
    },
    btnText: {
        color: theme().btnText,
        textAlign: "center",
        fontFamily:"kanit-medium"
    },
    imageBox: {
       display:"none"
    },
    btnStyle: {
     
        backgroundColor: theme().primary,
        padding: 19,
        borderRadius:30
    }
})