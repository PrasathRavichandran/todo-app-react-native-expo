import ThemeToggler from "@/components/theme-toggler";
import Box from "@/utils/ui/Box";
import Text from "@/utils/ui/Text";

export default function Index() {
  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg={"background"}>
      <Text color="text">This is dark/light mode test</Text>
      <ThemeToggler />
    </Box>
  );
}
