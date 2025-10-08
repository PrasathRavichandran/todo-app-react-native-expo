import useCustomTheme from "@/hooks/useCustomTheme";
import { Theme } from "@/utils/theme";
import Box from "@/utils/ui/Box";
import Text from "@/utils/ui/Text";
import { useTheme } from "@shopify/restyle";

import { useEffect, useState } from "react";

import { Pressable } from "react-native";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Checkbox from "./check-box";

const AnimatedBox = Animated.createAnimatedComponent(Box);
const AnimatedText = Animated.createAnimatedComponent(Text);

function ListItem() {
  const [isChecked, setIsChecked] = useState(false);
  const theme = useTheme<Theme>();
  const { mode } = useCustomTheme();

  const textOpacity = useSharedValue(0);
  const strikeThroughtWidth = useSharedValue(0);
  const hStackOffset = useSharedValue(0);

  const strikeThroughtAnimatedWidthStyle = useAnimatedStyle(
    () => ({
      width: `${strikeThroughtWidth.value * 100}%`,
      opacity: interpolate(textOpacity.value, [0, 1], [1, 0.4])
    }),
    [isChecked]
  );

  const textOpacityAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(textOpacity.value, [0, 1], [1, 0.4])
  }), [isChecked]);

  const hStackOffsetAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: hStackOffset.value }]
  }), [isChecked]);

  useEffect(() => {
    const easing = Easing.out(Easing.quad);
    if (isChecked) {
      hStackOffset.value = withSequence(
        withTiming(4, { duration: 200, easing }),
        withTiming(0, { duration: 200, easing })
      );
      strikeThroughtWidth.value = withTiming(1, { duration: 400, easing });
      textOpacity.value = withDelay(1000, withTiming(1, { duration: 400, easing }));
    } else {
      strikeThroughtWidth.value = withTiming(0, { duration: 400, easing });
      textOpacity.value = withTiming(0, { duration: 400, easing });
    }
  }, [isChecked]);

  return (
    <Box flexDirection="row" alignItems="center">
      <Box width={26} height={26} mr="xs">
        <Pressable onPress={() => setIsChecked(prev => !prev)}>
          <Checkbox checked={isChecked} />
        </Pressable>
      </Box>
      <AnimatedBox flexDirection="row" alignItems="center" style={[hStackOffsetAnimatedStyle]}>
        <AnimatedText variant={"list"}
          style={[textOpacityAnimatedStyle]}
        >This is the first task and it is for test.</AnimatedText>
        <AnimatedBox
          position="absolute"
          height={1}
          borderBottomWidth={1}
          style={[
            strikeThroughtAnimatedWidthStyle,
            { borderBottomColor: theme.colors.text },
          ]}
        />
      </AnimatedBox>
    </Box>
  );
}

export default ListItem;
