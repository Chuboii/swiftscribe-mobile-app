import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../button/Button'
import { styles } from './PostTemplate.style'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import theme from '../../utils/theme/theme/theme';

const PostTemplate = ({handleFunction = () => null, hide=true, style=null, nameStyle= null, boxStyle = null, containerStyle = null, wrapStyle = null, profileImgStyle = null,textStyle = null, wrapperStyle = null, titleStyle = null, postImgStyle = null , profilePictureUrl = null, expoIcon = null, username = null, title=null, postPictureUrl = null, date = null, readTime = null}) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]}>
        <View style={[styles.wrap, wrapStyle]}>
              <Image source={profilePictureUrl} style={[styles.profileImg, profileImgStyle]} />
              <Text style={[styles.name, nameStyle]}>{ username }</Text>
          </View>
        
              <View style={[styles.wrapper, wrapperStyle]}>
                  <Text style={[styles.title, titleStyle]}  numberOfLines={2}>{title}</Text>
                  <Image style={[styles.postImg, postImgStyle]} source={postPictureUrl} />
        
              </View>
              
          
          <View style={[styles.box, boxStyle]}>
              <View style={[styles.wrap, wrapStyle]}>
                      <Text style={[styles.text]}>{date}</Text>
                  <Text style={[styles.text]}>{readTime}</Text>
              </View>
              <View style={[styles.wrap, wrapStyle]}>
                  <Button containerStyle={styles.btn} expoIcon={<MaterialIcons name="post-add" size={24} style={styles.icon} color={theme().text} />}/>
                  {hide && <Button containerStyle={styles.btn} expoIcon={<AntDesign name="minuscircleo" style={styles.icon}    size={24} color={theme().text} />} />}
                  <Button containerStyle={styles.btn} expoIcon={<FontAwesome6 name="ellipsis-vertical" style={styles.icon} size={24} color={theme().text} />}/>
              </View>
         </View>
       
    </TouchableOpacity>
  )
}

export default PostTemplate