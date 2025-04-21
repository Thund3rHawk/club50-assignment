import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { supabase } from '@/lib/superbase'

const HomePage = () => {

    async function signOut(){
        try {
            await supabase.auth.signOut();
        } catch (error) {
            throw error;
        }
    }

  return (
    <View>
      <Text>Hello from HomePage</Text>
      <TouchableOpacity onPress={()=>signOut()}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomePage