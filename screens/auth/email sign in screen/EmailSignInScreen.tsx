import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import { styles } from './EmailSignInScreen.style';
import Button from '../../../components/button template/Button';
import { navigateToEmailVerificationPage, navigateToSignupPage } from '../../../utils/navigations/navigations';
import Input from '../../../components/input template/Input';

const EmailSignInScreen = ({ navigation }) => {

  const navigate = () => navigateToSignupPage(navigation)

  const navigateTOEmailVerification = () => navigateToEmailVerificationPage(navigation)

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={navigate} style={styles.iconBox}>
        <AntDesign style={styles.icon} name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.wrapper}>
        <View style={styles.inputBox}>
          <AntDesign style={styles.emailIcon} name="mail" size={24} color="black" />
          <Input
            style={styles.input}
            placeholder='Email Address'
            autoCapitalize={"none"}
          />
        </View>

        <View style={styles.wrap}>

          <Text style={styles.text}>We'll send you a code to verify you're really you. </Text>
        </View>

        <Button disabled={false} text={"Next"} textStyle={styles.btnText} containerStyle={styles.btnStyles} helperFunction={navigateTOEmailVerification} />
      </View>
    </SafeAreaView>
  )
}

export default EmailSignInScreen