import { View, Text, ScrollView, Image, TouchableOpacity, BackHandler } from 'react-native'
import React, { useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Input from '../input template/Input';
import { Entypo } from '@expo/vector-icons';
import { styles } from './CommentTemplate.style';
import Button from '../button template/Button';

const CommentTemplate = ({ closeComment, isCommentActive }) => {

    const disableCommentFromDisplaying = () => {
        closeComment(false)
    }


    useEffect(() => {

        const backAction = () => {

            if (!isCommentActive) return false
            closeComment(false)

            return true
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove();
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.text, styles.headerTxt]}>1.lK comments</Text>
                <Button helperFunction={disableCommentFromDisplaying} expoIcon={
                    <AntDesign name='close' style={[styles.icon, styles.headerIcon]} />
                } />
            </View>

            <ScrollView>
                <View style={styles.header}>
                    <View style={[styles.wrap, styles.wrapBox]}>
                        <Image style={styles.image} source={require("../../assets/images (14).jpeg")} />
                        <View>
                            <Text style={[styles.text, styles.name]}>Joe Doe</Text>
                            <View style={styles.wrap}>
                                <Text style={[styles.text, styles.cmmt]}>I love going home early to rest cos it is fucking nice and easy. 1hr ago</Text>
                            </View>

                            <TouchableOpacity style={[styles.wrap, styles.gap]}>
                                <Text style={[styles.text, { marginRight: 6 }]}>view replies (3)</Text>
                                <FontAwesome style={[styles.icon]} name="angle-down" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <AntDesign style={styles.heart} name="hearto" size={24} color="black" />
                        <Text style={[styles.text]}>6</Text>
                    </View>
                </View>

                <View style={styles.header}>
                    <View style={[styles.wrap, styles.wrapBox]}>
                        <Image style={styles.image} source={require("../../assets/images (14).jpeg")} />
                        <View>
                            <Text style={[styles.text, styles.name]}>Joe Doe</Text>
                            <View style={styles.wrap}>
                                <Text style={[styles.text, styles.cmmt]}>I love going home early to rest cos it is fucking nice and easy. 1hr ago</Text>
                            </View>

                            <TouchableOpacity style={[styles.wrap, styles.gap]}>
                                <Text style={[styles.text, { marginRight: 6 }]}>view replies (3)</Text>
                                <FontAwesome style={[styles.icon]} name="angle-down" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <AntDesign style={styles.heart} name="hearto" size={24} color="black" />
                        <Text style={[styles.text]}>6</Text>
                    </View>
                </View>

                <View style={styles.header}>
                    <View style={[styles.wrap, styles.wrapBox]}>
                        <Image style={styles.image} source={require("../../assets/images (14).jpeg")} />
                        <View>
                            <Text style={[styles.text, styles.name]}>Joe Doe</Text>
                            <View style={styles.wrap}>
                                <Text style={[styles.text, styles.cmmt]}>I love going home early to rest cos it is fucking nice and easy. 1hr ago</Text>
                            </View>

                            <TouchableOpacity style={[styles.wrap, styles.gap]}>
                                <Text style={[styles.text, { marginRight: 6 }]}>view replies (3)</Text>
                                <FontAwesome style={[styles.icon]} name="angle-down" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <AntDesign style={styles.heart} name="hearto" size={24} color="black" />
                        <Text style={[styles.text]}>6</Text>
                    </View>
                </View>

            </ScrollView >

            <View style={[styles.header, styles.footer]}>
                <Image style={styles.profile} source={require("../../assets/images (14).jpeg")} />
                <View style={[styles.wrap, styles.inputBox]}>
                    <Input style={styles.input} placeholder={"Add comment"} />
                    <View style={[styles.wrap, styles.footerIcon]}>
                        <Entypo style={styles.icon} name="email" size={24} color="black" />
                        <Entypo style={[styles.icon, { marginLeft: 8 }]} name="emoji-flirt" size={24} color="black" />
                    </View>
                </View>
                <TouchableOpacity style={styles.submit}>
                    <AntDesign name="arrowup" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default CommentTemplate