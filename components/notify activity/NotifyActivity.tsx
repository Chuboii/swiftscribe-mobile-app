import {Text, View, Image} from "react-native"
import { EvilIcons } from '@expo/vector-icons';
import Button from "../button/Button"
import {styles} from "./NotifyActivity.style"
import { FontAwesome } from '@expo/vector-icons';


const NotifyActivity = ({profilePhotoUrl = null, description = null, postPhotoUrl =
null,
navigation,username = null,
requiresButtons = false, timePosted = null, expoIconName = null, isComment =
false}) => {
  
  

  
  
  return(

    <View style={styles.container}>
     
<View style={[styles.wrapper, {alignItems: isComment ? "" : "center"}]}>
    <View style={styles.wrap}>
    <Image style={styles.profileImg} source={profilePhotoUrl} />
    <View style={expoIconName === "heart" ? styles.iconHeart : styles.iconBox}>
    <FontAwesome style={styles.icon} name={expoIconName}  />
    </View>
    </View>
    
    <View style={styles.box}>
    <Text style={styles.name}>{username} </Text>
  {isComment ?  <Text style={styles.comment} numberOfLines={4} >Commented:
  <Text>{description} </Text> <Text style={styles.date}>{timePosted} </Text> </Text> : <Text
  style={styles.comment} numberOfLines={4} >
  <Text>liked your post </Text> <Text style={styles.date}>{timePosted} </Text> </Text> }
  {requiresButtons ?
    <View style={styles.btnWrap}>
    <Button textStyle={styles.btnText} containerStyle={styles.btn}
    text={"reply"} expoIcon={ <EvilIcons style={styles.btnIcon} name="comment" size={24}
    color="black" />}/>
     <Button style={styles.btnIcon} textStyle={styles.btnText} containerStyle={styles.btn}  text={"like"} expoIcon={    <EvilIcons name="like" size={24}
    color="black" />}/>
    </View> : ""
  }
  </View>
</View>
<View>
<Image style={styles.postImg} source={postPhotoUrl}/>
</View>
    </View>

    )
}

export default NotifyActivity