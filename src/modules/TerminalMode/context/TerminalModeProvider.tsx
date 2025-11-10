import React, { useEffect, useState } from "react";
import { terminalModeContext } from "./terminalModeContext";
import { FileEntry, TerminalHistory } from "@/types";
import { rootDirectory } from "../directories";
import {
    InvalidCommand,
    IgnoreCommand,
    Help,
    Time,
    Echo,
    ListExp,
    ListProjects,
    ls,
    cd,
    cat,
    introHistory,
    Exit,
    Empty,
    PrintExperiences,
    PrintProjects,
    PrintSkills,
    PrintContact,
    ChatCommand,
    ChatMessage,
} from "../terminalService";
import { chatStorage } from "../services/chatStorage";
import { streamChatResponse } from "../services/aiService";
import type { ChatMessage as ChatMessageType } from "@/types/chatMode";

type Props = {
    children?: React.ReactNode;
    exitTerminalMode: () => void;
};

const TerminalModePage: React.FC<Props> = ({ children, exitTerminalMode }) => {
    const [history, setHistory] = useState<TerminalHistory[]>([introHistory]);
    const [executing, setExecuting] = useState(false);
    const [currentDir, setCurrentDir] = useState<FileEntry>(rootDirectory);
    const [chatMode, setChatMode] = useState(false);
    const [chatMessages, setChatMessages] = useState<ChatMessageType[]>([]);

    async function runCommand(cmdStr: string) {
        setExecuting(true);
        await new Promise((r) => setTimeout(r, 100));
        const cmd = identifyCmd(cmdStr);
        if (cmd.exec()) {
            console.error(cmd.output);
        }
        if (cmd.cmd) {
            setHistory((p) => [...p, cmd]);
        }
        setExecuting(false);
    }

    function toggleChatMode() {
        setChatMode((prev) => {
            const newMode = !prev;
            // Add a message to history indicating mode change
            const message = newMode
                ? "Chat mode enabled. Ask me anything about Sifatul! Type /chat again to return to terminal mode."
                : "Chat mode disabled. Back to terminal mode.";

            const toggleMsg: TerminalHistory = {
                cmd: "/chat",
                output: `<p class="text-terminal-info">${message}</p>`,
                exitCode: 0,
                pwd: currentDir.pwd,
                exec: () => 0,
            };
            setHistory((p) => [...p, toggleMsg]);
            return newMode;
        });
    }

    async function sendChatMessage(message: string): Promise<void> {
        if (!message.trim()) return;

        setExecuting(true);

        // Create user message
        const userMsg: ChatMessageType = {
            role: "user",
            content: message,
            timestamp: Date.now(),
        };

        // Save user message to localStorage
        chatStorage.saveMessage(userMsg);
        setChatMessages((prev) => [...prev, userMsg]);

        // Create a placeholder for streaming response
        let aiResponseText = "";

        const streamingMsg = new ChatMessage(message, "", currentDir.pwd);
        setHistory((p) => [...p, streamingMsg]);

        try {
            await streamChatResponse(
                [...chatMessages, userMsg],
                (chunk: string) => {
                    // Update streaming response
                    aiResponseText += chunk;
                    setHistory((p) => {
                        const newHistory = [...p];
                        const lastMsg = newHistory[newHistory.length - 1];
                        if (lastMsg.isChatMessage) {
                            lastMsg.aiResponse = aiResponseText;
                            lastMsg.output = aiResponseText;
                        }
                        return newHistory;
                    });
                },
                () => {
                    // On complete
                    const assistantMsg: ChatMessageType = {
                        role: "assistant",
                        content: aiResponseText,
                        timestamp: Date.now(),
                    };
                    chatStorage.saveMessage(assistantMsg);
                    setChatMessages((prev) => [...prev, assistantMsg]);
                    setExecuting(false);
                },
                (error: Error) => {
                    // On error
                    console.error("Chat error:", error);
                    const errorMsg = `<p class="text-terminal-error">Error: ${error.message}</p>`;
                    setHistory((p) => {
                        const newHistory = [...p];
                        const lastMsg = newHistory[newHistory.length - 1];
                        if (lastMsg.isChatMessage) {
                            lastMsg.aiResponse = errorMsg;
                            lastMsg.output = errorMsg;
                        }
                        return newHistory;
                    });
                    setExecuting(false);
                }
            );
        } catch (error) {
            console.error("Chat error:", error);
            setExecuting(false);
        }
    }

    function identifyCmd(cmdStr: string): TerminalHistory {
        const args = cmdStr.split(" ");
        const normalizedCmd = cmdStr.trim().toLowerCase();
        let result: TerminalHistory;

        // Handle multi-word commands first
        if (normalizedCmd === "print experiences") {
            return new PrintExperiences(currentDir.pwd);
        } else if (normalizedCmd === "print projects") {
            return new PrintProjects(currentDir.pwd);
        } else if (normalizedCmd === "print skills") {
            return new PrintSkills(currentDir.pwd);
        } else if (normalizedCmd === "print contact") {
            return new PrintContact(currentDir.pwd);
        }

        // Handle single-word commands
        switch (args[0].toLowerCase()) {
            case "/chat":
                result = new ChatCommand(currentDir.pwd, toggleChatMode);
                break;
            case "ls":
                result = new ls(cmdStr, currentDir.pwd, currentDir);
                break;
            case "la":
                result = new ls(cmdStr, currentDir.pwd, currentDir);
                break;
            case "l":
                result = new ls(cmdStr, currentDir.pwd, currentDir);
                break;
            case "cd":
                result = new cd(
                    cmdStr,
                    currentDir.pwd,
                    currentDir,
                    setCurrentDir,
                );
                break;
            case "cat":
                result = new cat(cmdStr, currentDir.pwd, currentDir);
                break;
            case "clear":
                setHistory([introHistory]);
                result = new IgnoreCommand(currentDir.pwd);
                break;
            case "help":
                result = new Help(currentDir.pwd);
                break;
            case "h":
                result = new Help(currentDir.pwd);
                break;
            case "time":
                result = new Time(cmdStr, currentDir.pwd);
                break;
            case "echo":
                result = new Echo(cmdStr, currentDir.pwd);
                break;
            case "list_proj":
                result = new ListProjects(cmdStr, currentDir.pwd);
                break;
            case "list_exp":
                result = new ListExp(cmdStr, currentDir.pwd);
                break;
            case "exit":
                result = new Exit(currentDir.pwd);
                exitTerminalMode();
                break;
            case "reload":
                result = new Exit(currentDir.pwd);
                window.location.reload();
                break;
            case "":
                result = new Empty(currentDir.pwd);
                break;
            default:
                result = new InvalidCommand(cmdStr, currentDir.pwd);
                break;
        }
        return result;
    }

    function handleKeydown(e: KeyboardEvent) {
        switch (e.key.toLowerCase()) {
            case "tab":
                e.preventDefault();
                break;
        }
    }

    useEffect(() => {
        document.addEventListener("keydown", handleKeydown);
        return () => document.removeEventListener("keydown", handleKeydown);
    }, []);

    // Load chat history from localStorage on mount
    useEffect(() => {
        const savedMessages = chatStorage.getHistory();
        if (savedMessages.length > 0) {
            setChatMessages(savedMessages);

            // Add saved chat messages to terminal history
            const chatHistoryEntries: TerminalHistory[] = [];
            for (let i = 0; i < savedMessages.length; i += 2) {
                const userMsg = savedMessages[i];
                const aiMsg = savedMessages[i + 1];
                if (userMsg && aiMsg && userMsg.role === "user" && aiMsg.role === "assistant") {
                    chatHistoryEntries.push(
                        new ChatMessage(userMsg.content, aiMsg.content, currentDir.pwd)
                    );
                }
            }

            if (chatHistoryEntries.length > 0) {
                // Don't show chat history on initial load, just keep in memory
                // User can see it when they enable chat mode
            }
        }
    }, []);

    return (
        <terminalModeContext.Provider
            value={{
                history,
                runCommand,
                executing,
                currentDir,
                chatMode,
                toggleChatMode,
                sendChatMessage,
            }}
        >
            {children}
        </terminalModeContext.Provider>
    );
};

export default TerminalModePage;
