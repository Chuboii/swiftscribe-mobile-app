import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../../../screens/home screen/HomeScreen";
import ForYouScreen from "../../../screens/for you screen/ForYouScreen";
import FollowingScreen from "../../../screens/following screen/FollowingScreen";
import { Text, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PageHeader from "../../../components/page header/PageHeader";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./HomeTopNavigation.style";
import { AntDesign } from "@expo/vector-icons";
import FollowScreen from "../../../screens/follow screen/FollowScreen";
import theme from "../../../utils/theme/theme/theme";
import { navigateToNotificationPage } from "../../../utils/navigations/navigations";
const screenHeight = Dimensions.get("window").height;

const Tab = createMaterialTopTabNavigator();

export default function BookmarkTabNavigation({ navigation }) {
  const navigateToNotification = () => {
    navigateToNotificationPage(navigation);
  };

  return (
    <>
      <PageHeader
        containerStyle={styles.container}
        text="Home"
        textStyle={styles.text}
        btnStyle={styles.btn}
        button={
          <Ionicons
            size={24}
            name="notifications-outline"
            style={styles.icon}
          />
        }
      />

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowIcon: true,
          tabBarIndicatorStyle: { backgroundColor: "orangered", height: 1 },
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "kanit-regular",
            color: theme().text,
          },
          tabBarItemStyle: { width: 120 },
          tabBarBounces: true,
          tabBarStyle: { backgroundColor: theme().background },
          tabBarScrollEnabled: false,
        })}
        initialRouteName="for you"
      >
        <Tab.Screen name="follow" component={FollowScreen} />
        <Tab.Screen
          name="for you"
          component={ForYouScreen}
          options={{ tabBarLabel: "for you" }}
        />
        <Tab.Screen name="following" component={FollowingScreen} />
      </Tab.Navigator>
    </>
  );
}
