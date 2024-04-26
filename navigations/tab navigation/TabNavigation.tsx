import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SignUpScreen from '../../screens/auth/sign up screen/SignUpScreen'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
      <Tab.Navigator>
          <Tab.Screen name='home' component={SignUpScreen}/>
    </Tab.Navigator>
  )
}

export default TabNavigation