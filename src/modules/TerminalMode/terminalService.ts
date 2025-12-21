import type { TerminalHistory, TerminalExitCode, FileEntry } from "@/types";
import { rootDirectory } from "./directories";
import { marked } from "marked";
import dayjs from "dayjs";
import { experiencesData } from "./data/experienceData";
import { projectsData } from "./data/projectsData";
import {
  experienceSectionData,
  projectsData as structuredProjects,
} from "@/assets/data";

export class ListExp implements TerminalHistory {
  private readonly args: string[] = [];
  private _output: string = "";
  private _exitCode: TerminalExitCode = 0;

  constructor(
    public readonly cmd: string,
    public readonly pwd: string,
  ) {
    this.args = cmd.split(" ");
  }

  exec(): TerminalExitCode {
    if (this.args.length < 2) {
      this._output += "My experiences\n\n";
      for (const e of experiencesData) {
        this._output += `- ${e.id}. ${e.title}\n`;
      }
      this._output += `\nUse **list_exp all** to view all the experiences or **list_exp [exp id]** for any specific one.`;
      return 0;
    }
    if (this.args[1] === "all") {
      this._output += "All experiences expanded.\n\n";
      for (const e of experiencesData) {
        this._output += e.text;
      }
      return 0;
    }
    const selectedExp = experiencesData.find((p) => p.id === this.args[1]);
    if (!selectedExp) {
      this._exitCode = 1;
      this._output = `No experiences found with id: '${this.args[1]}'`;
      return 1;
    }
    this._output = selectedExp.text;
    return 0;
  }

  get output() {
    return marked(this._output) as string;
  }
  get exitCode() {
    return this._exitCode;
  }
}

export class ListProjects implements TerminalHistory {
  private readonly args: string[] = [];
  private _output: string = "";
  private _exitCode: TerminalExitCode = 0;

  constructor(
    public readonly cmd: string,
    public readonly pwd: string,
  ) {
    this.args = cmd.split(" ");
  }

  exec(): TerminalExitCode {
    if (this.args.length < 2) {
      this._output += "List of projects I did\n\n";
      for (const p of projectsData) {
        this._output += `- ${p.id}. ${p.title}\n`;
      }
      this._output += `\nUse **list_proj all** to view all the projects or **list_proj [project id]** for any specific one.`;
      return 0;
    }
    if (this.args[1] === "all") {
      for (const p of projectsData) {
        this._output += p.text;
      }
      return 0;
    }
    const selectedProj = projectsData.find((p) => p.id === this.args[1]);
    if (!selectedProj) {
      this._exitCode = 1;
      this._output = `No project found with id: '${this.args[1]}'`;
      return 1;
    }
    this._output = selectedProj.text;
    return 0;
  }

  get output() {
    return marked(this._output) as string;
  }
  get exitCode() {
    return this._exitCode;
  }
}

export class IgnoreCommand implements TerminalHistory {
  cmd = "";
  output = "";
  exitCode: TerminalExitCode = 0;

  constructor(public readonly pwd: string) {}

  exec(): TerminalExitCode {
    return 0;
  }
}

export class InvalidCommand implements TerminalHistory {
  public readonly output: string = "Command not available!";
  public readonly exitCode: TerminalExitCode = 1;

  constructor(
    public readonly cmd: string,
    public readonly pwd: string,
  ) {}

  exec(): TerminalExitCode {
    return 1;
  }
}

export class cd implements TerminalHistory {
  private readonly args: string[];
  private _output: string = "";
  private _exitCode: TerminalExitCode = 0;

  constructor(
    public readonly cmd: string,
    public readonly pwd: string,
    private currentDir: FileEntry,
    private callback: (e: FileEntry) => void,
  ) {
    this.args = cmd.split(" ");
  }

  exec(): TerminalExitCode {
    try {
      const cdPath = this.args.slice(1).join("");
      if (this.args.length < 2 || !cdPath) {
        this.callback(rootDirectory);
        this._output = "Moved to ~";
        this._exitCode = 0;
        return 0;
      }
      const newLocation = this.currentDir.cd(cdPath);
      this.callback(newLocation);
      this._output = "Moved to " + newLocation.name;
      this._exitCode = 0;
      return 0;
    } catch (err: any) {
      console.error(err);
      this._output = err.message;
      this._exitCode = 1;
      return 1;
    }
  }

