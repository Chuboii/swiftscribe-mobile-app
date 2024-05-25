import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../button template/Button'
import { styles } from './FollowTemplate.style'

const FollowTemplate = ({ onClick = () => null, containerStyle = null, btnStyle = null, btnTextStyle = null, wrapStyle = null, nameStyle = null, bioStyle = null, wrapperStyle = null, profileImgStyle = null, profilePictureUrl = null, username = null, bio = null, }) => {
  return (
    <TouchableOpacity onPress={onClick} style={[styles.container, containerStyle]}>
      <View style={[styles.wrapper, wrapperStyle]} >
        <Image source={profilePictureUrl} style={[styles.profileImg, profileImgStyle]} />

        <View style={[styles.wrap, wrapStyle]}>
          <Text style={[styles.name, nameStyle]}>{username}</Text>
          <Text style={[styles.bio, bioStyle]} numberOfLines={2}>{bio}</Text>
        </View>
      </View>

      <Button text={"following"} containerStyle={[styles.btn, btnStyle]} textStyle={[styles.btnText, btnTextStyle]} />

    </TouchableOpacity>
  )
}

export default FollowTemplate