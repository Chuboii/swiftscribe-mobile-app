import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import SignUpScreen from '../../screens/auth/sign up screen/SignUpScreen'
import TabNavigation from '../tab navigation/TabNavigation'
import AccountRecoveryScreen from '../../screens/auth/account recovery screen/AccountRecoveryScreen'
import theme from '../../utils/theme/theme/theme'


const Stack = createNativeStackNavigator()

const uiTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "red"
    }
}

const StackNavigtion = () => {

  return (
      <NavigationContainer theme={uiTheme}>
          <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name="sign up" component={SignUpScreen} />
              <Stack.Screen name="account recovery" component={AccountRecoveryScreen} />
              {/* <Stack.Screen name="tab" component={TabNavigation}/> */}
          </Stack.Navigator>
      </NavigationContainer>
  )
}

export default StackNavigtion