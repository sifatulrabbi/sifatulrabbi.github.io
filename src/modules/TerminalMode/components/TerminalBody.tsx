import React, { useState } from "react";
import { useTerminalMode } from "../terminalModeContext";

const TerminalBody: React.FC = () => {
    const [command, setCommand] = useState("");
    const { runCommand, executing } = useTerminalMode();

    async function run(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        await runCommand(command);
        setCommand("");
    }

    function changeFocus() {
        document.getElementById("terminal-command-input")?.focus();
    }

    return (
        <div onClick={changeFocus} className="flex flex-col gap-4">
            <form
                onSubmit={run}
                className="w-full flex flex-col items-start justify-start text-sm"
            >
                <span className="text-primary-400 inline-block min-w-max">
                    ~/
                </span>
                <div className="flex items-center justify-start w-full relative gap-2">
                    <span className="text-primary-400 inline-block min-w-max">
                        {" $"}
                    </span>
                    <input
                        id="terminal-command-input"
                        type="text"
                        value={command}
                        onChange={(e) => setCommand(e.currentTarget.value)}
                        disabled={executing}
                        maxLength={200}
                        autoFocus
                        className="w-full bg-transparent border-transparent outline-none text-sm"
                        autoComplete="off"
                    />
                </div>
            </form>
        </div>
    );
};

export default TerminalBody;
