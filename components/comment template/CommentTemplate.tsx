import { View, Text } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { styles } from './CommentTemplate.style';
import { Fontisto } from '@expo/vector-icons';


const CommentTemplate = ({ noOfComment = null, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Fontisto style={[styles.icon]} name="comment" size={24} color="black" />
            <Text style={styles.text}>{noOfComment}</Text>
        </View>
    )
}

export default CommentTemplate