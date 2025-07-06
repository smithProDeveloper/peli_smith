import {type ReactNode, useEffect, useState} from "react";
import { ThemeContext } from "./theme-context";
import type {LanguageType} from "../models/types/language-type";

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {

    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const saved = localStorage.getItem('theme_peli_smith');
        if (saved === 'dark') return true;
        if (saved === 'light') return false;
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });
    const [language, setLanguage] = useState<LanguageType>(() => {
        const saved = localStorage.getItem('lang_peli_smith');
        return saved === 'en-US' ? 'en-US' : 'es-CO';
    });


    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('theme_peli_smith', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme_peli_smith', 'light');
        }
    }, [darkMode]);

    useEffect(() => {
        localStorage.setItem('lang_peli_smith', language);
    }, [language]);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode, language, setLanguage }}>
            {children}
        </ThemeContext.Provider>
    );
}