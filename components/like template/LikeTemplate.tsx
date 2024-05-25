import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { styles } from './LikeTemplate.style';

const LikeTemplate = ({ num = null, style = null, icon = null }) => {
    return (
        <View style={[styles.container, style]}>
            <AntDesign style={[styles.icon]} name={icon} size={24} color="black" />
            <Text style={styles.text}>{num}</Text>
        </View >
    )
}

export default LikeTemplate