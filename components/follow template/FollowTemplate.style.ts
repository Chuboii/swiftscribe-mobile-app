import { Dimensions, StyleSheet } from "react-native";
import theme from "../../utils/theme/theme/theme";

const screenWidth = Dimensions.get("window").width
export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        paddingVertical: 13,
    },
    wrapper: {
        flexDirection: "row",
         
    },
    wrap: {
        flexDirection: "column",
        marginLeft:15 
    },
    btn: {
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
        paddingVertical: 8,
        marginTop:5,
        borderRadius:30,
        backgroundColor: theme().primary
    },
    btnText: {
        color: theme().text,
        fontFamily: "kanit-medium",
        textTransform:"capitalize"
    },
    name: {
        fontFamily: "kanit-medium",
        textTransform:"capitalize",
        color: theme().text,
        fontSize:17
    },
    bio: {
        fontFamily: "kanit-regular",
        color: theme().gray2,
        width: (screenWidth - 160),
    },
    profileImg: {
        width: 35,
        height: 35,
        borderRadius:50
    }
})