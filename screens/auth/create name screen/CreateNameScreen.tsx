import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { styles } from './CreateNameScreen.style'
import { AntDesign } from '@expo/vector-icons';
import Button from '../../../components/button/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../../utils/theme/theme/theme';
import { navigateToSignupPage, navigateToUploadAvatarPage } from '../../../utils/navigations/navigations';
import Input from '../../../components/input/Input';

const CreateNameScreen = ({navigation}) => {

    const navigateToSignup = () => navigateToSignupPage(navigation)

    const navigateToUploadAvatar = () => navigateToUploadAvatarPage(navigation)

  return (
      <SafeAreaView style={styles.container}>
          <View style={styles.wrapper}>
            <TouchableOpacity onPress={navigateToSignup} style={styles.iconBox}>
              <AntDesign style={styles.icon} name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>What's your name?</Text>
          <View>
                  <Input
                      style={styles.textInput}
                      placeholder='Tell us your name'
                      placeholderColor={theme().text}
              />
          </View>
          <Text style={styles.text1}>This is how it'll appear on your profile</Text>
          <Text style={styles.text2}>You can change it later</Text>
       </View>
          <Button helperFunction={navigateToUploadAvatar} containerStyle={styles.btnStyle} text={"Next"} textStyle={styles.btnText} />
    </SafeAreaView>
  )
}

export default CreateNameScreen