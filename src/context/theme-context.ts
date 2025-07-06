import { createContext } from 'react';
import type {LanguageType} from "../models/types/language-type";

export interface ThemeContextType {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
    language: LanguageType;
    setLanguage: (language: LanguageType) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