  get output() {
    return this._output;
  }
  get exitCode() {
    return this._exitCode;
  }
}

export class ls implements TerminalHistory {
  private _output: string = "";
  private _exitCode: TerminalExitCode = 0;

  constructor(
    public readonly cmd: string,
    public readonly pwd: string,
    private currentDir: FileEntry,
  ) {}

  exec(): TerminalExitCode {
    this._output = `<div class="flex flex-row flex-wrap gap-1">`;
    for (const child of this.currentDir.children.values()) {
      this._output += '<span class="inline-block mr-6">';
      if (child.name.trim().includes(" ")) {
        this._output += "'" + child.name + "'";
      } else {
        this._output += child.name;
      }
      if (!child.fileContent) {
        this._output += "/";
      }
      this._output += "</span>";
    }
    this._output += `</div>`;
    this._exitCode = 0;
    return 0;
  }

  get output() {
    return this._output;
  }
  get exitCode() {
    return this._exitCode;
  }
}

export class cat implements TerminalHistory {
  private readonly args: string[];
  private _output: string = "";
  private _exitCode: TerminalExitCode = 0;

  constructor(
    public readonly cmd: string,
    public readonly pwd: string,
    private currentDir: FileEntry,
  ) {
    this.args = cmd.split(" ");
  }

  exec(): TerminalExitCode {
    if (this.args.length < 2) {
      this._output = "Please specify a file name.\n'cat [filename]'";
      this._exitCode = 1;
      return 1;
    }
    const filename = this.args.slice(1).join("").toLowerCase();
    let selectedFilename: string | undefined = undefined;
    for (const f of this.currentDir.children.keys()) {
      if (f.includes(filename)) {
        selectedFilename = f;
        break;
      }
    }
    if (!selectedFilename) {
      this._output = `No file found with name: "${this.args
        .slice(1)
        .join(" ")}"`;
      this._exitCode = 1;
      return 1;
    }
    const file = this.currentDir.children.get(selectedFilename) as FileEntry;
    if (!file.fileContent) {
      this._output = `"${file}" is a directory.`;
      this._exitCode = 1;
      return 1;
    }
    this._output = file.fileContent;
    this._exitCode = 0;
    return 0;
  }

  get output() {
    return marked(this._output) as string;
  }
  get exitCode() {
    return this._exitCode;
  }
}

export class Time implements TerminalHistory {
  private _output: string = "";
  private _exitCode: TerminalExitCode = 0;

  constructor(
    public readonly cmd: string,
    public readonly pwd: string,
  ) {}

  exec(): TerminalExitCode {
    this._output = dayjs(Date.now()).toISOString();
    return 0;
  }

  get output() {
    return this._output;
  }
  get exitCode() {
    return this._exitCode;
  }
}

export class Echo implements TerminalHistory {
  private args: string[];
  private _output: string = "";
  private _exitCode: TerminalExitCode = 0;

  constructor(
    public readonly cmd: string,
    public readonly pwd: string,
  ) {
    this.args = cmd.split(" ");
  }

  exec(): TerminalExitCode {
    this._output = this.args.slice(1).join(" ");
    return 0;
  }

  get output() {
    return this._output.replace(/[<>{}()]/gi, "");
  }
  get exitCode() {
    return this._exitCode;
  }
}

export class Exit implements TerminalHistory {
  cmd = "exit";
  output = "Quitting terminal mode.";
  exitCode: TerminalExitCode = 0;

  constructor(public readonly pwd: string) {}

  exec(): TerminalExitCode {
    return 0;
  }
}

export class Empty implements TerminalHistory {
  cmd = " ";
  output = " ";
  exitCode: TerminalExitCode = 0;

  constructor(public readonly pwd: string) {}

  exec(): TerminalExitCode {
    return 0;
  }
}

export class PrintExperiences implements TerminalHistory {
  cmd = "print experiences";
  private _output: string = "";
  exitCode: TerminalExitCode = 0;

  constructor(public readonly pwd: string) {}

