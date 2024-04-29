import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PostTemplate from '../../components/post template/PostTemplate'
import { styles } from './ForYouScreen.style'

const ForYouScreen = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <PostTemplate date={"19th feb, 2024"} title={"How to be a man and mind your fucking business. Shoot me cow.."} postPictureUrl={require("../../assets/images (14).jpeg")} readTime={"4 mins"} profilePictureUrl={require("../../assets/images (14).jpeg")} username={"joe doe"} />
      <PostTemplate date={"19th feb, 2024"} title={"How to be a man and mind your fucking business. Shoot me cow.."} postPictureUrl={require("../../assets/images (14).jpeg")} readTime={"4 mins"} profilePictureUrl={require("../../assets/images (14).jpeg")} username={"joe doe"} />
      <PostTemplate date={"19th feb, 2024"} title={"How to be a man and mind your fucking business. Shoot me cow.."} postPictureUrl={require("../../assets/images (14).jpeg")} readTime={"4 mins"} profilePictureUrl={require("../../assets/images (14).jpeg")} username={"joe doe"} />
      <PostTemplate date={"19th feb, 2024"} title={"How to be a man and mind your fucking business. Shoot me cow.."} postPictureUrl={require("../../assets/images (14).jpeg")} readTime={"4 mins"} profilePictureUrl={require("../../assets/images (14).jpeg")} username={"joe doe"} />
      <PostTemplate date={"19th feb, 2024"} title={"How to be a man and mind your fucking business. Shoot me cow.."} postPictureUrl={require("../../assets/images (14).jpeg")} readTime={"4 mins"} profilePictureUrl={require("../../assets/images (14).jpeg")} username={"joe doe"} />
      
      </ScrollView>
    </View>
  )
}

export default ForYouScreen