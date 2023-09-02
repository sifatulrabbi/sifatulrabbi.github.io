import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { darkModeState } from "../states";

export const ThemeProvider: React.FC = ({ children }) => {
    const darkMode = useRecoilValue(darkModeState);

    useEffect(() => {
        const classes = document.body.classList;
        if (darkMode) {
            if (!classes.contains("dark")) classes.add("dark");
            if (!classes.contains("bg-slate-800")) classes.add("bg-slate-800");
            return;
        }
        if (classes.contains("dark")) classes.remove("dark");
        if (classes.contains("bg-slate-800")) classes.remove("bg-slate-800");
    }, [darkMode]);

    return (
        <main className="min-h-screen dark:bg-bgContainer-dark bg-white">
            <div className="absolute top-0 h-[70px] right-0 left-0 theme-styles"></div>
            {children}
        </main>
    );
};