  exec(): TerminalExitCode {
    let html = `
            <div class="terminal-section">
                <h2 class="text-terminal-accent text-xl font-bold mb-6 border-b border-terminal-border pb-2">
                    💼 Work Experience
                </h2>
        `;

    experienceSectionData.forEach((exp, idx) => {
      html += `
                <div class="mb-8 pb-6 ${idx < experienceSectionData.length - 1 ? "border-b border-terminal-border-dim" : ""}">
                    <div class="mb-3">
                        <h3 class="text-terminal-prompt text-lg font-bold">${exp.position}</h3>
                        ${exp.companyUrl ? `<a href="${exp.companyUrl}" target="_blank" rel="noopener noreferrer" class="text-terminal-info hover:text-terminal-accent transition-colors">${exp.companyName}</a>` : `<span class="text-terminal-primary">${exp.companyName}</span>`}
                        <span class="text-terminal-secondary"> • ${exp.companyLocation}</span>
                    </div>
                    <div class="text-terminal-secondary text-sm mb-2">
                        ${exp.from} - ${exp.till || "Present"} • ${exp.employmentType} • ${exp.jobType}
                    </div>
                    ${exp.companySummary ? `<p class="text-terminal-primary italic mb-3">${exp.companySummary}</p>` : ""}
                    ${
                      exp.description.length > 0
                        ? `
                        <ul class="list-disc list-inside space-y-1 text-terminal-primary mb-3">
                            ${exp.description.map((desc) => `<li>${desc}</li>`).join("")}
                        </ul>
                    `
                        : ""
                    }
                    <div class="flex flex-wrap gap-2 mt-3">
                        ${exp.techStack.map((tech) => `<span class="px-2 py-1 bg-terminal-border text-terminal-accent text-xs rounded">${tech}</span>`).join("")}
                    </div>
                </div>
            `;
    });

    html += `</div>`;
    this._output = html;
    return 0;
  }

  get output() {
    return this._output;
  }
}

export class PrintProjects implements TerminalHistory {
  cmd = "print projects";
  private _output: string = "";
  exitCode: TerminalExitCode = 0;

  constructor(public readonly pwd: string) {}

