import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { styles } from './LikeTemplate.style';

const LikeTemplate = ({ noOfLikes = null, style = null }) => {
    return (
        <View style={[styles.container, style]}>
            <AntDesign style={[styles.icon]} name="hearto" size={24} color="black" />
            <Text style={styles.text}>{noOfLikes}</Text>
        </View >
    )
}

export default LikeTemplate