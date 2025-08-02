import { createContext, useContext, useEffect, useState } from "react";

export type ThemeType = "theme1" | "theme2" | "theme3";

const ThemeContext = createContext<{
    theme: ThemeType;
    setTheme: (theme: ThemeType) => void;
} | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const stored = localStorage.getItem("theme") as ThemeType;
    const [theme, setThemeState] = useState<ThemeType>(stored || "theme1");

    useEffect(() => {

        if (stored) setThemeState(stored);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme: setThemeState }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
    return ctx;
};
