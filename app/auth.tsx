import React, { useState, useEffect } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Input } from '@rneui/themed'
import { supabase } from '@/lib/superbase'
import useSession from '@/hooks/useSession'
import { router } from 'expo-router'


export default function auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  
  async function signInWithEmail() {
    setLoading(true)
    const { error, data } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (error) Alert.alert(error.message)
    setLoading(false)
    if (data.session) router.replace('/(app)/homepage')
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  return (
    <View className='p-8 flex items-center justify-center h-screen'>
      <View className='border border-black rounded-full p-10 bg-gray-100'>
      <Image source={require('../assets/images/user.png')} className='h-32 w-32 m-auto' />
      </View>
      <View className='w-[95%] m-auto border border-black p-3 rounded-lg' >
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Input
            label="Email"
            leftIcon={{ type: 'font-awesome', name: 'envelope' }}
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholder="email@address.com"
            autoCapitalize={'none'}
          />
        </View>
        <View style={styles.verticallySpaced}>
          <Input
            label="Password"
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize={'none'}
          />
        </View>
        <TouchableOpacity className='p-4 w-full rounded-lg border border-cyan-300 my-2' onPress={() => signInWithEmail()}>
        <Text className='text-center'>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity className='p-4 w-full rounded-lg bg-cyan-300' onPress={() => signUpWithEmail()}>
          <Text className='text-center'>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})