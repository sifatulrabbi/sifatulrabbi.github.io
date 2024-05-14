import React, { useState } from "react";
import { terminalModeContext } from "./terminalModeContext";
import { TerminalHistory } from "@/types";

type Props = {
    children?: React.ReactNode;
};

const TerminalModePage: React.FC<Props> = ({ children }) => {
    const [history, setHistory] = useState<TerminalHistory[]>([]);
    const [executing, setExecuting] = useState(false);

    async function runCommand(cmd: string) {
        setExecuting(true);
        console.log(cmd);
        setExecuting(false);
    }

    return (
        <terminalModeContext.Provider
            value={{ history, runCommand, executing }}
        >
            {children}
        </terminalModeContext.Provider>
    );
};

export default TerminalModePage;
