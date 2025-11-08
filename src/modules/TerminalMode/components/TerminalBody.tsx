import React, { useState, useRef, useEffect } from "react";
import { useTerminalMode } from "../terminalModeContext";
import { v4 } from "uuid";

const TerminalBody: React.FC = () => {
    const [command, setCommand] = useState("");
    const { runCommand, executing, history, currentDir } = useTerminalMode();
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    async function run(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        await runCommand(command);
        setCommand("");
        await new Promise((r) => setTimeout(r, 100));
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    // Focus input on mount and when clicking terminal
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleTerminalClick = () => {
        inputRef.current?.focus();
    };

    return (
        <div
            onClick={handleTerminalClick}
            className="w-full h-full flex flex-col font-mono text-sm sm:text-base cursor-text"
        >
            {/* Command history */}
            {history.length > 0 && (
                <div className="w-full flex flex-col gap-4 mb-4">
                    {history.map((h) => (
                        <div
                            key={h.cmd + v4()}
                            className="w-full flex flex-col gap-1"
                        >
                            {/* Command prompt */}
                            <div className="flex flex-col">
                                <span className="text-terminal-secondary text-xs sm:text-sm">
                                    {h.pwd}
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="text-terminal-prompt">
                                        $
                                    </span>
                                    <span className="text-terminal-primary">
                                        {h.cmd}
                                    </span>
                                </div>
                            </div>

                            {/* Command output */}
                            {h.output && (
                                <div
                                    className={`pl-0 sm:pl-4 text-terminal-primary ${
                                        h.exitCode === 1
                                            ? "text-terminal-error"
                                            : ""
                                    }`}
                                >
                                    <div
                                        className="prose prose-invert prose-sm max-w-full prose-p:text-terminal-primary prose-strong:text-terminal-accent prose-ul:text-terminal-primary prose-li:text-terminal-primary"
                                        dangerouslySetInnerHTML={{
                                            __html: h.output,
                                        }}
                                    ></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Current command input */}
            <div className="w-full flex flex-col">
                <span className="text-terminal-secondary text-xs sm:text-sm">
                    {currentDir.pwd}
                </span>
                <form
                    onSubmit={run}
                    className="flex items-center gap-2 w-full"
                >
                    <span className="text-terminal-prompt">$</span>
                    <input
                        ref={inputRef}
                        id="terminal-command-input"
                        type="text"
                        value={command}
                        onChange={(e) =>
                            executing ? null : setCommand(e.currentTarget.value)
                        }
                        disabled={executing}
                        maxLength={200}
                        className="flex-1 bg-transparent border-none outline-none text-terminal-primary placeholder-terminal-secondary"
                        autoComplete="off"
                        placeholder={executing ? "executing..." : ""}
                    />
                    {executing && (
                        <span className="text-terminal-warning animate-pulse">
                            ...
                        </span>
                    )}
                </form>
            </div>

            {/* Scroll anchor */}
            <div ref={bottomRef} className="h-4" />
        </div>
    );
};

export default TerminalBody;
