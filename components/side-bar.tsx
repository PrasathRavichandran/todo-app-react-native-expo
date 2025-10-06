import Box from "@/utils/ui/Box";
import Text from "@/utils/ui/Text";
import { DrawerContentComponentProps } from "@react-navigation/drawer";

import { useCallback } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SideBarItem from "./side-bar-item";
import ThemeToggler from "./theme-toggler";

const SideBar = ({ state, navigation }: DrawerContentComponentProps) => {
  const { top } = useSafeAreaInsets();
  const currentRoute = state.routeNames[state.index];

  const handlePressMenuMain = useCallback(() => {
    navigation.navigate("index");
  }, [navigation]);

  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate("about");
  }, [navigation]);

  return (
    <Box style={{ paddingTop: top }} bg="sidebarBg" flex={1} paddingBottom="xl">
      <Box flex={1}>
        <Box p="m">
          <Text variant={"sidebarHeading"} color="text">
            Todo application
          </Text>
        </Box>

        <SideBarItem
          active={currentRoute === "index"}
          item="Tasks"
          iconName="archive-outline"
          onPress={handlePressMenuMain}
        />
        <SideBarItem
          active={currentRoute === "about"}
          onPress={handlePressMenuAbout}
          item="About"
          iconName={"information-circle-outline"}
        />
      </Box>
      <ThemeToggler />
    </Box>
  );
};

export default SideBar;
