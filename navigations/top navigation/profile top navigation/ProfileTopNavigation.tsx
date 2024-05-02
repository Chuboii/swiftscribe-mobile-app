import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../../../screens/home screen/HomeScreen";
import ForYouScreen from "../../../screens/for you screen/ForYouScreen";
import FollowingScreen from "../../../screens/following screen/FollowingScreen";
import {
    Text,
    View,
    FlatList,
    Animated,
    ScrollView,
    Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PageHeader from "../../../components/page header/PageHeader";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./ProfileTopNavigation.style";
import { AntDesign } from "@expo/vector-icons";
import FollowScreen from "../../../screens/follow screen/FollowScreen";
import theme from "../../../utils/theme/theme/theme";
import { navigateToEditProfilePage, navigateToNotificationPage } from "../../../utils/navigations/navigations";
import ListScreen from "../../../screens/list screen/ListScreen";
import ReadingHistory from "../../../screens/reading history/ReadingHistory";
import SavedLists from "../../../screens/saved lists/SavedLists";
import StoriesScreen from "../../../screens/stories screen/StoriesScreen";
import AboutScreen from "../../../screens/about screen/AboutScreen";
import ProfileHeaderTemplate from "../../../components/profile header template/ProfileHeaderTemplate";
import WritePostIcon from "../../../components/write post icon/WritePostIcon"


const screenHeight = Dimensions.get("window").height;

const Tab = createMaterialTopTabNavigator();

export default function ProfileTabNavigation({ navigation }) {
    const navigateToEditProfile = () => {
        navigateToEditProfilePage(navigation);
    };


    return (
        <>
        <WritePostIcon/>
            <ProfileHeaderTemplate username="Joe Doe" handleFunction={navigateToEditProfile} />
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarShowIcon: true,
                    tabBarIndicatorStyle: { backgroundColor: "orangered", height: 1 },
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontFamily: "kanit-regular",
                        color: theme().text,
                    },
                    tabBarItemStyle: { width: 100 },
                    tabBarBounces: true,
                    tabBarStyle: { backgroundColor: theme().background },
                    tabBarScrollEnabled: false,
                })}
            >
                <Tab.Screen name="stories" component={StoriesScreen} />
                <Tab.Screen
                    name="your lists"
                    component={ListScreen}
                    options={{ tabBarLabel: "Lists" }}
                />
                <Tab.Screen name="About" component={AboutScreen} />
            </Tab.Navigator >
        </>
    );
}
