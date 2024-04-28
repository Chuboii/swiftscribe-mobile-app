import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TapNavigation from '../../navigations/top navigation/HomeTopNavigation'

const HomeScreen = () => {
  return (
      <SafeAreaView>
          <TapNavigation/>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen