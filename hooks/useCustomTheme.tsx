import { ThemeContext, ThemeContextProps } from "@/context/theme-context";
import { useContext } from "react";

const useCustomTheme = () => {
    const context = useContext<ThemeContextProps>(ThemeContext);
    if(context === undefined){
        throw new Error("Please wrap the component inside the ThemeContext provider");
    }
    return context;
}

export default useCustomTheme;