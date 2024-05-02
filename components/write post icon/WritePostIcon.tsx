import { View, Text } from 'react-native'
import React from 'react'
import Button from '../button template/Button'
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './WritePostIcon.style';
const WritePostIcon = ({navigation}) => {
  const navigateToWritePost = () => navigation.navigate("write post screen")
  
    return (
      <View style={styles.container}>
        <Button helperFunction={navigateToWritePost} isIcon={true} containerStyle={styles.btnStyle} expoIcon={<FontAwesome style={styles.icon} name="edit" size={24} color="black" />} />
        </View>
    )
}

export default WritePostIcon