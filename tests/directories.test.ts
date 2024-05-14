import { rootDirectory } from "../src/modules/TerminalMode/directories";

describe("Testing the directories", () => {
    let selectedDir = rootDirectory;

    test("the parent for the root dir should be null", () => {
        expect(rootDirectory.parent).toBe(null);
    });

    test("pwd of the root dir", () => {
        expect(rootDirectory.pwd).toBe("/sifatul");
    });

    test("change current dir to 'experiences'", () => {
        selectedDir = rootDirectory.cd("experiences");
        expect(selectedDir.name).toBe("experiences");
    });

    test("go back to parent using '../' or '..'", () => {
        expect(selectedDir.cd("../").name).toBe("sifatul");
        expect(selectedDir.cd("..").name).toBe("sifatul");
    });

    test("moving inside a file should raise error", () => {
        try {
            selectedDir = selectedDir.cd("helloscribe ai");
        } catch (err: any) {
            expect(err.message).toMatch("not a directory");
        }
    });

    test("getting the entire path", () => {
        expect(selectedDir.pwd).toBe("/sifatul/experiences");
    });
});
