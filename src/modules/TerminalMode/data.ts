import type { FileEntry } from "@/types";

export class Entry implements FileEntry {
    parent: FileEntry | null = null;
    children: Map<string, FileEntry> = new Map();

    constructor(
        public readonly name: string,
        public readonly fileContent?: string,
    ) {}

    cd(path: string): FileEntry {
        const p = path.toLowerCase().replace(/ /gi, "");
        if (p === "../" || p === "..") {
            if (this.parent) {
                return this.parent;
            }
            return this;
        }
        const child = this.children.get(p);
        if (child && child.fileContent) {
            throw new Error(`"${path}" is a file not a directory!`);
        }
        if (!child) {
            throw new Error(`"${path}" directory not found!`);
        }
        return child;
    }

    insertNewEntry(e: FileEntry) {
        const id = e.name.toLowerCase().replace(/ /gi, "");
        e.parent = this;
        this.children.set(id, e);
    }

    get pwd() {
        let fullpath = this.name;
        let p = this.parent;
        while (p) {
            fullpath = p.name + "/" + fullpath;
            p = p.parent;
        }
        return "/" + fullpath;
    }
}

export const rootDirectory = new Entry("sifatul");

rootDirectory.insertNewEntry(
    new Entry("example.md", "# Example file\n\nwith markdown content in it."),
);
rootDirectory.insertNewEntry(
    new Entry(
        "Resume link",
        "[https://sifatulrabbi.com](https://sifatulrabbi.com)",
    ),
);

const expDir = new Entry("experiences");
expDir.insertNewEntry(
    new Entry(
        "HelloScribe AI",
        "This is the work experience for HelloScribe AI",
    ),
);
expDir.insertNewEntry(
    new Entry("X-Booker", "This is the work experience for X-Booker"),
);
rootDirectory.insertNewEntry(expDir);

const projectsDir = new Entry("projects");
projectsDir.insertNewEntry(
    new Entry(
        "Static file server",
        "This is the static file server CLI tool I've built using Go.",
    ),
);
projectsDir.insertNewEntry(
    new Entry(
        "My portfolio",
        "This is the description of my portfolio project.",
    ),
);
