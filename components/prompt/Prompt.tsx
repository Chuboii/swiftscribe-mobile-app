import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Prompt.style'

const Prompt = ({ text = null, titleStyle = null, containerStyle = null, title = null, textStyle = null, handleFunction = () => null, btnStyle = null, btnText = null}) => {
  return (
      <View style={[styles.container, containerStyle]}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          <Text style={[styles.text, textStyle]}>{text}</Text>
          <TouchableOpacity style={[styles.btnStyle, btnStyle]}>
              <Text style={[styles.btnText, btnText]}>{btnText}</Text>
          </TouchableOpacity>
    </View>
  )
}

export default Prompt