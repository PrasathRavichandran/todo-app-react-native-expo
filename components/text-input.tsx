import useCustomTheme from "@/hooks/useCustomTheme";
import { Theme } from "@/utils/theme";
import Box from "@/utils/ui/Box";
import StyledIonicons from "@/utils/ui/StyledIonIcons";
import StyledPressable from "@/utils/ui/StyledPressable";
import StyledTextInput from "@/utils/ui/StyledTextInput";
import { useTheme } from "@shopify/restyle";
import { useState } from "react";

const CustomTextInput = () => {
  const { mode } = useCustomTheme();
  const theme = useTheme<Theme>();

  const [search, setSearch] = useState("");

  const onToggleMenu = () => {};
  return (
    <Box
      bg={"textInput"}
      px="m"
      borderRadius={"l"}
      py={"s"}
      flexDirection="row"
    >
      <StyledPressable onPress={onToggleMenu}>
        <StyledIonicons
          name={"menu-outline"}
          variant={!mode ? "menuDark" : "menuLight"}
        />
      </StyledPressable>
      <StyledTextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search todo..."
        variant={mode ? "dark" : "light"}
        placeholderTextColor={!mode ? theme.colors.white : theme.colors.black}
      />
    </Box>
  );
};

export default CustomTextInput;
