import SideBar from "@/components/side-bar";
import ThemeContextProvider from "@/context/theme-context";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <ThemeContextProvider>
      <Drawer screenOptions={{ headerShown: false }}
      drawerContent={props => <SideBar {...props}/>}
      >
        <Drawer.Screen name="index" />
        <Drawer.Screen name="about" />
      </Drawer>
    </ThemeContextProvider>
  );
}
