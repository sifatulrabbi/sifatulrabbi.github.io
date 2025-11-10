import React, { useState, useRef, useEffect } from "react";
import { useTerminalMode } from "../context/terminalModeContext";
import { v4 } from "uuid";
import { CommandButton } from "@/components";
import { FiChevronDown, FiChevronUp, FiMessageSquare } from "react-icons/fi";
import { ASCII_ART, ABOUT_ME, AVAILABLE_COMMANDS } from "../data/aboutMe";

const TerminalContainer: React.FC = () => {
    const {
        runCommand,
        executing,
        history,
        currentDir,
        chatMode,
        toggleChatMode,
        sendChatMessage,
    } = useTerminalMode();

    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const prevHistoryLength = useRef(history.length);

    const [command, setCommand] = useState("");
    const [executedCommands, setExecutedCommands] = useState<Set<string>>(
        new Set(),
    );
    const [isQuickActionsExpanded, setIsQuickActionsExpanded] = useState(true);

    async function run(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

        const cmdText = command?.trim();
        if (!cmdText) return;

        setIsQuickActionsExpanded(false);

        // If in chat mode, send as chat message
        if (chatMode) {
            await sendChatMessage(command);
        } else {
            // Otherwise, run as terminal command
            await runCommand(command);

            if (cmdText.toLowerCase() !== "clear") {
                setExecutedCommands((prev) => new Set([...prev, cmdText.toLowerCase()]));
            }
        }

        setCommand("");
        await new Promise((r) => setTimeout(r, 100));
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
        inputRef.current?.focus();
    }

    const handleCommandButtonClick = async (cmd: string) => {
        inputRef.current?.blur();
        setIsQuickActionsExpanded(false);
        await runCommand(cmd);
        setExecutedCommands((prev) => new Set([...prev, cmd.toLowerCase()]));
        await new Promise((r) => setTimeout(r, 100));
        inputRef.current?.blur();
    };

    // Filter out already executed commands
    const availableButtons = AVAILABLE_COMMANDS.filter(
        (btn) => !executedCommands.has(btn.command.toLowerCase()),
    );

    // Reset executed commands when screen is cleared
    useEffect(() => {
        // If history length decreased significantly, screen was cleared
        if (history.length < prevHistoryLength.current && history.length <= 1) {
            setExecutedCommands(new Set());
        }
        prevHistoryLength.current = history.length;
    }, [history]);

    return (
        <div className="w-full h-full flex flex-col font-mono text-sm md:text-base cursor-text">
            {/* Header - Always visible */}
            <div className="mb-8">
                <div className="text-primary-400 leading-tight overflow-y-hidden overflow-x-auto">
                    <pre className="mb-8 whitespace-pre origin-left text-[7px] md:text-base">
                        {ASCII_ART}
                    </pre>
                    <p className="text-terminal-prompt">
                        <strong>Full Stack & AI Developer</strong>
                        {" at "}
                        <a
                            href="https://sequesto.com"
                            target="_blank"
                            className="underline"
                        >
                            SEQUESTO BV
                        </a>
                    </p>
                </div>
                <div className="mt-4 text-terminal-primary leading-relaxed">
                    {ABOUT_ME}
                </div>
                <hr className="mt-4 opacity-20" />
                <div className="mt-4 text-terminal-secondary">
                    <p>
                        Type <span className="text-terminal-accent">help</span>{" "}
                        to see available commands, or use the buttons below to
                        navigate.
                    </p>
                </div>
            </div>

            {/* Command history */}
            {history.length > 0 && (
                <div className="w-full flex flex-col gap-4 mb-4">
                    {history.map((h) => (
                        <div
                            key={h.cmd + v4()}
                            className="w-full flex flex-col gap-1"
                        >
                            {/* Don't show the intro message in history */}
                            {h.cmd !== "Hi there, welcome to my portfolio." && (
                                <>
                                    {h.isChatMessage ? (
                                        // Chat message display
                                        <div className="flex flex-col gap-3">
                                            {/* User message */}
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-terminal-accent font-semibold">
                                                        You:
                                                    </span>
                                                    <span className="text-terminal-primary">
                                                        {h.userMsg}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* AI response */}
                                            {h.aiResponse && (
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-terminal-info font-semibold">
                                                        AI:
                                                    </span>
                                                    <div className="pl-0 sm:pl-4 text-terminal-primary">
                                                        <div className="prose prose-invert prose-sm md:prose-base max-w-full prose-p:text-terminal-primary prose-strong:text-terminal-accent prose-ul:text-terminal-primary prose-li:text-terminal-primary prose-a:text-terminal-info prose-a:no-underline hover:prose-a:underline">
                                                            {h.aiResponse}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        // Regular command display
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
                                                        className="prose prose-invert prose-sm md:prose-base max-w-full prose-p:text-terminal-primary prose-strong:text-terminal-accent prose-ul:text-terminal-primary prose-li:text-terminal-primary prose-a:text-terminal-info prose-a:no-underline hover:prose-a:underline"
                                                        dangerouslySetInnerHTML={{
                                                            __html: h.output,
                                                        }}
                                                    ></div>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Command Buttons - Show available ones */}
            {availableButtons.length > 0 && (
                <div className={isQuickActionsExpanded ? "mb-6" : ""}>
                    <button
                        onClick={() =>
                            setIsQuickActionsExpanded(!isQuickActionsExpanded)
                        }
                        className={`text-terminal-secondary text-xs mb-3 flex justify-between items-center gap-2 px-3 py-2 rounded border border-terminal-border hover:border-terminal-accent/50 hover:bg-terminal-surface/50 hover:text-terminal-accent transition-all cursor-pointer ${isQuickActionsExpanded ? "w-full " : "w-auto"}`}
                    >
                        <span className="text-terminal-comment">
                            # Quick commands:
                        </span>
                        {isQuickActionsExpanded ? (
                            <FiChevronUp className="text-terminal-accent" />
                        ) : (
                            <FiChevronDown className="text-terminal-accent" />
                        )}
                    </button>
                    {isQuickActionsExpanded && (
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
                    )}
                </div>
            )}

            {/* Current command input */}
            <div className="w-full flex flex-col pb-4 gap-2">
                <label
                    htmlFor="terminal-command-input"
                    className="text-terminal-secondary text-xs sm:text-sm flex items-center justify-between"
                >
                    <span>{currentDir.pwd}</span>
                    {chatMode && (
                        <span className="text-terminal-info text-xs">
                            Chat Mode Active
                        </span>
                    )}
                </label>
                <form
                    onSubmit={run}
                    className="relative flex items-center gap-2 w-full"
                >
                    <span className="text-terminal-prompt">$</span>
                    <input
                        ref={inputRef}
                        name="terminal-command-input"
                        id="terminal-command-input"
                        type="text"
                        value={command}
                        onChange={(e) =>
                            executing ? null : setCommand(e.currentTarget.value)
                        }
                        disabled={executing}
                        maxLength={200}
                        className="flex-1 bg-transparent border-none outline-none text-terminal-primary placeholder-terminal-secondary/70"
                        autoComplete="off"
                        placeholder={
                            executing
                                ? "executing..."
                                : chatMode
                                  ? "Ask me anything about Sifatul..."
                                  : "Enter your command..."
                        }
                    />
                    {executing && (
                        <span className="text-terminal-warning animate-pulse">
                            ...
                        </span>
                    )}
                    {/* Chat mode toggle button */}
                    <button
                        type="button"
                        onClick={toggleChatMode}
                        disabled={executing}
                        className={`ml-2 p-2 rounded border transition-colors ${
                            chatMode
                                ? "border-terminal-accent bg-terminal-accent/10 text-terminal-accent"
                                : "border-terminal-border text-terminal-secondary hover:border-terminal-accent/50 hover:text-terminal-accent"
                        } ${executing ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                        title={chatMode ? "Exit chat mode" : "Enter chat mode"}
                    >
                        <FiMessageSquare size={16} />
                    </button>
                </form>
            </div>

            {/* Scroll anchor */}
            <div ref={bottomRef} className="h-4" />
        </div>
    );
};

export default TerminalContainer;
