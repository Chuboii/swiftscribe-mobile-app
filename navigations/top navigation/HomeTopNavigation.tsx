import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../../screens/home screen/HomeScreen';
import ForYouScreen from '../../screens/for you screen/ForYouScreen';
import FollowingScreen from '../../screens/following screen/FollowingScreen';
import {Text, View,FlatList,Animated, ScrollView} from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import PageHeader from "../../components/page header/PageHeader"
import { Ionicons } from '@expo/vector-icons';
import {styles} from "./HomeTopNavigation.style"
import { AntDesign } from '@expo/vector-icons';
import {useRoute} from "@react-navigation/native"
import FollowScreen from '../../screens/follow screen/FollowScreen';
import theme from '../../utils/theme/theme/theme';
import {navigateToNotificationPage} from "../../utils/navigations/navigations"
//import TabBar from "../../components/tab bar/TabBar"
//<AntDesign name="plus" size={24} color="black" />
const Tab = createMaterialTopTabNavigator();
const scrollY = new Animated.Value(0);


export default function HomeTabNavigation({navigation}) {
//  const route = useRoute()
 // console.log(route)
 const navigateToNotification  = () =>{
 //  navigation.navigate("notification")
   navigateToNotificationPage(navigation)
 }
 //navigateToNotificationPage(navigation)
 
 
  return (
    <>
   <PageHeader handleFunction={navigateToNotification} text="Explore" button={<Ionicons name="notifications-outline"
   size={24} style={styles.icon} color="black" />} containerStyle={styles.container}
   textStyle={styles.text} btnStyle={styles.btn}/>

    <Tab.Navigator
    screenOptions={({ route }) => ({
    
    tabBarShowIcon:true,
    tabBarIndicatorStyle:{backgroundColor:"orangered", height:1},
    tabBarLabelStyle: { fontSize: 12, fontFamily:"kanit-regular", color: theme().text},
    tabBarItemStyle: { width: 100 },
    //tabBarIndicatorStyle: {borderBottomWidth:1, borderBottomColor:"red"},
   // tabBarBounces:true,
    tabBarStyle: { backgroundColor: theme().background },
    tabBarScrollEnabled: false,
    
  })}
  initialRouteName="for you">
  
  <Tab.Screen
        name="follow"
        component={FollowScreen}
        options={{ tabBarLabel: 'Suggestions' }}
      />
      <Tab.Screen name="for you" component={ForYouScreen} />
      <Tab.Screen name="following" component={FollowingScreen} />

    </Tab.Navigator>


    </> 
  );
}