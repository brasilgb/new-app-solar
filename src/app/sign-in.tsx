import { View, Text, KeyboardAvoidingView, Platform, ActivityIndicator, Keyboard, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { SignInFormType, signInSchema } from '@/schema/app';
import { zodResolver } from '@hookform/resolvers/zod';
import ScreenHeader from '@/components/ScreenHeader';
import { Input } from '@/components/Input';
import { ArrowRight } from 'lucide-react-native';
import { Button } from '@/components/Button';
import AuthLayout from '@/components/auth-layout';
import { maskCpfCnpj } from '@/lib/mask';
import { router } from 'expo-router';
import { useAuthContext } from '@/contexts/AppContext';
import { SignInProps, UserProps } from '@/types/user';

const SignIn = () => {

    const {loading, setLoading, signIn} = useAuthContext();

    const { control, handleSubmit, reset, formState: { errors } } = useForm<SignInFormType>({
        defaultValues: {
            cpfcnpj: ''
        },
        resolver: zodResolver(signInSchema)
    });

    const onSubmit: SubmitHandler<SignInFormType> = async (data: SignInFormType) => {
        let cpfcnpj = data?.cpfcnpj as any;
        const response = await signIn(cpfcnpj);
        console.log(response);
        
        Keyboard.dismiss();
        reset();
    }

    return (
        <AuthLayout>
<TouchableOpacity onPress={() => router.push('/check-password')} className='bg-red-600 p-8'>
    <Text>teste</Text>
</TouchableOpacity>
            <View className='h-52 w-full bg-white rounded-2xl'>
                <ScreenHeader title="Acessar conta" subtitle="Digite seu cpf/cnpj para acessar sua conta" textcolor={'text-gray-600'} />
                <View className='px-4 bg-white rounded-t-3xl'>
                    <View className='flex-col relative'>
                        <Controller
                            control={control}
                            render={({
                                field: { onChange, onBlur, value }
                            }) => (
                                <View>
                                    <Input
                                        label=''
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={maskCpfCnpj(value)}
                                        keyboardType='numeric'
                                    />
                                </View>
                            )}
                            name='cpfcnpj'
                        />
                        {errors.cpfcnpj && (
                            <Text className='text-solar-red-primary'>{errors.cpfcnpj?.message}</Text>
                        )}
                        <Button
                            label={loading ? <ActivityIndicator size="small" color="#bccf00" /> : <ArrowRight />}
                            variant={'link'}
                            size={'icon'}
                            onPress={handleSubmit(onSubmit)}
                            className={`absolute right-1 top-1 border border-gray-400 rounded-full ${loading ? 'pt-3' : 'pt-2'} items-center justify-center`}
                        />
                    </View>
                </View>
            </View>
        </AuthLayout>
    )
}

export default SignIn