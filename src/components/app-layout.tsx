import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'

interface AppLayoutProps {
  children: ReactNode
}
const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <View>
      {children}
    </View>
  )
}

export default AppLayout