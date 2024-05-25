import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DarkBg = () => {
    return (
        <View style={styles.container}>

        </View>
    )
}

export default DarkBg

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        opacity: .9,
        flex: 1,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1
    }
})