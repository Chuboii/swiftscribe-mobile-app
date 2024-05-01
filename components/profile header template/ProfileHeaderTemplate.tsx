import { View, Text, Image } from 'react-native'
import React from 'react'
import Button from '../button template/Button'
import { styles } from './ProfileHeaderTemplate.style'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfileHeaderTemplate = ({ boxStyle = null, containerStyle = null, wrapperStyle = null, profileImgStyle = null, wrapStyle = null, textStyle = null, btnWrapStyle = null, btnStyle = null, btnTextStyle = null, username = null, btnText = null, handleFunction = () => null, numOfFollowers = null, numOfFollowing = null, profilePhotoUrl = null }) => {
    return (
        <SafeAreaView style={[styles.container]}>
            <View style={[styles.wrapper]}>
                <Image source={require('../../assets/images (14).jpeg')} style={[styles.profileImg]} />
                <View style={[styles.box]}>
                    <Text style={[styles.name]}>Joe Doe</Text>
                    <View style={[styles.wrap]}>
                        <Text style={[styles.text]}>0 followers</Text>
                        <Text style={[styles.text]}>14 following</Text>
                    </View>
                </View>
            </View>

            <View style={[styles.btnWrap]}>
                <Button text={"Edit your profile"} textStyle={styles.btnText} containerStyle={styles.btn} />

            </View>
        </SafeAreaView >
    )
}

export default ProfileHeaderTemplate