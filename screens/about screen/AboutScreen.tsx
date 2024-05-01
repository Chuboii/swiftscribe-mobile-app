import { View, Text } from 'react-native'
import React from 'react'
import Prompt from '../../components/prompt/Prompt'
import { styles } from './AboutScreen.style'

const AboutScreen = () => {
  return (
    <View>
      <Prompt text="You haven't added any information yet" textStyle={styles.text} btnStyle={styles.btn} btnText={"add a bio"} btnTextStyle={styles.btnText} />
    </View>
  )
}

export default AboutScreen