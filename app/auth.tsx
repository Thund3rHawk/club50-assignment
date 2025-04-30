import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Input } from "@rneui/themed";
import { supabase } from "@/lib/superbase";
import { router } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import LoadingPopup from "@/components/LoadingPopup";

export default function auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState ("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    setMessage ("Signing In")
    const { error, data } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) Alert.alert(error.message);
    setLoading(false);
    setMessage ("")
    if (data.session) router.replace("/(app)/homepage");
  }
  
  async function signUpWithEmail() {
    setLoading(true);
    setMessage ("Signing Up")
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password
    });
    
    if (error) Alert.alert(error.message);
    if (!session) Alert.alert("Success! Sign In now");
    setLoading(false);
    setMessage ("")
  }

  return (
    <ScrollView>
      <View className="p-4 flex items-center justify-center h-screen">
        <View className="border border-black rounded-full p-10 bg-gray-100">
          <Image
            source={require("../assets/images/user.png")}
            className="h-32 w-32 m-auto"
          />
        </View>
        <View className="w-[100%] m-auto border border-black p-3 rounded-lg">
          <View style={[styles.verticallySpaced, styles.mt20]}>
            <Input
              label="Email"
              leftIcon={<MaterialIcons name="email" size={24} color="gray" />}
              onChangeText={(text) => setEmail(text)}
              value={email}
              labelStyle={{ color: "black" }}
              placeholder="Enter your email"
              autoCapitalize={"none"}
            />
          </View>
          <View style={styles.verticallySpaced}>
            <Input
              label="Password"
              leftIcon={<Entypo name="lock" size={24} color="gray" />}
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              labelStyle={{ color: "black" }}
              placeholder="Enter your password"
              autoCapitalize={"none"}
            />
          </View>
          <TouchableOpacity
            className="p-4 w-full rounded-lg border border-cyan-600 my-2"
            onPress={() => signInWithEmail()}
            disabled={loading}
          >
            <Text className="text-center font-semibold">Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="p-4 w-full rounded-lg bg-[#7AC6D2]"
            onPress={() => signUpWithEmail()}
            disabled={loading}
          >
            <Text className="text-center font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <LoadingPopup visible={loading} message={message}/> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: "stretch",
  },
  mt20: {
    marginTop: 20,
  },
});
