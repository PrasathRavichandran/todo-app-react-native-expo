import { Ionicons } from "@expo/vector-icons";
import {
    useTheme
} from "@shopify/restyle";
import React from "react";
import { Theme } from "../theme";

type IoniconsProps = React.ComponentProps<typeof Ionicons> & {
  variant?: keyof Theme["iconVariants"];
};

const StyledIonicons: React.FC<IoniconsProps> = ({
  variant = "menu",
  ...props
}) => {
  const theme = useTheme<Theme>();
  const variantStyles = theme.iconVariants[variant];
  return (
    <Ionicons
      size={variantStyles.size}
      color={theme.colors[variantStyles.color as keyof typeof theme.colors]}
      {...props}
    />
  );
};
export default StyledIonicons;
