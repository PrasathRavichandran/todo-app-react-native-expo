import { createTheme } from "@shopify/restyle";

const palette = {
  warmGray50: "#fafaf9",
  primary900: "#164e63",

  muted300: "#d4d4d4",
  muted500: "#737373",

  blue400:"#60a5fa",
  blue500:"#3b82f6",
  lightBlue50:"#f0f9ff",
  
  darkText: "#27272a",
  white: "#FFFFFF",
  black: "#000000",
};

const theme = createTheme({
  colors: {
    background: palette.warmGray50,
    text: palette.darkText,
    textInput: palette.primary900,

    borderColor: palette.blue500,
    trackColor: palette.blue500,
    white: palette.white,
    black: palette.black,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 10,
    m: 20,
    l: 40,
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
    list:{
      fontSize: 18,
      color:"text"
    },
    defaults: {},
  },
  textInputVariants: {
    defaults: {
      flex: 1,
      fontSize: 16,
      marginLeft: "s",
    },
    light: {
      color: "white",
    },
    dark: {
      color: "black",
    },
  },
  iconVariants: {
    menu: {
      size: 36,
      color: "black",
    },
    menuLight: {
      size: 36,
      color: "black",
    },
    menuDark: {
      size: 36,
      color: "white",
    },
  }
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.primary900,
    text: palette.white,
    textInput: palette.warmGray50,
    borderColor: palette.blue400,
  },
};

export default theme;
