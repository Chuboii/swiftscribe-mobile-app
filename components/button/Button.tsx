import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Button = ({icon, text, imgStyle, textStyle, containerStyle, helperFunction, }) => {
  return (
      <TouchableOpacity onPress={helperFunction} style={containerStyle}>
          <Image alt={text} source={icon} style={imgStyle} />
          <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button