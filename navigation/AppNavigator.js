
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MapScreen from '../screens/MapScreen'
import { UserContext } from '../contexts/UserContext'
import SettingsStack from './SettingsStack'
import UsersStack from './UsersStack'
import QRStack from './QRStack'
import SportsStack from './SportsStack'
import ReservationsStack from './ReservationsStack'

const Tab = createBottomTabNavigator()

const AppNavigator = () => {
    const user = React.useContext(UserContext).user

    return (
        <Tab.Navigator initialRouteName='Pools'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName

                    if (route.name === 'Pools') {
                        iconName = 'water'
                    } else if (route.name === 'Settings') {
                        iconName = 'settings'
                    } else if (route.name === 'Map') {
                        iconName = 'map'
                    } else if (route.name === 'Favourites') {
                        iconName = 'heart'
                    } else if (route.name === 'Users') {
                        iconName = 'person'
                    } else if (route.name === 'QR Scanner') {
                        iconName = 'qr-code'
                    } else if (route.name === 'Reservations') {
                        iconName = 'book'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: '#00ADB5',
                tabBarInactiveTintColor: '#393E46',
                headerShown: false
            })}
        >
            <Tab.Screen name='Pools' component={SportsStack} />
            <Tab.Screen name='Map' component={MapScreen} />
            <Tab.Screen name='Reservations' component={ReservationsStack} />
            {user.role === 'admin' &&
                <>
                    <Tab.Screen name='Users' component={UsersStack} />
                    <Tab.Screen name='QR Scanner' component={QRStack} />
                </>
            }
            <Tab.Screen name='Settings' component={SettingsStack} />
        </Tab.Navigator>
    )
}

export default AppNavigator