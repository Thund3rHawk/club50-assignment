import useSession from "@/hooks/useSession";
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function AppLayout() {
  const { session } = useSession();

  if (!session) {
    return <Redirect href="/auth" />;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="homepage" options={{ headerTitle: "HomePage" }} />
      </Stack>
    </>
  );
}
