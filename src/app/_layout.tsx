import { ActivityIndicator } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
   import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from '@/components/app-loading';
   const RootLayout = () => {

    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
    });

    if (!fontsLoaded) {
       return <AppLoading />;
   }
   
  return (
    <Stack>
        <Stack.Screen name='(drawer)' options={{ headerShown: false }} />
    </Stack>
  )
}

export default RootLayout