import { ActivityIndicator } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from '@/components/app-loading';
import { AuthProvider } from '@/contexts/AppContext';
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
    <AuthProvider>
      <Stack>
        <Stack.Screen name='(drawer)' options={{ headerShown: false }} />
        <Stack.Screen name='sign-in' options={{ headerShown: false }} />
        <Stack.Screen name='check-password' options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  )
}

export default RootLayout