  exec(): TerminalExitCode {
    let html = `
            <div class="terminal-section">
                <h2 class="text-terminal-accent text-xl font-bold mb-6 border-b border-terminal-border pb-2">
                    🚀 Projects
                </h2>
        `;

    structuredProjects.forEach((project, idx) => {
      html += `
                <div class="mb-6 pb-6 ${idx < structuredProjects.length - 1 ? "border-b border-terminal-border-dim" : ""}">
                    <h3 class="text-terminal-prompt text-lg font-bold mb-2">${project.title}</h3>
                    <p class="text-terminal-primary mb-3">${project.summary}</p>
                    <div class="flex gap-4 mb-3 text-sm">
                        ${project.githubLink ? `<a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="text-terminal-info hover:text-terminal-accent transition-colors">🔗 GitHub</a>` : ""}
                        ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="text-terminal-info hover:text-terminal-accent transition-colors">🌐 Live Demo</a>` : ""}
                        <span class="text-terminal-warning">${project.projectType}</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mt-3">
                        ${project.techStack.map((tech) => `<span class="px-2 py-1 bg-terminal-border text-terminal-accent text-xs rounded">${tech}</span>`).join("")}
                    </div>
                </div>
            `;
    });

    html += `</div>`;
    this._output = html;
    return 0;
  }

  get output() {
    return this._output;
  }
}

export class PrintSkills implements TerminalHistory {
  cmd = "print skills";
  private _output: string = "";
  exitCode: TerminalExitCode = 0;

  constructor(public readonly pwd: string) {}

  exec(): TerminalExitCode {
    const skills = {
      "Programming Languages": [
        "TypeScript",
        "JavaScript",
        "Python",
        "Go",
        "SQL",
      ],
      "Frontend": ["React", "Next.js", "Vue.js", "TailwindCSS", "HTML/CSS"],
      "Backend": [
        "Node.js",
        "FastAPI",
        "Express.js",
        "Echo (Go)",
        "REST APIs",
        "GraphQL",
      ],
      "Databases": ["PostgreSQL", "MongoDB", "Redis", "Cassandra", "Firebase"],
      "AI/ML": ["Langchain", "OpenAI", "LLM Integration", "Vector DBs"],
      "DevOps & Tools": ["Docker", "Kubernetes", "GCP", "AWS", "Nginx", "Git"],
      "Concepts": [
        "Microservices",
        "System Design",
        "API Design",
        "WebSockets",
        "Pub/Sub",
        "Background Jobs",
      ],
    };

    let html = `
            <div class="terminal-section">
                <h2 class="text-terminal-accent text-xl font-bold mb-6 border-b border-terminal-border pb-2">
                    ⚡ Technical Skills
                </h2>
        `;

    Object.entries(skills).forEach(([category, items]) => {
      html += `
                <div class="mb-5">
                    <h3 class="text-terminal-prompt font-bold mb-3">${category}</h3>
                    <div class="flex flex-wrap gap-2">
                        ${items.map((skill) => `<span class="px-3 py-1 bg-terminal-surface border border-terminal-border text-terminal-primary text-sm rounded hover:border-terminal-accent transition-colors">${skill}</span>`).join("")}
                    </div>
                </div>
            `;
    });

    html += `</div>`;
    this._output = html;
    return 0;
  }

  get output() {
    return this._output;
  }
}

export class PrintContact implements TerminalHistory {
  cmd = "print contact";
  private _output: string = "";
  exitCode: TerminalExitCode = 0;

  constructor(public readonly pwd: string) {}

  exec(): TerminalExitCode {
    const html = `
            <div class="terminal-section">
                <h2 class="text-terminal-accent text-xl font-bold mb-6 border-b border-terminal-border pb-2">
                    📬 Get In Touch
                </h2>
                <div class="space-y-4">
                    <div>
                        <h3 class="text-terminal-prompt font-bold mb-2">Email</h3>
                        <a href="mailto:sifatulrabbii@gmail.com" class="text-terminal-info hover:text-terminal-accent transition-colors">
                            sifatul.rabbi@outlook.com
                        </a>
                    </div>
                    <div>
                        <h3 class="text-terminal-prompt font-bold mb-2">Social Links</h3>
                        <div class="flex flex-col gap-2">
                            <a href="https://github.com/sifatulrabbi" target="_blank" rel="noopener noreferrer" class="text-terminal-info hover:text-terminal-accent transition-colors">
                                🔗 GitHub: github.com/sifatulrabbi
                            </a>
                            <a href="https://linkedin.com/in/sifatulrabbi" target="_blank" rel="noopener noreferrer" class="text-terminal-info hover:text-terminal-accent transition-colors">
                                🔗 LinkedIn: linkedin.com/in/sifatulrabbi
                            </a>
                        </div>
                    </div>
                    <div class="mt-6 p-4 bg-terminal-surface border border-terminal-border rounded">
                        <p class="text-terminal-primary">
                            💡 Feel free to reach out for collaborations, opportunities, or just to say hi!
                        </p>
                    </div>
                </div>
            </div>
        `;
    this._output = html;
    return 0;
  }

  get output() {
    return this._output;
  }
}

const helpText = marked(`Available commands:
- <span class="text-terminal-accent">help, h</span> -> See all the available command list
- <span class="text-terminal-accent">print experiences</span> -> View my work experience with details
- <span class="text-terminal-accent">print projects</span> -> Browse my projects with links
- <span class="text-terminal-accent">print skills</span> -> See my technical skills
- <span class="text-terminal-accent">print contact</span> -> Get my contact information
- <span class="text-terminal-accent">list_exp</span> -> All my experiences (simple list)
- <span class="text-terminal-accent">list_proj</span> -> All my projects (simple list)
- <span class="text-terminal-accent">ls</span> -> List all the directories/files of the current path
- <span class="text-terminal-accent">cd [dir name]</span> -> Move between directories
- <span class="text-terminal-accent">cat [file name]</span> -> Print the contents of a file
- <span class="text-terminal-accent">clear</span> -> Clear the terminal screen
- <span class="text-terminal-accent">time</span> -> Display current time
- <span class="text-terminal-accent">echo [text]</span> -> Echo text back

<span class="text-terminal-success">Tip:</span> Using only the first few words of a file/directory name will also work. i.e. <span class="text-terminal-string">'cd ex'</span> will work.`) as string;

export class Help implements TerminalHistory {
  cmd = "help";
  output = helpText;
  exitCode: TerminalExitCode = 0;
  constructor(public readonly pwd: string) {}

  exec(): TerminalExitCode {
    return 0;
  }
}

export const introHistory: TerminalHistory = {
  cmd: "Hi there, welcome to my portfolio.",
  output: helpText,
  exitCode: 0,
  pwd: "",
  exec: () => 0,
};
