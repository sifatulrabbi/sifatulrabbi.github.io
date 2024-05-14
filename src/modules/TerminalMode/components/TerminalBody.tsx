import React, { useState } from "react";
import { useTerminalMode } from "../terminalModeContext";
import { v4 } from "uuid";

const TerminalBody: React.FC = () => {
    const [command, setCommand] = useState("");
    const { runCommand, executing, history, currentDir } = useTerminalMode();

    async function run(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        await runCommand(command);
        setCommand("");
        await new Promise((r) => setTimeout(r, 100));
        window.scrollTo({
            top: document.body.clientHeight,
            behavior: "smooth",
        });
    }

    return (
        <>
            {history.length > 0 && (
                <div className="w-full flex flex-col gap-6 mb-6 min-h-max">
                    {history.map((h) => (
                        <div
                            key={h.cmd + v4()}
                            className="w-full flex flex-col"
                        >
                            <div className="flex w-full flex-col">
                                <span className="text-primary-400 inline-block min-w-max">
                                    {h.pwd}
                                </span>
                                <div className="flex items-center justify-start w-full relative gap-2">
                                    <span className="text-primary-400 inline-block min-w-max">
                                        {"$"}
                                    </span>
                                    <span>{h.cmd}</span>
                                </div>
                            </div>
                            <div
                                className={`display-content-muted ${
                                    h.exitCode === 1 ? "error" : ""
                                }`}
                                dangerouslySetInnerHTML={{ __html: h.output }}
                            ></div>
                        </div>
                    ))}
                </div>
            )}

            <div className="w-full h-full flex flex-col items-start justify-start">
                <span className="text-primary-400 inline-block min-w-max">
                    {currentDir.pwd}
                </span>
                <form
                    onSubmit={run}
                    className="flex items-center justify-start w-full relative gap-2 h-full"
                >
                    <span className="text-primary-400 inline-block min-w-max">
                        {"$"}
                    </span>
                    <input
                        id="terminal-command-input"
                        type="text"
                        value={command}
                        onChange={(e) =>
                            executing ? null : setCommand(e.currentTarget.value)
                        }
                        maxLength={200}
                        autoFocus
                        className="w-full border-transparent outline-none focus:bg-transparent bg-slate-950"
                        autoComplete="off"
                    />
                </form>
            </div>
        </>
    );
};

export default TerminalBody;
