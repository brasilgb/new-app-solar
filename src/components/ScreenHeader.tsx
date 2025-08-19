import { View, Text } from 'react-native'
import React from 'react'

interface ScreenHeaderProps {
    title: string
    subtitle?: string
}
const ScreenHeader = ({ title, subtitle}: ScreenHeaderProps) => {
    return (
        <View className='py-6 items-center justify-center'>
            <Text className='text-2xl font-RobotoBold text-white'>{title}</Text>
            <Text className='text-lg font-RobotoMedium text-white'>{subtitle}</Text>
        </View>
    )
}

export default ScreenHeader