import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import Button from '../button template/Button'
import { styles } from './PostPreviewTemplate.style'

const PostPreviewTemplate = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image source={require("../../assets/images (14).jpeg")} style={styles.img} />
                <Text>Joe Doe</Text>
            </View>

            <View style={styles.wrap}>
                <TextInput style={styles.title} />
                <TextInput style={styles.subtitle} />
            </View>

            <Button textStyle={styles.text} text={"Edit"} />
        </View>
    )
}

export default PostPreviewTemplate