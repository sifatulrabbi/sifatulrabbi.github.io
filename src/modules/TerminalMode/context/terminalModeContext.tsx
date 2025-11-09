import { createContext, useContext } from "react";
import type { TerminalModeContext } from "@/types";
import { rootDirectory } from "../directories";

export const terminalModeContext = createContext<TerminalModeContext>({
    history: [],
    executing: false,
    currentDir: rootDirectory,
    async runCommand() {},
});

export const useTerminalMode = () => useContext(terminalModeContext);
