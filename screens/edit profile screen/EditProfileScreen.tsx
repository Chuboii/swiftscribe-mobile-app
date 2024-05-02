import { View, Text } from 'react-native'
import React from 'react'
import ProfileHeaderTemplate from '../../components/profile header template/ProfileHeaderTemplate'
import { styles } from './EditProfileScreen.style'
import Input from '../../components/input template/Input'
import Button from '../../components/button template/Button'
import PageHeader from '../../components/page header/PageHeader'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'

const EditProfileScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <AntDesign name="arrowleft" size={24} color="black" />
                <Button containerStyle={styles.btn} textStyle={styles.btnText} text={'Save'} />
            </View>

            <ProfileHeaderTemplate wrapperStyle={styles.wrapperStyle} btnStyle={styles.profileHeadBtn} btnTextStyle={styles.profileHeadBtnText} btnText={"Upload"} containerStyle={styles.containerStyle} username={'Choose'} nameStyle={styles.text} isEditProfile={true} profilePhotoUrl={require("../../assets/images (14).jpeg")} />

            <View style={styles.box}>
                <View style={styles.box}>
                    <Text style={styles.text}>Name</Text>
                    <Input style={styles.input} placeholder={"joe doe"} />
                    <Text style={styles.text1}>Appears on your profile page, your byline and as your responses 0/16</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.text}>Bio</Text>
                    <Input style={styles.text1} placeholder={"joe doe"} />
                    <Text>Appear on your search pages and suggestions 0/17</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.text}>Bio</Text>
                    <Input style={styles.input} placeholder={"joe doe"} />
                    <Text style={styles.text1}>Appear on your profile page 0/17</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EditProfileScreen