import type {
    TerminalHistory,
    TerminalExitCode,
    StaticTerminalHistory,
} from "@/types";
import { staticImplements } from "@/utils";

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

export function identCmd(cmd: string): TerminalHistory {
    return new ExperienceCommand(cmd);
}
