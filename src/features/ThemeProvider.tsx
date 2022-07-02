import React from "react";
import { useRecoilValue } from "recoil";
import { darkModeState } from "../states";
import { LoadingScreen } from "./LoadingScreen";
import {} from "../states";

export const ThemeProvider: React.FC = ({ children }) => {
  const darkMode = useRecoilValue(darkModeState);

  return (
    <main
      className={
        (darkMode ? "dark bg-slate-700" : "light bg-white") + " min-h-screen"
      }
    >
      <div className="absolute top-0 h-[70px] right-0 left-0 theme-styles"></div>
      {children}
    </main>
  );
};
