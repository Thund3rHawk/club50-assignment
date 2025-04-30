import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { supabase } from "@/lib/superbase";
import useSession from "@/hooks/useSession";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import LoadingPopup from "@/components/LoadingPopup";

const HomePage = () => {
  const { session } = useSession();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function signOut() {
    try {
      setLoading(true);
      setMessage("Signing Out");
      await supabase.auth.signOut();
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
      setMessage("");
    }
  }

  return (
    <>
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
      <LoadingPopup visible={loading} message={message} />
    </>
  );
};

export default HomePage;
