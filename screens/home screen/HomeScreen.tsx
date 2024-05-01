import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TapNavigation from '../../navigations/top navigation/home top navigation/HomeTopNavigation'
import ForYouScreen from "../for you screen/ForYouScreen"
const HomeScreen = () => {
  return (
      <>
      <FlatList
        data={[2,2,4]}
        renderItem={({item}) => <ForYouScreen/> }
        ListHeaderComponent={
        <>
                <Text>HomeScreen</Text>
               <TapNavigation/>
            </>
        }
      />

    </>
  )
}

export default HomeScreen