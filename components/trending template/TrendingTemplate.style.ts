import { Dimensions, StyleSheet } from "react-native";
import theme from "../../utils/theme/theme/theme";


const screenWidth = Dimensions.get("window").width

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginTop:20
    },
    wrap: {
        flexDirection: "row",
        alignItems: "center",
      
    },
    num: {
        fontFamily: "climate-regular",
        fontSize: 25,
    },
    wrapper: {
        marginLeft:20
    },
    name: {
        fontFamily: "kanit-medium",
        textTransform: "capitalize",
        marginLeft:6
    },
    title: {
        fontFamily: "kanit-regular",
        width: screenWidth / 1.4,
        color: theme().text,
        marginVertical:4
    },
    text: {
        color: theme().gray2,
        fontFamily:"kanit-regular",
        marginRight:5
        
    },
    profileImg: {
        width: 30,
        height: 30,
        borderRadius:50
    }
})