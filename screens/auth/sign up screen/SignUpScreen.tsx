import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../../../components/button/Button'
import { styles } from './SignUpScreen.style'
import {  signupWithFacebook, signupWithGoogle, signupWithPhone } from '../../../utils/auth/signUp'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme from '../../../utils/theme/theme/theme'

const SignUpScreen = ({ navigation }) => {
    


    
 const navigateToAccountRecovery = () => {
    navigation.navigate("account recovery")
    }
    
  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.wrap}>
              <Image source={require("../../../assets/logo.png")} style={styles.logoImg} />
              <Text style={styles.logoTxt}>Swiftscribe</Text>
          </View>

          <View style={styles.box}>
          <Text style={styles.text}>By tapping 'Sign in' you agree to our <TouchableOpacity><Text style={[styles.text,  {color:theme().primary}]}>Terms</Text></TouchableOpacity>. Learn how we process your data in our <TouchableOpacity><Text style={[styles.text,  {color:theme().primary}]}>Privacy Policy</Text></TouchableOpacity> and <TouchableOpacity><Text style={[styles.text, {color:theme().primary}]}>Cookies Policy</Text></TouchableOpacity>.</Text>
        
        <View style={styles.btnWrapper}>
          <Button helperFunction={signupWithGoogle} icon={require("../../../assets/googleIcon.png")} text={"Sign in with Google"} imgStyle={styles.imgStyles} textStyle={styles.btnText} containerStyle={styles.btnStyles}/>
          <Button helperFunction={signupWithFacebook} icon={require("../../../assets/facebookIcon.png")} text={"Sign in with Facebook"}  imgStyle={styles.imgStyles} textStyle={styles.btnText} containerStyle={styles.btnStyles}/>
          <Button helperFunction={signupWithPhone} icon={require("../../../assets/phoneIcon.png")} text={"Sign in with Google"} imgStyle={styles.imgStyles} textStyle={styles.btnText} containerStyle={styles.btnStyles} />
              </View>
              <Button text={"Trouble signin in?"} icon={null} textStyle={[styles.text, {textAlign:"center", marginVertical:20}]} imgStyle={null} containerStyle={null} helperFunction={navigateToAccountRecovery}/>
          </View>
          
    </SafeAreaView>
  )
}

export default SignUpScreen