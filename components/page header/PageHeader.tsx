import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, TouchableOpacity } from "react-native"
import React from 'react'

const PageHeader = ({ text = "Explore", button = null, handleFunction = () =>
  null, containerStyle = null, textStyle = null, btnStyle = null }) => {

  return (
    <SafeAreaView style={containerStyle}>
      <Text style={textStyle}> {text} </Text>
      <TouchableOpacity style={btnStyle} onPress={handleFunction}>
        {button}
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default PageHeader