import { useFonts } from 'expo-font'


const generateFonts = () => {
    const [fontsLoaded, fontError] = useFonts({
        "kanit-bold": require("../../assets/font/kanit/Kanit-Bold.ttf")
    })

    if (!fontsLoaded && !fontError) {
        return null;
    }
}

export default generateFonts