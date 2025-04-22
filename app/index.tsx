import { useEffect } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => router.replace("/auth"), 1000);
    return () => clearTimeout(timeout);
  });

  return (
    <View className="h-screen bg-gray-100">
        <View className="m-auto">
            <Image
                source={require ("../assets/images/man.png")}
                className="h-52 w-52 m-auto"
            />
            <Text className="text-center text-2xl mt-10"> Welcome to My App</Text>
        </View>
    </View>
  );
}