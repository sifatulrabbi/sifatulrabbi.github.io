import React from "react";
import { terminalModeContext } from "./terminalModeContext";

type Props = {
    children?: React.ReactNode;
};

const TerminalModePage: React.FC<Props> = ({ children }) => {
    return (
        <terminalModeContext.Provider value={{}}>
            {children}
        </terminalModeContext.Provider>
    );
};

export default TerminalModePage;
