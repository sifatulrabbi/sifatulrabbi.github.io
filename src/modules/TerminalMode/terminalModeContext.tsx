import { createContext, useContext } from "react";
import type { TerminalModeContext } from "@/types";

export const terminalModeContext = createContext<TerminalModeContext>({});

export const useTerminalMode = () => useContext(terminalModeContext);
