import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import SignUpScreen from '../../screens/auth/sign up screen/SignUpScreen'
import TabNavigation from '../tab navigation/tabNavigation'
import AccountRecoveryScreen from '../../screens/auth/account recovery screen/AccountRecoveryScreen'
import theme from '../../utils/theme/theme/theme'
import EmailSignInScreen from '../../screens/auth/email sign in screen/EmailSignInScreen'
import EmailVerificationScreen from '../../screens/auth/email verification screen/EmailVerificationScreen'
import CreatePasswordScreen from '../../screens/auth/create password screen/CreatePasswordScreen'
import CreateNameScreen from '../../screens/auth/create name screen/CreateNameScreen'
import UploadAvatarScreen from '../../screens/auth/upload avatar screen/UploadAvatarScreen'
import LoginPasswordScreen from '../../screens/auth/login password screen/LoginPasswordScreen'
import AcctRecoveryEmailLoginScreen from '../../screens/auth/account recovery email login screen/AcctRecoveryEmailLoginScreen'
import TapNavigation from '../top navigation/HomeTopNavigation'


const Stack = createNativeStackNavigator()

const uiTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: theme().background
    }
}

const StackNavigtion = () => {

  return (
      <NavigationContainer theme={uiTheme}>
          <Stack.Navigator
              initialRouteName='tab'
              screenOptions={{
              headerShown: false,
              animation:"none"
          }}>
              <Stack.Screen name="sign up" component={SignUpScreen} />
              <Stack.Screen name="account recovery" component={AccountRecoveryScreen} />
              <Stack.Screen name="email signin" component={EmailSignInScreen} />
              <Stack.Screen name="email verification" component={EmailVerificationScreen} />
              <Stack.Screen name="create password" component={CreatePasswordScreen} />
              <Stack.Screen name="create name" component={CreateNameScreen} />
              <Stack.Screen name="upload avatar" component={UploadAvatarScreen} />
              <Stack.Screen name="login password" component={LoginPasswordScreen} />
              <Stack.Screen name="acct recovery email login" component={AcctRecoveryEmailLoginScreen} />
              <Stack.Screen name="tab" component={TabNavigation} />
              <Stack.Screen name="tap" component={TapNavigation}/>
          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default StackNavigtion