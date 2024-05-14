import type {
    TerminalHistory,
    TerminalExitCode,
    StaticTerminalHistory,
} from "@/types";
import { staticImplements } from "@/utils";

export function identifyCmd(cmd: string): TerminalHistory {
    const args = cmd.split(" ");
    let result: TerminalHistory;
    switch (args[0]) {
        case "ls":
            result = new ls(cmd);
            break;
        default:
            result = new InvalidCommand(cmd);
            break;
    }
    return result;
}

export class InvalidCommand implements TerminalHistory {
    private _output: string = "";
    private _exitCode: TerminalExitCode = 0;

    constructor(public readonly cmd: string) {}

    exec(): TerminalExitCode {
        this._exitCode = 1;
        this._output = "No identified command!";
        return 1;
    }

    get output() {
        return this._output;
    }
    get exitCode() {
        return this._exitCode;
    }
}

@staticImplements<StaticTerminalHistory>()
export class ls {
    private _output: string = "";
    private _exitCode: TerminalExitCode = 0;

    public static fromJson(cmd: string, output: string, exitCode: number) {
        const h = new ls(cmd);
        h._output = output;
        h._exitCode = exitCode === 0 ? 0 : 1;
        return h;
    }

    constructor(public readonly cmd: string) {}

    exec(): TerminalExitCode {
        return 1;
    }

    get output() {
        return this._output;
    }
    get exitCode() {
        return this._exitCode;
    }
}

@staticImplements<StaticTerminalHistory>()
export class ExperienceCommand {
    private _output: string = "";
    private _exitCode: TerminalExitCode = 0;

    public static fromJson(cmd: string, output: string, exitCode: number) {
        const h = new ExperienceCommand(cmd);
        h._output = output;
        h._exitCode = exitCode === 0 ? 0 : 1;
        return h;
    }

    constructor(public readonly cmd: string) {}

    exec(): TerminalExitCode {
        return 1;
    }

    get output() {
        return this._output;
    }
    get exitCode() {
        return this._exitCode;
    }
}
