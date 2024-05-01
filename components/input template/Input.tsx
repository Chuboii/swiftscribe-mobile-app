import { TextInput } from 'react-native'
import React from 'react'

const Input = ({value = null, autoCapitalize = null, onChangeText = () => null, style = null, onEndEditing = () => null, autoCorrect = true, autoFocus = false, placeholder= null, placeholderColor=null}) => {
  return (
      <TextInput
          value={value}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          autoCorrect={autoCorrect}
          autoFocus={autoFocus}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          style={style}
          autoCapitalize={autoCapitalize}
      />
  )
}

export default Input