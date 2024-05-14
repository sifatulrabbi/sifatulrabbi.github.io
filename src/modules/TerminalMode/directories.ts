import type { FileEntry } from "@/types";
import { projectsData } from "./projectsData";
import { experiencesData } from "./experienceData";

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

        let selectedChildName: string | undefined = undefined;
        for (const c of this.children.keys()) {
            console.log(c);
            if (c.includes(p)) {
                selectedChildName = c;
                break;
            }
        }
        if (!selectedChildName) {
            throw new Error(`"${path}" directory not found!`);
        }
        const child = this.children.get(selectedChildName);
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
        return "Sifatul's Portfolio: ~" + fullpath;
    }
}

export const rootDirectory = new Entry("");

const expDir = new Entry("Experiences");
experiencesData.forEach((expData) => {
    expDir.insertNewEntry(new Entry(expData.title, expData.text));
});
rootDirectory.insertNewEntry(expDir);

const projDir = new Entry("Projects");
projectsData.forEach((proj) => {
    projDir.insertNewEntry(new Entry(proj.title, proj.text));
});
rootDirectory.insertNewEntry(projDir);
