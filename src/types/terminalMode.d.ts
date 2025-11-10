export type TerminalExitCode = 1 | 0;

export interface TerminalHistory {
    cmd: TerminalCmd;
    output: string;
    exitCode: TerminalExitCode;
    pwd: string;
    exec: () => TerminalExitCode;
    // Chat mode fields
    isChatMessage?: boolean;
    userMsg?: string;
    aiResponse?: string;
}

export interface StaticTerminalHistory {
    new (cmd: string): TerminalHistory;
    fromJson(cmd: string, output: string, exitCode: number): TerminalHistory;
}

export type TerminalModeContext = {
    history: TerminalHistory[];
    executing: boolean;
    currentDir: FileEntry;
    runCommand: (cmd: string) => Promise<void>;
    // Chat mode
    chatMode: boolean;
    toggleChatMode: () => void;
    sendChatMessage: (message: string) => Promise<void>;
};

export type FileEntry = {
    name: string;
    parent: FileEntry | null;
    children: Map<string, FileEntry>;
    pwd: string;
    fileContent?: string;
    cd(path: string): FileEntry;
};
