import { View, Text, KeyboardAvoidingView, Platform, ActivityIndicator, Keyboard } from 'react-native'
import React, { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { CheckPasswordFormType, CheckPasswordSchema } from '@/schema/app';
import { zodResolver } from '@hookform/resolvers/zod';
import ScreenHeader from '@/components/ScreenHeader';
import { Input } from '@/components/Input';
import { ArrowRight } from 'lucide-react-native';
import { Button } from '@/components/Button';
import AuthLayout from '@/components/auth-layout';
import { maskCpfCnpj } from '@/lib/mask';

const CheckPassword = () => {

    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, reset, formState: { errors } } = useForm<CheckPasswordFormType>({
        defaultValues: {
            password: ''
        },
        resolver: zodResolver(CheckPasswordSchema)
    });

    const onSubmit: SubmitHandler<CheckPasswordFormType> = (data: CheckPasswordFormType) => {
        // setLoading(true)
        console.log(data);
        Keyboard.dismiss();
        reset();
    }

    return (
        <AuthLayout>

            <View className='h-52 w-full bg-white rounded-2xl'>
                <ScreenHeader title="Acessar conta" subtitle="Digite sua senha agora" textcolor={'text-gray-600'} />
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
                                    />
                                </View>
                            )}
                            name='password'
                        />
                        {errors.password && (
                            <Text className='text-solar-red-primary'>{errors.password?.message}</Text>
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

export default CheckPassword