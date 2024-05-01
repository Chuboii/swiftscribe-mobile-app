import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../../../components/button template/Button'
import { styles } from './SignUpScreen.style'
import { signupWithFacebook, signupWithGoogle, signupWithPhone } from '../../../utils/auth/signUp'
import { navigateToEmailPage, navigateToAccountRecovery } from '../../../utils/navigations/navigations'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme from '../../../utils/theme/theme/theme'

const SignUpScreen = ({ navigation }) => {




  const navigateToAcctRecovery = () => navigateToAccountRecovery(navigation)

  const navigateToEmail = () => navigateToEmailPage(navigation)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <Image source={require("../../../assets/logo.png")} style={styles.logoImg} />
        <Text style={styles.logoTxt}>Swiftscribe</Text>
      </View>

      <View style={styles.box}>
        <Text style={styles.text}>By tapping 'Sign in' you agree to our <TouchableOpacity><Text style={[styles.text, { color: theme().primary }]}>Terms</Text></TouchableOpacity>. Learn how we process your data in our <TouchableOpacity><Text style={[styles.text, { color: theme().primary }]}>Privacy Policy</Text></TouchableOpacity> and <TouchableOpacity><Text style={[styles.text, { color: theme().primary }]}>Cookies Policy</Text></TouchableOpacity>.</Text>

        <View style={styles.btnWrapper}>
          <Button helperFunction={signupWithGoogle} icon={require("../../../assets/googleIcon.png")} text={"Sign in with Google"} imgStyle={styles.imgStyles} textStyle={styles.btnText} containerStyle={styles.btnStyles} />
          <Button helperFunction={signupWithFacebook} icon={require("../../../assets/facebookIcon.png")} text={"Sign in with Facebook"} imgStyle={styles.imgStyles} textStyle={styles.btnText} containerStyle={styles.btnStyles} />
          <Button helperFunction={navigateToEmail} icon={require("../../../assets/images/emailIcon.png")} text={"Sign in with Email"} imgStyle={styles.imgStyles} textStyle={styles.btnText} containerStyle={styles.btnStyles} />
        </View>
        <Button text={"Trouble signin in?"} textStyle={[styles.text, { textAlign: "center", color: theme().primary, marginVertical: 20 }]} helperFunction={navigateToAcctRecovery} />
      </View>

    </SafeAreaView>
  )
}

export default SignUpScreen