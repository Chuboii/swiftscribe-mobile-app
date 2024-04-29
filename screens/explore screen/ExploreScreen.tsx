import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TrendingTemplate from '../../components/trending template/TrendingTemplate'
import { Feather } from '@expo/vector-icons';
import PostTemplate from '../../components/post template/PostTemplate';
import { styles } from './ExploreScreen.style';
import PageHeader from '../../components/page header/PageHeader';
import { AntDesign } from '@expo/vector-icons';
import { navigateToSearchPage } from '../../utils/navigations/navigations';
import FollowTemplate from '../../components/follow template/FollowTemplate';

const ExploreScreen = ({ navigation }) => {
    

    const navigateToSearch = () => navigateToSearchPage(navigation)
    

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader text='Explore' textStyle={styles.headerTitle}/>
      <TouchableOpacity onPress={navigateToSearch} style={styles.box}>
      <Feather name="search" size={24} color="black" />
        <Text style={styles.boxText}>Search SwiftScribe</Text>
      </TouchableOpacity>
      <ScrollView>
           <View style={styles.wrap}>
            <Feather style={styles.icon} name="trending-up" size={24} color="black" />
            <Text style={styles.title}>Trending in swiftscribe</Text>  
          </View>
          
      <View style={styles.wrapper}>
      <TrendingTemplate index={1} profilePhotoUrl={require("../../assets/images (14).jpeg")}/>
      <TrendingTemplate index={2} profilePhotoUrl={require("../../assets/images (14).jpeg")} />
      <TrendingTemplate index={3} profilePhotoUrl={require("../../assets/images (14).jpeg")} />
      <TrendingTemplate index={4} profilePhotoUrl={require("../../assets/images (14).jpeg")} />
      <TrendingTemplate index={5} profilePhotoUrl={require("../../assets/images (14).jpeg")} />
      </View>

        <View style={[styles.wrapper, {marginTop:35}]}>
          <View style={styles.wrap}>
          <AntDesign  name="book" size={24} color="black" />
            <Text style={styles.title}>Recommended by swiftscribe</Text>
          </View>
      <PostTemplate dontHideAllBtn={false} date={"19th feb, 2024"} title={"How to be a man and mind your fucking business. Shoot me cow.."} postPictureUrl={require("../../assets/images (14).jpeg")} readTime={"4 mins"} profilePictureUrl={require("../../assets/images (14).jpeg")} username={"joe doe"} />
      <PostTemplate dontHideAllBtn={false}  date={"19th feb, 2024"} title={"How to be a man and mind your fucking business. Shoot me cow.."} postPictureUrl={require("../../assets/images (14).jpeg")} readTime={"4 mins"} profilePictureUrl={require("../../assets/images (14).jpeg")} username={"joe doe"} />
      <PostTemplate dontHideAllBtn={false}  date={"19th feb, 2024"} title={"How to be a man and mind your fucking business. Shoot me cow.."} postPictureUrl={require("../../assets/images (14).jpeg")} readTime={"4 mins"} profilePictureUrl={require("../../assets/images (14).jpeg")} username={"joe doe"} />
      <PostTemplate dontHideAllBtn={false}  date={"19th feb, 2024"} title={"How to be a man and mind your fucking business. Shoot me cow.."} postPictureUrl={require("../../assets/images (14).jpeg")} readTime={"4 mins"} profilePictureUrl={require("../../assets/images (14).jpeg")} username={"joe doe"} />
      <PostTemplate dontHideAllBtn={false}  date={"19th feb, 2024"} title={"How to be a man and mind your fucking business. Shoot me cow.."} postPictureUrl={require("../../assets/images (14).jpeg")} readTime={"4 mins"} profilePictureUrl={require("../../assets/images (14).jpeg")} username={"joe doe"} />
      
              </View>
<Text style={[styles.title, {marginTop:45, marginBottom:10}]}>Who to follow</Text>
<ScrollView horizontal>        
<FollowTemplate btnStyle={styles.templateBtn} profileImgStyle={styles.templateProfileImg} bioStyle={styles.templateBio} wrapStyle={styles.templateWrap} wrapperStyle={styles.templateWrapper} containerStyle={styles.templateContainer} username={"joe doe"} profilePictureUrl={require("../../assets/images (14).jpeg")} bio={"a renounced software developer trying to make a living off this site and hopefully i will do just  khhHHLhlHLLsLLhlshlkjlslKLssjs;jthat"} />
<FollowTemplate btnStyle={styles.templateBtn} profileImgStyle={styles.templateProfileImg} bioStyle={styles.templateBio} wrapStyle={styles.templateWrap} wrapperStyle={styles.templateWrapper} containerStyle={styles.templateContainer} username={"joe doe"} profilePictureUrl={require("../../assets/images (14).jpeg")} bio={"a renounced software developer trying to make a living off this site and hopefully i will do just  khhHHLhlHLLsLLhlshlkjlslKLssjs;jthat"} />
<FollowTemplate btnStyle={styles.templateBtn} profileImgStyle={styles.templateProfileImg} bioStyle={styles.templateBio} wrapStyle={styles.templateWrap} wrapperStyle={styles.templateWrapper} containerStyle={styles.templateContainer} username={"joe doe"} profilePictureUrl={require("../../assets/images (14).jpeg")} bio={"a renounced software developer trying to make a living off this site and hopefully i will do just  khhHHLhlHLLsLLhlshlkjlslKLssjs;jthat"} />
<FollowTemplate btnStyle={styles.templateBtn} profileImgStyle={styles.templateProfileImg} bioStyle={styles.templateBio} wrapStyle={styles.templateWrap} wrapperStyle={styles.templateWrapper} containerStyle={styles.templateContainer} username={"joe doe"} profilePictureUrl={require("../../assets/images (14).jpeg")} bio={"a renounced software developer trying to make a living off this site and hopefully i will do just  khhHHLhlHLLsLLhlshlkjlslKLssjs;jthat"} />


              </ScrollView>
          </ScrollView>
             </SafeAreaView>
  )
}

export default ExploreScreen