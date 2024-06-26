import SearchScreen from '../../screens/search screen/SearchScreen'
import ProfileScreen from '../../screens/profile screen/ProfileScreen'

import HomeTabNavigation from '../top navigation/home top navigation/HomeTopNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import theme from '../../utils/theme/theme/theme';
import HomeScreen from '../../screens/home screen/HomeScreen'
import ExploreScreen from '../../screens/explore screen/ExploreScreen';
import BookmarkTabNavigation from '../top navigation/bookmark top navigation/BookmarkTopNavigation';
import StoriesScreen from '../../screens/stories screen/StoriesScreen';
import ProfileTabNavigation from '../top navigation/profile top navigation/ProfileTopNavigation';
import React from 'react';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'explore') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'bookmark') {

            iconName = focused ? 'bookmark' : 'bookmark-outline';

          }
          else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';

          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={24} color={color} />
        },
        headerShown: false,
        tabBarActiveTintColor: theme().text,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { backgroundColor: theme().background }
      })}
    >
      <Tab.Screen options={{ tabBarLabel: '' }} name='home'
        component={HomeTabNavigation} />
      <Tab.Screen options={{ tabBarLabel: '' }} name='explore' component={ExploreScreen} />
      <Tab.Screen options={{ tabBarLabel: '' }} name='bookmark' component={BookmarkTabNavigation} />
      <Tab.Screen options={{ tabBarLabel: '' }} name='profile' component={ProfileTabNavigation} />
    </Tab.Navigator>
  )
}

export default TabNavigation