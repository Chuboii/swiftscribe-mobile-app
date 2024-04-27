import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { navigateToCreateNamePage, navigateToSignupPage } from '../../../utils/navigations/navigations';
import theme from '../../../utils/theme/theme/theme';
import Input from '../../../components/input/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './LoginPasswordScreen.style';
import { AntDesign } from '@expo/vector-icons';
import Button from '../../../components/button/Button';
const LoginPasswordScreen = () => {


  return (
      <SafeAreaView style={styles.container}>
                 <TouchableOpacity onPress={null} style={styles.iconBox}>
              <AntDesign style={styles.icon} name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Login to your account</Text>
          <View style={styles.inputBox}>
              <Input
                  placeholderColor={theme().text}
                  style={styles.input}
                  placeholder='Enter your password'
              />
              <TouchableOpacity>
                  <Entypo style={styles.inputIcon} name="eye" size={24} color="black" />
                </TouchableOpacity>
          </View>
          <Button text={"Login"} disabled={false} containerStyle={styles.btnStyle} textStyle={styles.btnText} helperFunction={null} />
    </SafeAreaView>
  )
}

export default LoginPasswordScreen