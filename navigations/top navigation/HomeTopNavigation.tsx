import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../../screens/home screen/HomeScreen';
import ForYouScreen from '../../screens/for you screen/ForYouScreen';
import FollowingScreen from '../../screens/following screen/FollowingScreen';

const Tab = createMaterialTopTabNavigator();

export default function HomeTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="for you" component={ForYouScreen} />
      <Tab.Screen name="following" component={FollowingScreen} />
    </Tab.Navigator>
  );
}