import React, { useState, useRef, useEffect } from "react";
import { useTerminalMode } from "../terminalModeContext";
import { v4 } from "uuid";
import { CommandButton } from "@/components";
import { FiFolder, FiFileText, FiMail, FiCode } from "react-icons/fi";

const ASCII_ART = `
 _____ _  __      _         _   ____       _     _     _
/ ____(_)/ _|    | |       | | |  _ \\     | |   | |   (_)
| (___  _| |_ __ _| |_ _   _| | | |_) | __ _| |__ | |__  _
 \\___ \\| |  _/ _\` | __| | | | | |  _ < / _\` | '_ \\| '_ \\| |
 ____) | | || (_| | |_| |_| | | | |_) | (_| | |_) | |_) | |
|_____/|_|_| \\__,_|\\__|\\__,_|_| |____/ \\__,_|_.__/|_.__/|_|

Full Stack & AI Developer | Portfolio v2.0
`;

interface CommandButtonInfo {
    id: string;
    command: string;
    label: string;
    icon: React.ReactNode;
    description: string;
}

const AVAILABLE_COMMANDS: CommandButtonInfo[] = [
    {
        id: "experiences",
        command: "cd experiences",
        label: "Experiences",
        icon: <FiFolder />,
        description: "View my work experience",
    },
    {
        id: "projects",
        command: "cd projects",
        label: "Projects",
        icon: <FiCode />,
        description: "Browse my projects",
    },
    {
        id: "skills",
        command: "cat skills.json",
        label: "Skills",
        icon: <FiFileText />,
        description: "See my technical skills",
    },
    {
        id: "contact",
        command: "cat contact.txt",
        label: "Contact",
        icon: <FiMail />,
        description: "Get in touch",
    },
];

const TerminalBody: React.FC = () => {
    const [command, setCommand] = useState("");
    const [executedCommands, setExecutedCommands] = useState<Set<string>>(
        new Set()
    );
    const { runCommand, executing, history, currentDir } = useTerminalMode();
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    async function run(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!command.trim()) return;

        await runCommand(command);

        // Track executed commands for button visibility
        const baseCmd = command.trim().toLowerCase();
        setExecutedCommands((prev) => new Set([...prev, baseCmd]));

        setCommand("");
        await new Promise((r) => setTimeout(r, 100));
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        inputRef.current?.focus();
    }

    const handleCommandButtonClick = async (cmd: string) => {
        await runCommand(cmd);
        setExecutedCommands((prev) => new Set([...prev, cmd.toLowerCase()]));
        await new Promise((r) => setTimeout(r, 100));
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        inputRef.current?.focus();
    };

    // Focus input on mount
    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    // Re-focus input when history changes
    useEffect(() => {
        inputRef.current?.focus();
    }, [history]);

    const handleTerminalClick = () => {
        inputRef.current?.focus();
    };

    // Filter out already executed commands
    const availableButtons = AVAILABLE_COMMANDS.filter(
        (btn) => !executedCommands.has(btn.command.toLowerCase())
    );

    const showWelcome = history.length === 1; // Only intro message

    return (
        <div
            onClick={handleTerminalClick}
            className="w-full h-full flex flex-col font-mono text-sm sm:text-base cursor-text"
        >
            {/* ASCII Art Welcome - Only show initially */}
            {showWelcome && (
                <div className="mb-8">
                    <pre className="text-terminal-prompt text-xs sm:text-sm leading-tight opacity-90 whitespace-pre overflow-x-auto">
                        {ASCII_ART}
                    </pre>
                    <div className="mt-4 text-terminal-secondary text-sm">
                        <p>
                            Type <span className="text-terminal-accent">help</span> to
                            see available commands, or use the buttons below to
                            navigate.
                        </p>
                    </div>
                </div>
            )}

            {/* Command history */}
            {history.length > 0 && (
                <div className="w-full flex flex-col gap-4 mb-4">
                    {history.map((h, idx) => (
                        <div
                            key={h.cmd + v4()}
                            className="w-full flex flex-col gap-1"
                        >
                            {/* Don't show the intro message in history */}
                            {idx > 0 && (
                                <>
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
                                                className="prose prose-invert prose-sm max-w-full prose-p:text-terminal-primary prose-strong:text-terminal-accent prose-ul:text-terminal-primary prose-li:text-terminal-primary prose-a:text-terminal-info prose-a:no-underline hover:prose-a:underline"
                                                dangerouslySetInnerHTML={{
                                                    __html: h.output,
                                                }}
                                            ></div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Command Buttons - Show available ones */}
            {availableButtons.length > 0 && (
                <div className="mb-6">
                    <div className="text-terminal-secondary text-xs mb-3">
                        <span className="text-terminal-comment">
                            # Quick commands:
                        </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {availableButtons.map((btn) => (
                            <CommandButton
                                key={btn.id}
                                command={btn.command}
                                onClick={() =>
                                    handleCommandButtonClick(btn.command)
                                }
                                variant="secondary"
                                icon={btn.icon}
                            />
                        ))}
                    </div>
                </div>
            )}

            {/* Current command input */}
            <div className="w-full flex flex-col mt-4">
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
                            executing
                                ? null
                                : setCommand(e.currentTarget.value)
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
