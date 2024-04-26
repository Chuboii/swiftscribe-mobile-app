import { StyleSheet } from "react-native";
import theme from "../../../utils/theme/theme/theme";


export const styles = StyleSheet.create({
    container: {
        padding:10
    },
    btnText: {
        textAlign: "center",
        fontFamily: "kanit-medium",
        fontSize: 17,
        color: theme().primary,
        alignSelf: "center",
        flex:1
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
    },
    title: {
        paddingTop: 50,
        fontSize: 25,
        color: theme().text,
        textAlign: 'center',
        paddingBottom: 40,
        fontFamily:"kanit-bold"
    },
    box: {
        alignItems: "center",
        flexDirection: "row",
        textAlign: "center",
        fontFamily: "kanit-medium",
        fontSize: 15,
        color: theme().text
    },
      icon1: {
        width: 217 / 2.4,
        height: 158 / 2.4,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    nextButton: {
        marginTop: 30,
        borderRadius: 60,
        height: 60,
        backgroundColor: theme().secondary,
        justifyContent: 'center',
        opacity:.6,
        minWidth: 300,
        marginBottom: 100,
      },
      nextButtonText: {
        textAlign: 'center',
        fontSize: 20,
        color: theme().btnText,
        fontWeight: '700',
      },
      subTitle: {
        paddingTop: 30,
        color: theme().text,
          textAlign: 'center',
        fontFamily:"kanit-medium"
      },
})