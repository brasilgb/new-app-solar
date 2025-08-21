import { Image, KeyboardAvoidingView, Platform, View } from 'react-native'
import React, { ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 80}
      className='flex-1'
    >
      <View className='flex-1 justify-center items-center bg-solar-blue-primary px-3'>
        <View className='mb-16 -m-20'>
          <Image source={require('@/assets/images/logo_lojas_solar.png')} className='w-80 h-16' />
        </View>
        {children}
      </View>
    </KeyboardAvoidingView>
  )
}

export default AuthLayout