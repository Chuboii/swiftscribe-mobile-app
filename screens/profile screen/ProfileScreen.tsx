import { View, Text } from 'react-native'
import React from 'react'
import ProfileTemplate from '../../components/profile template/ProfileTemplate'

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <ProfileTemplate navigation={navigation} />
    </View>
  )
}

export default ProfileScreen