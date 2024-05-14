import React from "react";
import Navbar from "./components/Navbar";
import TerminalBody from "./components/TerminalBody";

type Props = {
    closeTerminal: () => void;
};

const TerminalModePage: React.FC<Props> = ({ closeTerminal }) => {
    return (
        <>
            <Navbar closeTerminal={closeTerminal} />
            <div className="w-full flex flex-col max-w-full min-h-[90vh] p-4 font-mono relative pt-[76px] text-slate-200 text-sm">
                <TerminalBody />
            </div>
        </>
    );
};

export default TerminalModePage;
