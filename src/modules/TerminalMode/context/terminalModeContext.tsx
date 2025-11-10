import { createContext, useContext } from "react";
import type { TerminalModeContext } from "@/types";
import { rootDirectory } from "../directories";

export const terminalModeContext = createContext<TerminalModeContext>({
    history: [],
    executing: false,
    currentDir: rootDirectory,
    async runCommand() {},
    chatMode: false,
    toggleChatMode: () => {},
    async sendChatMessage() {},
});

export const useTerminalMode = () => useContext(terminalModeContext);
