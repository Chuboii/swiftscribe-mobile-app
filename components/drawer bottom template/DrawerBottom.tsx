import { View, Text, ScrollView, TouchableOpacity, TextInput, BackHandler } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PostPreviewTemplate from '../post preview template/PostPreviewTemplate'
import { styles } from './DrawerBottom.style'
import Button from '../button template/Button'
import { AntDesign } from '@expo/vector-icons';
import { useAppDispatch } from '../../hooks/use dispatch/useDispatch'
import { togglePreviewCompAddCategory, togglePreviewCompCategory, togglePreviewCompTag, togglePreviewPostComp } from '../../lib/redux/reducers/toggleReducer'
import { useAppSelector } from '../../hooks/use selector/useSelector'
import DarkBg from '../dark bg/DarkBg'
import Input from '../input template/Input'
import { storeTagArr } from '../../lib/redux/reducers/tagReducer'
import { preview } from '@cloudinary/url-gen/actions/videoEdit'

const DrawerBottom = ({ navigation }) => {
    const isTags = useAppSelector(state => state.toggle.togglePreviewCompTag)
    const isCategories = useAppSelector(state => state.toggle.togglePreviewCompCategory)
    const isAddCategory = useAppSelector(state => state.toggle.togglePreviewCompAddCategory)
    const dispatch = useAppDispatch()
    const tagArr = useAppSelector(state => state.tag.storeTagArr)
    const [inputValue, setInputValue] = useState({
        tagInput: "",
        addCategoryInput: ""
    })

    useEffect(() => {

        const backAction = () => {
            dispatch(togglePreviewCompTag(false))
            dispatch(togglePreviewCompAddCategory(false))
            dispatch(togglePreviewCompCategory(false))

            // Alert the user or perform any other action
            // Return true to prevent the default behavior (navigating back)
            switch (true) {
                case isTags:
                    return true
                case isAddCategory:
                    dispatch(togglePreviewCompCategory(true))
                    return true
                case isCategories:
                    return true
                default:
                    dispatch(togglePreviewPostComp(false))
                    return true
            }
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove();
    }, [isTags, isCategories, isAddCategory])


    const navigateToTags = () => dispatch(togglePreviewCompTag(true))

    const navigateToPublish = () => {
        if (isTags) {
            dispatch(togglePreviewCompTag(false))
        }
        else if (isAddCategory) {
            dispatch(togglePreviewCompCategory(true))
            dispatch(togglePreviewCompAddCategory(false))
        }
        else {
            dispatch(togglePreviewCompAddCategory(false))
            dispatch(togglePreviewCompCategory(false))
        }
    }

    const navigateToCategories = () => dispatch(togglePreviewCompCategory(true))

    const enableisAddCategoryInput = () => dispatch(togglePreviewCompAddCategory(true))

    const generateTextFromTagInput = (value: string) => {

        setInputValue(prev => ({
            ...prev,
            tagInput: value
        }))

        if (value.charAt(value.length - 1) === ',') {
            // Clear the tagInput value
            dispatch(storeTagArr([value]))

            setInputValue((prev) => ({
                ...prev,
                tagInput: ''
            }));
        }

    }


    const generateTextFromAddCategoryInput = (value: string) => {
        setInputValue(prev => ({
            ...prev,
            addCategoryInput: value
        }))
    }


    // const generateTags = (event: any) => {

    //     if (event.nativeEvent.key === ",") {
    //         // dispatch(storeTagArr([inputValue.tagInput]))

    //         // setInputValue(prev => ({
    //         //     ...prev,
    //         //     tagInput: ""
    //         // }))
    //     }
    // }

    // console.log(inputValue.tagInput);


    return (
        <>
            <DarkBg />
            <View style={styles.container}>
                {isTags ? <>
                    <View style={styles.tagHead}>
                        <Button helperFunction={navigateToPublish} expoIcon={<AntDesign style={styles.tagIcon} name="arrowleft" size={24} color="white" />} />
                        <Text style={styles.tagTxt}>Tags</Text>
                    </View>

                    <View style={styles.catInputBox}>
                        <Input value={inputValue.tagInput} style={styles.catInput} onChangeText={generateTextFromTagInput} />
                        <Text style={styles.catInputTxt}>Seperate tags with comma </Text>
                    </View>

                    <View style={styles.tagWrap}>
                        {tagArr.length > 0 ? tagArr.map((tag, idx) => <Text key={idx} style={styles.tag}>{tag}</Text>) : ""}

                    </View>
                </> : isCategories ?
                    <>
                        <View style={styles.tagHead}>
                            <Button helperFunction={navigateToPublish} expoIcon={<AntDesign style={styles.tagIcon} name="arrowleft" size={24} color="white" />} />
                            <Text style={styles.tagTxt}>{isAddCategory ? "Add New Category" : "Categories"}</Text>

                            {isAddCategory ? "" :
                                <Button helperFunction={enableisAddCategoryInput} expoIcon={<AntDesign style={styles.tagIcon} name="plus" size={24} color="white" />} />
                            }
                        </View>

                        {isAddCategory ?
                            <>
                                <View style={styles.catInputBox}>
                                    <Input value={inputValue.addCategoryInput} onChangeText={generateTextFromAddCategoryInput} style={styles.catInput} />
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
        </>
    )
}

export default DrawerBottom