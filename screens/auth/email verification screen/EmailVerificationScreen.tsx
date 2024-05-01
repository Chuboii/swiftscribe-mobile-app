import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { styles } from './EmailVerificationScreen.style'
import Button from '../../../components/button template/Button';
import { navigateToCreatePasswordPage, navigateToEmailPage } from '../../../utils/navigations/navigations';
import CodeConfirmationInput from '../../../components/code confirmation input/CodeConfirmationInput';

const source = {
  uri:
    'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png',
}

const EmailVerificationScreen = ({ navigation }) => {

  const navigateToEmail = () => navigateToEmailPage(navigation)

  const navigateToCreatePassword = () => navigateToCreatePasswordPage(navigation)

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={navigateToEmail} style={styles.iconBox}>
        <AntDesign style={styles.icon} name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <View>
        <Text style={styles.title}>Verify your email</Text>
        <Image style={styles.icon1} source={source} />

        <Text style={styles.subTitle}>
          Please enter the verification code{'\n'}
          we send to your email address
        </Text>

        <CodeConfirmationInput />
      </View>
      <Text style={styles.box}>Didn't get anything? No worries, let's try again <Button disabled={true} text={"Resend"} textStyle={styles.btnText} containerStyle={null} helperFunction={null} imgStyle={null} icon={null} /></Text>

      <Button disabled={false} text={"Next"} textStyle={styles.nextButtonText} containerStyle={styles.nextButton} helperFunction={navigateToCreatePassword} />

    </SafeAreaView>
  )
}

export default EmailVerificationScreen