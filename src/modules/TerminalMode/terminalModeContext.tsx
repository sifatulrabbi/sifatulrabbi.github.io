import { createContext, useContext } from "react";
import type { TerminalModeContext } from "@/types";

export const terminalModeContext = createContext<TerminalModeContext>({
    history: [],
    executing: false,
    async runCommand() {},
});

export const useTerminalMode = () => useContext(terminalModeContext);
