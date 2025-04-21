import { SessionProvider, useSession } from "@/context/AuthContext";
import { Slot } from "expo-router";


export default function RootLayout() {

  const {session} = useSession()
  console.log("session from context:" , session);

  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
