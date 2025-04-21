import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { supabase } from "@/lib/superbase";

const HomePage = () => {
  async function signOut() {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      throw error;
    }
  }

  return (
    <View>
      <Text>Hello from HomePage</Text>
      <TouchableOpacity
        onPress={() => signOut()}
        className="w-80 bg-black m-10"
      >
        <Text className="text-white">Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;
