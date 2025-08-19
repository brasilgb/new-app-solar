import React, { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import ScreenHeader from '@/components/ScreenHeader'
import { ScrollView, View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import { Input } from '@/components/Input'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AccountFormType, accountSchema } from '@/schema/app'
import AppLoading from '@/components/app-loading'

const Account = () => {
  const { bottom } = useSafeAreaInsets();
const [ loading, setLoading ] = useState<boolean>(false);

  useEffect(() => {
    const getCustomers = async () => {
      // setLoading(true)
    };
    getCustomers();
  }, []);

  const { control, handleSubmit, formState: { errors } } = useForm<AccountFormType>({
    defaultValues: {
      cpfCliente: '97755150097'
    },
    resolver: zodResolver(accountSchema)
  });

  const onSubmit: SubmitHandler<AccountFormType> = (data: AccountFormType) => {
    console.log(data);
  }

  if (loading) {
    return <AppLoading />
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}
    >
      <View className='bg-solar-blue-primary'>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingBottom: bottom }}
          keyboardShouldPersistTaps="handled"
        >
          <ScreenHeader title="Minha Conta" subtitle="Alterar dados da minha conta" />
          <View className='p-4 bg-white rounded-t-3xl'>
            <View className='flex-col gap-4 my-4'>
              <Controller
                control={control}
                render={({
                  field: { onChange, onBlur, value }
                }) => (
                  <View>
                    <Input
                      label='CPF/CNPJ'
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                )}
                name='cpfCliente'
              />

              <Controller
                control={control}
                render={({
                  field: { onChange, onBlur, value }
                }) => (
                  <View>
                    <Input
                      label='Nome completo'
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                )}
                name='nomeCliente'
              />
              {errors.nomeCliente && (
                <Text className='text-solar-red-primary'>{errors.nomeCliente?.message}</Text>
              )}

              <Controller
                control={control}
                render={({
                  field: { onChange, onBlur, value }
                }) => (
                  <View>
                    <Input
                      label='Endereço'
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                )}
                name='enderecoCliente'
              />

              <Controller
                control={control}
                render={({
                  field: { onChange, onBlur, value }
                }) => (
                  <View>
                    <Input
                      label='CEP'
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                )}
                name='cepCliente'
              />
              {errors.nomeCliente && (
                <Text className='text-solar-red-primary'>{errors.nomeCliente?.message}</Text>
              )}

              <Controller
                control={control}
                render={({
                  field: { onChange, onBlur, value }
                }) => (
                  <View>
                    <Input
                      label='Estado'
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                )}
                name='ufCliente'
              />

              <Controller
                control={control}
                render={({
                  field: { onChange, onBlur, value }
                }) => (
                  <View>
                    <Input
                      label='Cidade'
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                )}
                name='cidadeCliente'
              />

              <Controller
                control={control}
                render={({
                  field: { onChange, onBlur, value }
                }) => (
                  <View>
                    <Input
                      label='Celular'
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                )}
                name='celularCliente'
              />

              <Controller
                control={control}
                render={({
                  field: { onChange, onBlur, value }
                }) => (
                  <View>
                    <Input
                      label='E-mail'
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  </View>
                )}
                name='emailCliente'
              />

              <Controller
                control={control}
                render={({
                  field: { onChange, onBlur, value }
                }) => (
                  <View>
                    <Input
                      label='Nascimento'
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      keyboardType='decimal-pad'
                    />
                  </View>
                )}
                name='nascimentoCliente'
              />
            </View>
            <Button
              label={'Alterar'}
              variant={'secondary'}
              size={'lg'}
              onPress={handleSubmit(onSubmit)}
            />

          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Account