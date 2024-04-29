import { StyleSheet } from "react-native";
import theme from "../../utils/theme/theme/theme";


export const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingBottom:150
    },
    wrapper: {
        
    },
    title: {
        fontFamily: "kanit-medium",
        textTransform: "uppercase",
        color: theme().text,
        fontSize: 17,
        marginLeft:10
    },
    templateContainer: {
        flexDirection: "column",
        width: 200
    },
    templateWrapper: {
      flexDirection:"column"  
    },
    templateWrap: {
     marginLeft:0  
    },
    templateBtn: {
      width:180  
    },
    templateProfileImg: {
        borderRadius: 10,
        width: 180,
        height: 150,
    
    },
    templateBio: {
        width: 185,
        marginVertical:5
    },
    icon: {
        borderColor: theme().border,
        borderWidth: 1,
        borderRadius: 50,
        padding: 3,
        fontSize: 17,
        color: theme().text
    },
    wrap: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
     
    },
    box: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: theme().gray,
        padding: 10,
        borderRadius: 30,
        paddingHorizontal:20
    },
    boxText: {
        marginLeft: 10,
        fontFamily: "kanit-regular",
        color: theme().text
    },
    headerTitle: {
        fontFamily: "kanit-bold",
        textTransform: "capitalize",
        fontSize: 30,
        marginBottom:10,
        padding: 10,
        color: theme().text
    }
})