import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Button = ({icon = null, text = null, imgStyle = null, textStyle = null, disabled = false, containerStyle = null, helperFunction = () => null, }) => {
  return (
      <TouchableOpacity disabled={disabled} onPress={helperFunction} style={containerStyle}>
          <Image alt={text} source={icon} style={imgStyle} />
          <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button