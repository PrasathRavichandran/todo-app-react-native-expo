import ThemeContextProvider from "@/context/theme-context";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeContextProvider>
      <Stack screenOptions={{headerShown: false}}/>
    </ThemeContextProvider>
  );
}
