import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import BillBoard from "../../components/billboard/BillBoard"
import NotifyActivity from "../../components/notify activity/NotifyActivity"
import { AntDesign } from '@expo/vector-icons';
import {styles} from "./NotificationScreen.style"
import { SafeAreaView } from 'react-native-safe-area-context'
import {navigateBack} from "../../utils/navigations/navigations"


const NotificationScreen = ({navigation}) => {
  
  const navigateBackwards = () => {
    navigateBack(navigation)
  }
  
  return (
    <SafeAreaView>
    <View style={styles.header}>
    <TouchableOpacity onPress={navigateBackwards}>
    <AntDesign style={styles.icon} name="arrowleft" size={24}
                  color="black" />
                </TouchableOpacity>
     <Text style={styles.text}> Notifications </Text>
    </View>
    <View style={styles.wrapper}>
      <NotifyActivity 
      profilePhotoUrl={require("../../assets/images (14).jpeg")}
      username="joe doe" 
      requiresButtons={true}
      isComment={true}
      description="This is a sick video yooo cant wait for more videos like
      this. Cheers"
      timePosted="21h ago"
      postPhotoUrl={require("../../assets/images (14).jpeg")} 
      expoIconName="comment"/>
      
       <NotifyActivity 
      profilePhotoUrl={require("../../assets/images (14).jpeg")}

      username="joe doe" 
      description="This is a sick video yooo cant wait for more videos like
      this. Cheers"
      timePosted="21h ago"
      postPhotoUrl={require("../../assets/images (14).jpeg")} 
      expoIconName="heart"/>
      
      <NotifyActivity 
      isComment={true}
      profilePhotoUrl={require("../../assets/images (14).jpeg")}
      username="joe doe" 
      requiresButtons={true}
      description="This is a sick video yooo cant wait for more videos like
      this. Cheers"
      timePosted="21h ago"
      postPhotoUrl={require("../../assets/images (14).jpeg")} 
      expoIconName="comment"/>
      </View>
    </SafeAreaView>
  )
}

export default NotificationScreen