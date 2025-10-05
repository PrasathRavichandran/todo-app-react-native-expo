import { createTheme } from "@shopify/restyle";

const palette = {
  warmGray50: "#fafaf9",
  primary900: "#164e63",
  fuchsia400:"#e879f9",
  darkText: "#27272a",
  white: "#FFFFFF",
  black: "#000000",
};

const theme = createTheme({
  colors: {
    background: palette.warmGray50,
    text: palette.darkText,
    trackColor: palette.fuchsia400
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: "bold",
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {},
  },
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.primary900,
    text: palette.white,
  },
};

export default theme;
