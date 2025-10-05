import useCustomTheme from "@/hooks/useCustomTheme";
import { Theme } from "@/utils/theme";
import Box from "@/utils/ui/Box";
import Text from "@/utils/ui/Text";
import { useTheme } from "@shopify/restyle";
import { Switch } from "react-native";

const ThemeToggler = () => {
  const { onToggleThemeMode, mode } = useCustomTheme();

  const theme = useTheme<Theme>();
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      mt={"m"}
      flexDirection="row"
      gap={"s"}
    >
      <Text color="text">Light</Text>
      <Switch
        value={mode}
        onValueChange={onToggleThemeMode}
        trackColor={{ true: theme.colors.trackColor }}
      />
      <Text color="text">Dark</Text>
    </Box>
  );
};

export default ThemeToggler;
