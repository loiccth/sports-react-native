import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SettingsScreen from '../screens/SettingsScreen'
import AccountScreen from '../screens/AccountScreen'
import UpdatePasswordScreen from '../screens/UpdatePasswordScreen'
import MembershipScreen from '../screens/MembershipScreen'
import MembershipPaymentScreen from '../screens/MembershipPaymentScreen'
import MembershipPaymentSuccessScreen from '../screens/MembershipPaymentSuccessScreen'
import AboutUs from '../screens/AboutUs'
import TermsConditionsScreen from '../screens/TermsConditionsScreen'

const Stack = createStackNavigator()

export default function SettingsStack() {
    return (
        <Stack.Navigator initialRouteName='Setting'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Setting' component={SettingsScreen} />
            <Stack.Screen name='Account' component={AccountScreen} />
            <Stack.Screen name='UpdatePassword' component={UpdatePasswordScreen} />
            <Stack.Screen name='Membership' component={MembershipScreen} />
            <Stack.Screen name='MembershipPayment' component={MembershipPaymentScreen} />
            <Stack.Screen name='MembershipPaymentSuccess' component={MembershipPaymentSuccessScreen} />
            <Stack.Screen name='AboutUs' component={AboutUs} />
            <Stack.Screen name='TermsConditions' component={TermsConditionsScreen} />
        </Stack.Navigator>
    )
}