import { View, Text, ScrollView, TouchableOpacity, TextInput, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PostPreviewTemplate from '../post preview template/PostPreviewTemplate'
import { styles } from './DrawerBottom.style'
import Button from '../button template/Button'
import { AntDesign } from '@expo/vector-icons';
import { S } from '@expo/html-elements'

const DrawerBottom = ({ navigation }) => {
    const [isTags, setIsTags] = useState(false)
    const [isCategories, setIsCategories] = useState(false)
    const [addCategory, setAddCategory] = useState(false)

    useEffect(() => {

        const backAction = () => {
            setIsTags(false)
            setIsCategories(false)
            setAddCategory(false)

            // Alert the user or perform any other action
            // Return true to prevent the default behavior (navigating back)
            if (isTags) {
                return true;
            }
            else if (addCategory) {
                setIsCategories(true)
                return true
            }
            else if (isCategories) {
                return true
            }
            else {

                return false
            }

        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove();
    }, [isTags, isCategories, addCategory])


    const navigateToTags = () => setIsTags(true)

    const navigateToPublish = () => {
        if (isTags) {
            setIsTags(false)
        }
        else if (isCategories && addCategory) {
            setAddCategory(false)
        }
        else {
            setIsCategories(false)
        }
    }

    const navigateToCategories = () => setIsCategories(true)

    const enableAddCategoryInput = () => setAddCategory(true)


    return (
        <View style={styles.container}>
            {isTags ? <>
                <View style={styles.tagHead}>
                    <Button helperFunction={navigateToPublish} expoIcon={<AntDesign style={styles.tagIcon} name="arrowleft" size={24} color="white" />} />
                    <Text style={styles.tagTxt}>Tags</Text>
                </View>

                <View style={styles.catInputBox}>
                    <TextInput style={styles.catInput} placeholder='Separate tags with comma' />
                    <Text style={styles.catInputTxt}>Seperate tags with comma </Text>
                </View>

                <View style={styles.tagWrap}>
                    <Text style={styles.tag}>Tag</Text>
                    <Text style={styles.tag}>Tag</Text>
                    <Text style={styles.tag}>Tag</Text>
                    <Text style={styles.tag}>Tag</Text>
                    <Text style={styles.tag}>Tag</Text>
                </View>
            </> : isCategories ?
                <>
                    <View style={styles.tagHead}>
                        <Button helperFunction={navigateToPublish} expoIcon={<AntDesign style={styles.tagIcon} name="arrowleft" size={24} color="white" />} />
                        <Text style={styles.tagTxt}>{addCategory ? "Add New Category" : "Categories"}</Text>

                        {addCategory ? "" :
                            <Button helperFunction={enableAddCategoryInput} expoIcon={<AntDesign style={styles.tagIcon} name="plus" size={24} color="white" />} />
                        }
                    </View>

                    {addCategory ?
                        <>
                            <View style={styles.catInputBox}>
                                <TextInput style={styles.catInput} placeholder='Separate tags with comma' />
                                <Text style={styles.catInputTxt}>Category Name</Text>
                            </View>
                            <Button text={"Add to categories"} containerStyle={styles.catBtn} textStyle={styles.catBtnTxt} />
                        </> : ""
                    }
                </> :
                <>
                    <PostPreviewTemplate />
                    <View style={styles.wrap}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.title}>Publish</Text>
                            <Text style={styles.text}>Immediately</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn} onPress={navigateToTags}>
                            <Text style={styles.title}>Tags</Text>
                            <Text style={styles.text}>Not set</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btn} onPress={navigateToCategories}>
                            <Text style={styles.title}>Categories</Text>
                            <Text style={styles.text}>Not set</Text>
                        </TouchableOpacity>
                    </View>

                    <Button text={"Publish now"} containerStyle={styles.btnPub} textStyle={styles.btnTxt} />
                </>
            }
        </View>
    )
}

export default DrawerBottom