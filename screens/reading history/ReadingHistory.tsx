import { View, Text } from 'react-native'
import React from 'react'
import PostTemplate from '../../components/post template/PostTemplate'
import { styles } from './ReadingHistory.style'

const ReadingHistory = () => {
    return (
        <View style={styles.container}>
            <PostTemplate isReadingHistoryPage={true} wrapStyle={styles.wrapStyle} boxStyle={styles.boxStyle} desc={"this is so unbelieale true cos what the hell happened at the zoo last nigth, it as a compleye chaptiv event and i koauiaiafjaad jd"} date={"19th feb, 2024"} title={"How to be a man and mind your fucking business. Shoot me cow.."} postPictureUrl={require("../../assets/images (14).jpeg")} readTime={"4 mins"} profilePictureUrl={require("../../assets/images (14).jpeg")} username={"joe doe"} />
            <PostTemplate isReadingHistoryPage={true} wrapStyle={styles.wrapStyle} boxStyle={styles.boxStyle} desc={"this is so unbelieale true cos what the hell happened at the zoo last nigth, it as a compleye chaptiv event and i koauiaiafjaad jd"} date={"19th feb, 2024"} title={"How to be a man and mind your fucking business. Shoot me cow.."} postPictureUrl={require("../../assets/images (14).jpeg")} readTime={"4 mins"} profilePictureUrl={require("../../assets/images (14).jpeg")} username={"joe doe"} />
            <PostTemplate isReadingHistoryPage={true} wrapStyle={styles.wrapStyle} boxStyle={styles.boxStyle} desc={"this is so unbelieale true cos what the hell happened at the zoo last nigth, it as a compleye chaptiv event and i koauiaiafjaad jd"} date={"19th feb, 2024"} title={"How to be a man and mind your fucking business. Shoot me cow.."} postPictureUrl={require("../../assets/images (14).jpeg")} readTime={"4 mins"} profilePictureUrl={require("../../assets/images (14).jpeg")} username={"joe doe"} />
            <PostTemplate isReadingHistoryPage={true} wrapStyle={styles.wrapStyle} boxStyle={styles.boxStyle} desc={"this is so unbelieale true cos what the hell happened at the zoo last nigth, it as a compleye chaptiv event and i koauiaiafjaad jd"} date={"19th feb, 2024"} title={"How to be a man and mind your fucking business. Shoot me cow.."} postPictureUrl={require("../../assets/images (14).jpeg")} readTime={"4 mins"} profilePictureUrl={require("../../assets/images (14).jpeg")} username={"joe doe"} />

        </View>
    )
}

export default ReadingHistory