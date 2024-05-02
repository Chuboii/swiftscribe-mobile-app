import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import SignUpScreen from '../../screens/auth/sign up screen/SignUpScreen'
import TabNavigation from '../tab navigation/TabNavigation'
import AccountRecoveryScreen from '../../screens/auth/account recovery screen/AccountRecoveryScreen'
import theme from '../../utils/theme/theme/theme'
import EmailSignInScreen from '../../screens/auth/email sign in screen/EmailSignInScreen'
import EmailVerificationScreen from '../../screens/auth/email verification screen/EmailVerificationScreen'
import CreatePasswordScreen from '../../screens/auth/create password screen/CreatePasswordScreen'
import CreateNameScreen from '../../screens/auth/create name screen/CreateNameScreen'
import UploadAvatarScreen from '../../screens/auth/upload avatar screen/UploadAvatarScreen'
import LoginPasswordScreen from '../../screens/auth/login password screen/LoginPasswordScreen'
import AcctRecoveryEmailLoginScreen from '../../screens/auth/account recovery email login screen/AcctRecoveryEmailLoginScreen'
import HomeTopNavigation from '../top navigation/home top navigation/HomeTopNavigation'
import NotificationScreen from '../../screens/notification screen/NotificationScreen'
import ExploreScreen from '../../screens/explore screen/ExploreScreen'
import SearchScreen from '../../screens/search screen/SearchScreen'


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
                   // animation: ""
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
                <Stack.Screen options={{ presentation: "modal" }} name="search" component={SearchScreen} />
                <Stack.Screen name="tab" component={TabNavigation} />
                <Stack.Screen name="explore" component={ExploreScreen} />

                {/*
              <Stack.Screen name="tap" component={HomeTopNavigation} />*/}

                <Stack.Screen name="notification" component={NotificationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigtion