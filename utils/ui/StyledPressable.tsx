import {
  createRestyleComponent,
  spacing,
  SpacingProps,
  SpacingShorthandProps,
} from "@shopify/restyle";
import {
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
} from "react-native";
import { Theme } from "../theme";

const StyledPressable = createRestyleComponent<
  RNPressableProps & SpacingProps<Theme> & SpacingShorthandProps<Theme>,
  Theme
>([spacing], RNPressable);

export default StyledPressable;
