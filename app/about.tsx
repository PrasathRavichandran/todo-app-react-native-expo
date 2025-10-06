import Box from "@/utils/ui/Box";
import Text from "@/utils/ui/Text";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function About() {
  const { top } = useSafeAreaInsets();
  return (
    <Box flex={1} style={{ paddingTop: top }} px="m" bg="background">
      <Text>About page!</Text>
    </Box>
  );
}
