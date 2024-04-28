import BookmarkScreen from '../../screens/bookmark screen/BookmarkScreen'
import SearchScreen from '../../screens/search screen/SearchScreen'
import ProfileScreen from '../../screens/profile screen/ProfileScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeTabNavigation from '../top navigation/HomeTopNavigation';

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: 'white' }}>
      <Tab.Screen  options={{ tabBarLabel: 'Home' }} name='home' component={HomeTabNavigation} />
      <Tab.Screen name='search' component={SearchScreen} />
      <Tab.Screen name='bookmark' component={BookmarkScreen} />
      <Tab.Screen name='profile' component={ProfileScreen}/>
    </Tab.Navigator>
  )
}

export default TabNavigation