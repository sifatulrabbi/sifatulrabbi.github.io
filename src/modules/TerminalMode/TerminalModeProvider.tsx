import React, { useState } from "react";
import { terminalModeContext } from "./terminalModeContext";
import { FileEntry, TerminalHistory } from "@/types";
import { rootDirectory } from "./directories";
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
} from "./terminalService";

type Props = {
    children?: React.ReactNode;
    exitTerminalMode: () => void;
};

const TerminalModePage: React.FC<Props> = ({ children, exitTerminalMode }) => {
    const [history, setHistory] = useState<TerminalHistory[]>([introHistory]);
    const [executing, setExecuting] = useState(false);
    const [currentDir, setCurrentDir] = useState<FileEntry>(rootDirectory);

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

    function identifyCmd(cmdStr: string): TerminalHistory {
        const args = cmdStr.split(" ");
        let result: TerminalHistory;
        switch (args[0]) {
            case "ls":
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
                setHistory([]);
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
            case "":
                result = new Empty(currentDir.pwd);
                break;
            default:
                result = new InvalidCommand(cmdStr, currentDir.pwd);
                break;
        }
        return result;
    }

    return (
        <terminalModeContext.Provider
            value={{ history, runCommand, executing, currentDir }}
        >
            {children}
        </terminalModeContext.Provider>
    );
};

export default TerminalModePage;
