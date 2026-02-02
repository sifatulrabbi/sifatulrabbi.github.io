import { createContext, useContext } from "react";
import type { TerminalModeContext } from "@/types";
import { rootDirectory } from "../directories";

export const terminalModeContext = createContext<TerminalModeContext>({
  history: [],
  executing: false,
  currentDir: rootDirectory,
  async runCommand() {},
});

export function useTerminalMode() {
  return useContext(terminalModeContext);
}
