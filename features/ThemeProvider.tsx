import React from "react";
import {useRecoilValue} from "recoil";
import {darkModeState} from "../states";

export const ThemeProvider: React.FC = ({children}) => {
    const darkMode = useRecoilValue(darkModeState);

    return (
        <main
            className={
                darkMode
                    ? "dark bg-slate-900 text-gray-300"
                    : "light bg-white text-gray-700"
            }
        >
            {children}
        </main>
    );
};
