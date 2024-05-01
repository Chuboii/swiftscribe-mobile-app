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
import { styles } from "./BookmarkTopNavigation.style";
import { AntDesign } from "@expo/vector-icons";
import FollowScreen from "../../../screens/follow screen/FollowScreen";
import theme from "../../../utils/theme/theme/theme";
import { navigateToNotificationPage } from "../../../utils/navigations/navigations";
import ListScreen from "../../../screens/list screen/ListScreen";
import ReadingHistory from "../../../screens/reading history/ReadingHistory";
import SavedLists from "../../../screens/saved lists/SavedLists";

const screenHeight = Dimensions.get("window").height;

const Tab = createMaterialTopTabNavigator();

export default function BookmarkTabNavigation({ navigation }) {
    const navigateToNotification = () => {
        navigateToNotificationPage(navigation);
    };

    return (
        <>
            <PageHeader
                containerStyle={styles.containerPage}
                text="Your library"
                textStyle={styles.textStyle}
                btnStyle={styles.btnStyle}
                button={<Text style={styles.btnText}>New List</Text>}
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
            >
                <Tab.Screen name="your lists" component={ListScreen} />
                <Tab.Screen
                    name="saved lists"
                    component={SavedLists}
                    options={{ tabBarLabel: "Saved lists" }}
                />
                <Tab.Screen name="Reading history" component={ReadingHistory} />
            </Tab.Navigator>
        </>
    );
}
