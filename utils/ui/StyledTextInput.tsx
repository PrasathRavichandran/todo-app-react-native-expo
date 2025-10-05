import {
  createRestyleComponent,
  createVariant,
  SpacingShorthandProps,
  VariantProps,
} from "@shopify/restyle";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Theme } from "../theme";

const StyledTextInput = createRestyleComponent<
  RNTextInputProps &
    VariantProps<Theme, "textInputVariants"> &
    SpacingShorthandProps<Theme>,
  Theme
>([createVariant({ themeKey: "textInputVariants" })], RNTextInput);

export default StyledTextInput;
