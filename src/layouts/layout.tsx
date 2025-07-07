import { useState, useEffect, useRef } from "react";
import useTheme from "../hooks/use-theme.ts";
import {Outlet, useNavigate} from "react-router-dom";
import DropDownLink from "../components/drop-down-link.tsx";
import {linkSidebarData} from "../const/link-sidebar-data.ts";
import {
    FaSun,
    FaMoon,
    FaBars,
    FaTimes,
} from 'react-icons/fa';
import Footer from "../components/footer.tsx";
import type {LanguageType} from "../models/types/language-type";

export default function Layout() {

    const navigate = useNavigate();
    const { darkMode, setDarkMode, language, setLanguage } = useTheme();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const closeSidebar = () => setMobileMenuOpen(false);

    // Close on outside click for sidebar
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target as Node)
            ) {
                closeSidebar();
            }
        }
        if (mobileMenuOpen) document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [mobileMenuOpen]);

    function handleRedirect(path: string) {
        console.log(path);
        navigate(path);
    }

    return (
        <div className="min-h-screen flex flex-col font-inter bg-background dark:bg-background-dark text-text dark:text-text-dark">
            {/* HEADER */}
            <header className="fixed top-0 left-0 right-0 bg-surface dark:bg-surface-dark shadow z-50 flex items-center justify-between px-4 md:px-6 h-16">
                <div className="flex items-center gap-2">
                    <button className="w-36">
                        <img
                            src={darkMode ? '/logo-theme-dark.png' : '/logo-theme-ligth.png'}
                            alt="logo"
                            className="object-contain"
                        />
                    </button>
                    <nav className="hidden md:flex flex-col h-full">
                        <div className="flex items-center gap-4 ml-6">
                            {linkSidebarData.map((link, index) => (
                                <DropDownLink
                                    key={index}
                                    data={link}
                                    darkMode={darkMode}
                                    handleRedirect={handleRedirect}
                                />
                            ))}
                        </div>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value as LanguageType)}
                        className={`
                            text-sm rounded p-1 px-2 border
                            bg-surface text-text border-border
                            dark:bg-surface-dark dark:text-text-dark dark:border-border-dark
                            focus:outline-none focus:ring-2 focus:ring-accent
                            transition-colors
                        `}
                    >
                        <option value="es-CO">ES</option>
                        <option value="en-US">EN</option>
                        <option value="fr-FR">FR</option>
                    </select>
                    <button onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="md:hidden"
                    >
                        <FaBars />
                    </button>
                </div>
            </header>

            {/* MOBILE SIDEBAR */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black/50 flex">
                    <div
                        ref={sidebarRef}
                        className="bg-surface dark:bg-surface-dark w-64 p-4 space-y-4 shadow-xl"
                    >
                        <div className="flex justify-between items-center mt-16">
                            <span className="font-bold text-lg">Menú</span>
                            <button onClick={closeSidebar}>
                                <FaTimes />
                            </button>
                        </div>
                        {linkSidebarData.map((link, index) => (
                            <DropDownLink
                                key={index}
                                data={link}
                                darkMode={darkMode}
                                handleRedirect={handleRedirect}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* MAIN CONTENT */}
            <main className="mt-16 flex-1">
                <Outlet/>
            </main>

            {/* FOOTER */}
            <Footer/>
        </div>
    );
}
