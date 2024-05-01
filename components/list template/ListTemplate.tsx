import { View, Text, Image } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { styles } from './ListTemplate.style';
import { Ionicons } from '@expo/vector-icons';


const ListTemplate = ({ username = null, isMyList = true, profilePhotoUrl = require('../../assets/images (14).jpeg'), listName = null, numOfStories = null }) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.wrap}>
                    <Image source={profilePhotoUrl} style={styles.profileImg} />
                    <View style={styles.box}>
                        <Text style={styles.name}>Joe Doe</Text>
                        <Text style={styles.nameList}>Name of List</Text>
                    </View>
                </View>

                <View style={styles.boxIcon}>
                    <View style={styles.wrap}>
                        <Text style={styles.stories}>2 stories</Text>
                        <FontAwesome style={styles.icon} name="lock" size={24} color="black" />
                    </View>

                    <View style={[styles.wrap1]}>
                        {isMyList ? <FontAwesome6 style={styles.icon1} name="download" size={15} color="black" />
                            : <Ionicons name="bookmarks" size={24} color="black" style={styles.icon1} />}
                        <FontAwesome6 style={styles.icon} name="ellipsis-vertical" size={24} color="black" />
                    </View>
                </View>
            </View>
            <View>

            </View>
        </View >
    )
}

export default ListTemplate