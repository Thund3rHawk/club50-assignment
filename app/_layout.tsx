import { SessionProvider } from "@/context/AuthContext";
import { Slot } from "expo-router";
import { StatusBar } from "react-native";


export default function RootLayout() {

  return (
    <SessionProvider>
      <StatusBar barStyle= 'dark-content' />
      <Slot/>
    </SessionProvider>
  );
}
