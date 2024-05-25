import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StackNavigtion from "./navigations/stack navigation/StackNavigtion";
import { useEffect } from "react";
import generateFonts from "./utils/fonts/fonts";
import { useFonts } from "expo-font";
import Theme from "./utils/theme/theme/theme";
import theme from "./utils/theme/theme/theme";
import { Provider } from "react-redux";
import { store } from "./lib/redux/store/store";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "kanit-bold": require("./assets/font/kanit/Kanit-Bold.ttf"),
    "kanit-regular": require("./assets/font/kanit/Kanit-Regular.ttf"),
    "kanit-medium": require("./assets/font/kanit/Kanit-Medium.ttf"),
    "climate-regular": require("./assets/font/climate crisis/ClimateCrisis-Regular.ttf"),
  });

  useEffect(() => {
    theme();
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <>
      <Provider store={store}>
        <StackNavigtion />
      </Provider>
    </>
  );
}
