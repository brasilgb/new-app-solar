import { Image, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuIcon } from 'lucide-react-native';

const CustomHeader = () => {
    const navigation = useNavigation() as any;
    const { top } = useSafeAreaInsets();
    return (
        <View className='bg-solar-blue-primary h-24 flex-row items-center justify-between px-4' style={{ paddingTop: top }}>
            <Text>
                <MenuIcon color={'white'} onPress={() => navigation.openDrawer()} />
            </Text>
            <Image source={require('@/assets/images/logo_lojas_solar.png')} className='h-12 w-3/5' />
            <Text></Text>
        </View>
    )
}

export default CustomHeader