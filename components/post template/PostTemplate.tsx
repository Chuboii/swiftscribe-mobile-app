import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../button template/Button'
import { styles } from './PostTemplate.style'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import theme from '../../utils/theme/theme/theme';
import LikeTemplate from '../like template/LikeTemplate';
import CommentTemplate from '../comment template/CommentTemplate';
import { Ionicons } from '@expo/vector-icons';


const PostTemplate = ({ handleFunction = () => null, isUserStories = false, isReadingHistoryPage = false, descStyle = null, desc = null, hide = true, dontHideAllBtn = true, style = null, nameStyle = null, boxStyle = null, containerStyle = null, wrapStyle = null, profileImgStyle = null, textStyle = null, wrapperStyle = null, titleStyle = null, postImgStyle = null, profilePictureUrl = null, expoIcon = null, username = null, title = null, postPictureUrl = null, date = null, readTime = null }) => {
    return (
        <TouchableOpacity style={[styles.container, containerStyle]}>
            <View style={[styles.wrap, wrapStyle]}>
                <Image source={profilePictureUrl} style={[styles.profileImg, profileImgStyle]} />
                <Text style={[styles.name, nameStyle]}>{username}</Text>
            </View>

            <View style={[styles.wrapper, wrapperStyle]}>
                <View>
                    <Text style={[styles.title, titleStyle]} numberOfLines={3}>{title}</Text>
                    <Text style={[styles.desc, descStyle]} numberOfLines={3}>{desc}</Text>
                </View>
                <Image style={[styles.postImg, postImgStyle]} source={postPictureUrl} />

            </View>


            <View style={[styles.box, boxStyle]}>
                <View style={[styles.wrap, {
                    alignSelf: "flex-end"
                }, wrapStyle]}>
                    <Text style={[styles.text]}>{date}</Text>
                    <Text style={[styles.text]}>{readTime}</Text>
                </View>

                <View style={styles.wrapper1}>
                    {isReadingHistoryPage ? <View style={styles.wrap}>
                        <LikeTemplate style={styles.icon1} noOfLikes={300} />
                        <CommentTemplate style={styles.icon1} noOfComment={200} />
                    </View> : ""
                    }
                    {
                        dontHideAllBtn &&

                        <View style={[styles.wrap, wrapStyle]}>
                            {isReadingHistoryPage ?
                                <View style={[styles.wrapper2]}>
                                    <Button containerStyle={styles.btn} expoIcon={<Ionicons name="bookmarks" size={17} color="black" style={styles.icon} />} />
                                    <Button containerStyle={styles.btn} expoIcon={<FontAwesome6
                                        name="ellipsis-vertical" style={styles.icon} size={20}
                                        color={theme().text} />} /></View> : isUserStories ?
                                    <Button containerStyle={styles.btn} expoIcon={<FontAwesome6
                                        name="ellipsis-vertical" style={styles.icon} size={20}
                                        color={theme().text} />} /> :
                                    <View style={[styles.wrap]}>
                                        <Button containerStyle={styles.btn} expoIcon={<MaterialIcons
                                            name="post-add" size={20} style={styles.icon}
                                            color={theme().text} />} />
                                        {hide && <Button containerStyle={styles.btn}
                                            expoIcon={<AntDesign name="minuscircleo" style={styles.icon}
                                                size={20} color={theme().text} />} />}
                                        <Button containerStyle={styles.btn} expoIcon={<FontAwesome6
                                            name="ellipsis-vertical" style={styles.icon} size={20}
                                            color={theme().text} />} />
                                    </View>}

                        </View>
                    }
                </View>
            </View>

        </TouchableOpacity >
    )
}

export default PostTemplate