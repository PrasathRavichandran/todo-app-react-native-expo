import ListItem from "@/components/list-item";
import CustomTextInput from "@/components/text-input";
import Box from "@/utils/ui/Box";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const { top } = useSafeAreaInsets();
  return (
    <Box flex={1} style={{ paddingTop: top }} px="m" bg="background">
      <CustomTextInput />
      <Box py="xs" style={{paddingTop: 15}}>
        <ListItem />
      </Box>
    </Box>
  );
}
