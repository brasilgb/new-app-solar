import { Tabs } from 'expo-router'
import { RotateCcwKeyIcon, UserIcon } from 'lucide-react-native'
import React from 'react'

function TabsLayout() {
  return (
    <Tabs
    screenOptions={{
        headerShown: false
    }}
    >
        <Tabs.Screen 
        name="account"
        options={{
            title: 'Conta',
            tabBarIcon: ({ color, size }) => (
              <UserIcon color={color} size={size} />
            )
        }}
        />
        <Tabs.Screen 
        name="change-password"
        options={{
            title: 'Alterar senha',
            tabBarIcon: ({ color, size }) => (
              <RotateCcwKeyIcon color={color} size={size} />
            )
        }}
        />
    </Tabs>
  )
}

export default TabsLayout