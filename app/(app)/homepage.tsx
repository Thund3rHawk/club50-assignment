import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { supabase } from "@/lib/superbase";
import useSession from "@/hooks/useSession";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const HomePage = () => {
  const { session } = useSession();

  async function signOut() {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      throw error;
    }
  }

  return (
    <View className="h-screen flex justify-center items-center gap-10">
      <Text className="font-bold text-[16px]">
        Hello 🖐️, {session?.user.user_metadata.email}
      </Text>
      <TouchableOpacity
        onPress={() => signOut()}
        className="p-4 rounded-lg flex flex-row justify-center items-center bg-cyan-300"
      >
        <Text className="text-black">Sign Out </Text>
        <MaterialIcons name="logout" size={22} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;
