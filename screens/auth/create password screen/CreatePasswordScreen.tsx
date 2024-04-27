import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons';
import Button from '../../../components/button/Button';
import { styles } from './CreatePassswordScreen.style';
import { Entypo } from '@expo/vector-icons';
import { navigateToCreateNamePage, navigateToSignupPage } from '../../../utils/navigations/navigations';
import theme from '../../../utils/theme/theme/theme';
import Input from '../../../components/input/Input';

const CreatePasswordScreen = ({ navigation }) => {
    
    const navigateToSignup = () => navigateToSignupPage(navigation)

    const navigateToCreateName = () => navigateToCreateNamePage(navigation)


  return (
      <SafeAreaView style={styles.container}>
                 <TouchableOpacity onPress={navigateToSignup} style={styles.iconBox}>
              <AntDesign style={styles.icon} name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          
          <View style={styles.inputBox}>
              <Input
                  placeholderColor={theme().text}
                  style={styles.input}
                  placeholder='create password'
              />
              <TouchableOpacity>
                  <Entypo style={styles.inputIcon} name="eye" size={24} color="black" />
                </TouchableOpacity>
          </View>

          <View style={styles.inputBox}>
              <Input
                   placeholderColor={theme().text}
                  style={styles.input}
               placeholder='confirm password'
              />
      <TouchableOpacity>
                  <Entypo style={styles.inputIcon} name="eye" size={24} color="black" />
                </TouchableOpacity>
          </View>

          <View style={styles.wrapper}>
              <View style={styles.wrap}>
                  <AntDesign style={styles.icon} name="checkcircleo" size={24} color="black" />
                  <Text style={styles.text}>Password must be greater than 8 and less than 20</Text>
              </View>

              <View style={styles.wrap}>
                  <AntDesign style={styles.icon} name="checkcircleo" size={24} color="black" />
                  <Text style={styles.text}>Password must contain a capital letter</Text>
              </View>

              <View style={styles.wrap}>
                  <AntDesign style={styles.icon} name="checkcircleo" size={24} color="black" />
                  <Text style={styles.text}>Password must contain a digit</Text>
              </View>

              <View style={styles.wrap}>
                  <AntDesign style={styles.icon} name="checkcircleo" size={24} color="black" />
                  <Text style={styles.text}>Password must contain a symbol (!@$%^&*)</Text>
              </View>
          </View>

          <Button text={"Create Account"} disabled={false} containerStyle={styles.btnStyle} textStyle={styles.btnText} helperFunction={navigateToCreateName} />
    </SafeAreaView>
  )
}

export default CreatePasswordScreen