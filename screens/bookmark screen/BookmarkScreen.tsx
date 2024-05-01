import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageHeader from '../../components/page header/PageHeader'
import { styles } from './BookmarkScreen.style'
// import HomeTabNavigation from '../../navigations/top navigation/HomeTopNavigation'

const BookmarkScreen = () => {
  return (
    <SafeAreaView>
      <PageHeader containerStyle={styles.containerPage} text='Your library' textStyle={styles.textStyle} btnStyle={styles.btnStyle} button={<Text style={styles.btnText}>New List</Text>} />

    </SafeAreaView>
  )
}

export default BookmarkScreen