import { SessionProvider } from "@/context/AuthContext";
import { Slot, Stack } from "expo-router";


export default function RootLayout() {

  // const {session} = useSession()
  // console.log("session from context:" , session);

  return (
    <SessionProvider>
       <Stack screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="index" /> */}
        <Stack.Screen name="auth" />
        <Stack.Screen name="(app)" />
      </Stack>
    </SessionProvider>
  );
}
