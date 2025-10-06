import useCustomTheme from "@/hooks/useCustomTheme";
import { Theme } from "@/utils/theme";
import Box from "@/utils/ui/Box";
import Text from "@/utils/ui/Text";
import { useTheme } from "@shopify/restyle";
import { Checkbox } from "expo-checkbox";
import { useEffect, useState } from "react";

import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AnimatedBox = Animated.createAnimatedComponent(Box);

function ListItem() {
  const [isChecked, setIsChecked] = useState(false);
  const theme = useTheme<Theme>();
  const { mode } = useCustomTheme();

  const strikeThroughtWidth = useSharedValue(0);
  const strikeThroughtAnimatedWidthStyle = useAnimatedStyle(
    () => ({
      width: `${strikeThroughtWidth.value * 100}%`,
    }),
    [isChecked]
  );

  useEffect(() => {
    const easing = Easing.out(Easing.quad);
    if (isChecked) {
      strikeThroughtWidth.value = withTiming(1, { duration: 400, easing });
    } else {
      strikeThroughtWidth.value = withTiming(0, { duration: 400, easing });
    }
  }, [isChecked]);

  return (
    <Box flexDirection="row" alignItems="center">
      <Checkbox
        style={{ margin: 8 }}
        value={isChecked}
        onValueChange={setIsChecked}
        color={"#3b82f6"}
      />
      <Box flexDirection="row" alignItems="center">
        <Text variant={"list"}>This is the first task and it is for test.</Text>
        <AnimatedBox
          position="absolute"
          height={1}
          borderBottomWidth={1}
          style={[
            strikeThroughtAnimatedWidthStyle,
            { borderBottomColor: theme.colors.text },
          ]}
        />
      </Box>
    </Box>
  );
}

export default ListItem;
