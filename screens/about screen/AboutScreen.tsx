import { View, Text } from 'react-native'
import React from 'react'
import Prompt from '../../components/prompt/Prompt'
import { styles } from './AboutScreen.style'

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Prompt text="You haven't added any information yet"
      containerStyle={styles.promptContainer} textStyle={styles.text} btnStyle={styles.btn}
      btnText={"Add a bio"} btnTextStyle={styles.btnText} />
    </View>
  )
}

export default AboutScreen