import { useSession } from "@/context/AuthContext";
import { Redirect, Stack } from "expo-router";

export default function AppLayout() {
  
  const {session} = useSession()

  console.log("the current session is: ", session);
  
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
