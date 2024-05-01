import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../../components/button template/Button';
import { styles } from './AccountRecoveryScreen..style';
import { navigateToAcctRecoveryEmailLoginPage, navigateToSignupPage } from '../../../utils/navigations/navigations';

const AccountRecoveryScreen = ({ navigation }) => {

  const navigate = () => navigateToSignupPage(navigation)

  const navigateToAcctRecoveryEmailLogin = () => navigateToAcctRecoveryEmailLoginPage(navigation)

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={navigate} style={styles.iconBox}>
        <AntDesign style={styles.icon} name="arrowleft" size={24} color="black" />
      </TouchableOpacity>


      <View style={styles.wrapper}>
        <Text style={styles.title}>Account Recovery</Text>
        <Text style={styles.text}>Changed your phone number, or lost access to your Facebook Account? We can help you login with your email</Text>
        <Button helperFunction={navigateToAcctRecoveryEmailLogin} text={"Login with email"} textStyle={styles.btnText} containerStyle={styles.btnStyle} />
      </View>
    </SafeAreaView>
  )
}

export default AccountRecoveryScreen