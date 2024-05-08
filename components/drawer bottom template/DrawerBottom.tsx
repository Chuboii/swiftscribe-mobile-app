import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PostPreviewTemplate from '../post preview template/PostPreviewTemplate'

const DrawerBottom = () => {
    return (
        <SafeAreaView>
            <PostPreviewTemplate />
        </SafeAreaView>
    )
}

export default DrawerBottom