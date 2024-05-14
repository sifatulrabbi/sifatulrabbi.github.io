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
            <div className="w-full flex flex-col max-w-full min-h-[80vh] p-4 font-mono text-slate-300 relative pt-[76px]">
                <TerminalBody />
            </div>
        </>
    );
};

export default TerminalModePage;
