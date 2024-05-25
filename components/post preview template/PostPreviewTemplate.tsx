import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../button template/Button'
import { styles } from './PostPreviewTemplate.style'
import { AntDesign } from '@expo/vector-icons';
import { useAppDispatch } from '../../hooks/use dispatch/useDispatch';
import { useAppSelector } from '../../hooks/use selector/useSelector';
import { storePostData } from '../../lib/redux/reducers/storeWrittenPost';
import { storeInputValue } from '../../lib/redux/reducers/storeInputValues';
import * as ImagePicker from "expo-image-picker";
import { Cloudinary } from '@cloudinary/url-gen';
import { UploadApiOptions, upload } from 'cloudinary-react-native';
import SpinnerOverlay from '../spinner template/SpinnerOverlay';


const PostPreviewTemplate = () => {
    const dispatch = useAppDispatch()
    const getPostData = useAppSelector(state => state.postData.storePostData)
    const inputValues = useAppSelector(state => state.inputValue.storeInputValue)
    const [titleInput, setTitleInput] = useState(inputValues.postTitleInput)
    const [subTitleInput, setSubTitleInput] = useState(inputValues.postSubTitleInput)
    const [previewImage, setPreviewImage] = useState(null)
    const [isImageUploadFinished, setIsImageUploadFinished] = useState(false)


    // useEffect(() => {
    //     dispatch(storePostData([{ title: titleInput, content: getPostData[0].content, subTitle: subTitle Input }]))
    // }, [titleInput, subTitleInput])

    const getValueFromTitleInput = (value: string) => {
        setTitleInput(value)
        dispatch(storeInputValue({ ...inputValues, postTitleInput: value }))
        dispatch(storePostData({ ...getPostData, title: value }))
    }


    const getValueFromSubTitleInput = (value: string) => {
        setSubTitleInput(value)
        dispatch(storeInputValue({ ...inputValues, postSubTitleInput: value }))
        dispatch(storePostData({ ...getPostData, subTitle: value }))

    }

    const getImageFromDeviceLibrary = async () => {

        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            setIsImageUploadFinished(true)

            if (!result.canceled) {

                const cldd = new Cloudinary({
                    cloud: {
                        cloudName: "dcgirmxbm",
                    },
                    url: {
                        secure: true,
                    },
                });

                const options: UploadApiOptions = {
                    upload_preset: "swiftscribe",
                    tag: "swiftscribeImages",
                    unsigned: true,
                };

                await upload(cldd, {
                    file: result.assets[0].uri,
                    options: options,
                    callback: (error: any, response: any) => {
                        if (error) console.log(error);

                        setPreviewImage(response?.secure_url)
                        dispatch(storePostData({ ...getPostData, previewImage: response.secure_url }))

                    },
                })
            }
        }
        catch (err) {

        }
        finally {
            setIsImageUploadFinished(false)
        }
    }

    return (
        <View style={styles.container} >
            <View style={styles.wrapper}>
                <View style={styles.wrap}>
                    <Image source={require("../../assets/images (14).jpeg")} style={styles.img} />
                    <Text style={styles.name}>Joe Doe</Text>
                </View>

                <View style={styles.box}>
                    <View>
                        <TextInput onChangeText={getValueFromTitleInput} value={titleInput} autoFocus={true} placeholder='Post Title' style={styles.title} />
                        <TextInput onChangeText={getValueFromSubTitleInput} value={subTitleInput} placeholder='Post Subtille' style={styles.subtitle} />
                    </View>
                    {
                        isImageUploadFinished ? <ActivityIndicator style={styles.imageIcon} size="large" color="#00ff00" /> : previewImage ? <Image source={{ uri: previewImage }} style={styles.image} /> :
                            <TouchableOpacity style={styles.imageIcon} onPress={getImageFromDeviceLibrary}>
                                <AntDesign name="plus" size={24} color="white" />
                                <Text style={[styles.text, { width: 100, textAlign: "center", fontSize: 12, marginTop: 6 }]}>Add preview image</Text>
                            </TouchableOpacity>
                    }
                </View>
            </View >

            <Button containerStyle={styles.btn} textStyle={styles.text} text={"Edit"} />
        </View >
    )
}

export default PostPreviewTemplate