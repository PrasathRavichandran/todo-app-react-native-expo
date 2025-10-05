import ListItem from "@/components/list-item";
import ThemeToggler from "@/components/theme-toggler";
import Box from "@/utils/ui/Box";

export default function Index() {
  return (
    <Box flex={1} justifyContent="center" bg={"background"} px={"m"}>
      <ListItem />
      <ThemeToggler/>
    </Box>
  );
}
