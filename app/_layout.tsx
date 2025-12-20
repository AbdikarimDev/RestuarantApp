import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="test" /> */}
      <Stack.Screen name="landingPage" />
      <Stack.Screen name="WelcomePage" />
    </Stack>
  );
}
