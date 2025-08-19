import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const AppLoading = () => {
    return (
        <View className='flex-1 items-center justify-center'>
            <ActivityIndicator size="large" color="#bccf00" />
        </View>
    )
}

export default AppLoading