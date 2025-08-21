import { View, Text } from 'react-native'
import React from 'react'

interface ScreenHeaderProps {
    title: string
    subtitle?: string
    textcolor?: string
}
const ScreenHeader = ({ title, subtitle, textcolor = 'white'}: ScreenHeaderProps) => {
    return (
        <View className='py-6 items-center justify-center'>
            {title && <Text className={`text-2xl font-RobotoBold ${textcolor}`}>{title}</Text>}
            {subtitle && <Text className={`text-lg font-RobotoMedium ${textcolor}`}>{subtitle}</Text>}
        </View>
    )
}

export default ScreenHeader