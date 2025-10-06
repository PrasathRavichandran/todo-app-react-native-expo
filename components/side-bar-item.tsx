import useCustomTheme from "@/hooks/useCustomTheme";
import Box from "@/utils/ui/Box";
import StyledIonicons from "@/utils/ui/StyledIonIcons";
import Text from "@/utils/ui/Text";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable } from "react-native";

type SideBarItemProps = {
  active: boolean;
  item: string;
  iconName: React.ComponentProps<typeof Ionicons>["name"];
  onPress: () => void;
};

const SideBarItem = ({ active, item, iconName, onPress }: SideBarItemProps) => {
  const { mode } = useCustomTheme();
  return (
    <Pressable onPress={onPress}>
      <Box
        mx="s"
        p="m"
        borderRadius="l"
        bg={!active ? "transparent" : "sidebarItemBg"}
        flexDirection="row"
        alignItems="center"
        gap="s"
      >
        <StyledIonicons
          name={iconName}
          size={20}
          variant={mode ? "menuDark" : "menuLight"}
        />
        <Text color="text" style={{ fontSize: 16 }}>
          {item}
        </Text>
      </Box>
    </Pressable>
  );
};

export default SideBarItem;
