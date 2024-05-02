import { View, Text } from 'react-native'
import React from 'react'
import Button from '../button template/Button'
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './WritePostIcon.style';
const WritePostIcon = () => {
    return (
        <Button containerStyle={styles.btnStyle} expoIcon={<FontAwesome style={styles.icon} name="edit" size={24} color="black" />} />
    )
}

export default WritePostIcon