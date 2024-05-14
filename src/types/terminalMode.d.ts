export type TerminalExitCode = 1 | 0;

export interface TerminalHistory {
    cmd: TerminalCmd;
    output: string;
    exitCode: TerminalExitCode;
    exec: () => TerminalExitCode;
}

export interface StaticTerminalHistory {
    new (cmd: string): TerminalHistory;
    fromJson(cmd: string, output: string, exitCode: number): TerminalHistory;
}

export type TerminalModeContext = {
    history: TerminalHistory[];
    executing: boolean;
    runCommand: (cmd: string) => Promise<void>;
};

export type FileEntry = {
    name: string;
    parent: FileEntry | null;
    children: Map<string, FileEntry>;
    pwd: string;
    fileContent?: string;
    cd(path: string): FileEntry;
};
