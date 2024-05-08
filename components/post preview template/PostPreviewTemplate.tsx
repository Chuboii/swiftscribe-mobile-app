import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import Button from '../button template/Button'
import { styles } from './PostPreviewTemplate.style'

const PostPreviewTemplate = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.wrap}>
                    <Image source={require("../../assets/images (14).jpeg")} style={styles.img} />
                    <Text style={styles.name}>Joe Doe</Text>
                </View>

                <View style={styles.wrapper}>
                    <TextInput placeholder='Post Title' style={styles.title} />
                    <TextInput placeholder='Post Subtille' style={styles.subtitle} />
                </View>
            </View>

            <Button containerStyle={styles.btn} textStyle={styles.text} text={"Edit"} />
        </View>
    )
}

export default PostPreviewTemplate