// app/(app)/_layout.tsx
import useSession from "@/hooks/useSession";
import { Redirect, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function AppLayout() {
  const { session, loading } = useSession();
    console.log(session);
    
  if (loading) {
    // Optionally show a loading screen
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading session...</Text>
      </View>
    );
  }

  // Redirect if not authenticated
  if (!session) {
    return <Redirect href="/auth" />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
