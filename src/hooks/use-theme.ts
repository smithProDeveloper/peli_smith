import {useContext} from "react";
import {ThemeContext} from "../context/theme-context.ts";

export default function useTheme() {

    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme debe usarse dentro de un <ThemeProvider>');
    }
    return context;
}