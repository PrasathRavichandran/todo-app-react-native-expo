import theme, { darkTheme } from "@/utils/theme";
import { ThemeProvider } from "@shopify/restyle";
import { createContext, PropsWithChildren, useState } from "react";

export type ThemeContextProps = {
  onToggleThemeMode: () => void;
  mode: boolean;
};

export const ThemeContext = createContext<ThemeContextProps>({
  onToggleThemeMode: () => {},
  mode: false
});

const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [darkMode, setDarkMode] = useState(false);

  const onToggleThemeMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ onToggleThemeMode, mode: darkMode }}>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
