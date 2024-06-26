import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Button = ({icon = null, expoIcon= null, text = null, imgStyle = null,
textStyle = null, disabled = false, containerStyle = null, isIcon =false, helperFunction = () => null, }) => {
  return (
      <TouchableOpacity disabled={disabled} onPress={helperFunction} style={containerStyle}>
       {isIcon ? "" : 
       <View>
       <Image alt={text} source={icon} style={imgStyle} />
          <Text style={textStyle}>{text}</Text>
          </View> }
           {expoIcon}
    </TouchableOpacity>
  )
}

export default Button