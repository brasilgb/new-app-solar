import { View, Text } from 'react-native'
import React from 'react'
import Button from '@/components/Button'

const Account = () => {
  return (
    <View>
        <Button label={'ok'} className={'bg-red-300'} />
      <Text className='text-6xl'>Account</Text>
    </View>
  )
}

export default Account