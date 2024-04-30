import { Tabs } from 'react-native-collapsible-tab-view'
import ForYouScreen from '../../screens/for you screen/ForYouScreen'

const Example = () => {
   return (
     <Tabs.Container renderHeader={250}>
       <Tabs.Tab name="A">
         <ForYouScreen />
       </Tabs.Tab>
       <Tabs.Tab name="B">
         <ForYouScreen />
       </Tabs.Tab>
    </Tabs.Container>
   )


// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import HomeScreen from '../../screens/home screen/HomeScreen';
// import ForYouScreen from '../../screens/for you screen/ForYouScreen';
// import FollowingScreen from '../../screens/following screen/FollowingScreen';
// import {Text, View,FlatList,Animated, ScrollView, Dimensions} from "react-native"
// import { SafeAreaView } from 'react-native-safe-area-context'
// import PageHeader from "../../components/page header/PageHeader"
// import { Ionicons } from '@expo/vector-icons';
// import {styles} from "./HomeTopNavigation.style"
// import { AntDesign } from '@expo/vector-icons';
// import {NavigationContainer, useRoute} from "@react-navigation/native"
// import FollowScreen from '../../screens/follow screen/FollowScreen';
// import theme from '../../utils/theme/theme/theme';
// import { navigateToNotificationPage } from "../../utils/navigations/navigations"
// import {  useWindowDimensions } from 'react-native';
// import { TabView, SceneMap } from 'react-native-tab-view';
// import { useState } from 'react';

// const screenHeight = Dimensions.get("window").height


// const Tab = createMaterialTopTabNavigator();


// const renderScene = SceneMap({
//   first: ForYouScreen,
//   second: FollowingScreen,
// });

// export default function HomeTabNavigation({navigation}) {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = useState(0);
//   const [routes] = useState([
//     { key: 'first', title: 'First' },
//     { key: 'second', title: 'Second' },
//   ]);


//  const navigateToNotification  = () =>{
//    navigateToNotificationPage(navigation)
//  }
 
//   return (
   
//       <TabView
        
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       initialLayout={{ width: layout.width }}
//     />
//       {/* <ScrollView>
      
//      <View>
//     <Tab.Navigator
//         screenOptions={({ route }) => ({

//     tabBarShowIcon:true,
//     tabBarIndicatorStyle:{backgroundColor:"orangered", height:1},
//     tabBarLabelStyle: { fontSize: 12, fontFamily:"kanit-regular", color: theme().text},
//     tabBarItemStyle: { width: 100 },
//    tabBarBounces:true,
//     tabBarStyle: { backgroundColor: theme().background },
//               tabBarScrollEnabled: false,
  
    
//   })}
//   initialRouteName="for you">
  
//   <Tab.Screen
//         name="follow"
//         component={FollowScreen}
//         options={{ tabBarLabel: 'Suggestions' }}
//       />
//       <Tab.Screen name="for you" component={ForYouScreen} />
//       <Tab.Screen name="following" component={FollowingScreen} />

//           </Tab.Navigator>
//        </View>
//         </ScrollView>
//        */}

//   );
// }