import { rootDirectory } from "../src/modules/TerminalMode/directories";

describe("Testing the directories", () => {
  test("the parent for the root dir should be null", () => {
    expect(rootDirectory.parent).toBe(null);
  });

  test("pwd of the root dir", () => {
    expect(rootDirectory.pwd).toBe("Sifatul's Portfolio: ~");
  });

  test("change current dir to 'experiences'", () => {
    expect(rootDirectory.cd("experiences").name).toBe("Experiences");
  });

  test("go back to parent using '../' or '..'", () => {
    const experiences = rootDirectory.cd("experiences");
    expect(experiences.cd("../")).toBe(rootDirectory);
    expect(experiences.cd("..")).toBe(rootDirectory);
  });

  test("moving inside a file should raise error", () => {
    const experiences = rootDirectory.cd("experiences");
    expect(() => experiences.cd("helloscribe ai")).toThrow("not a directory");
  });

  test("getting the entire path", () => {
    expect(rootDirectory.cd("experiences").pwd).toBe(
      "Sifatul's Portfolio: ~/Experiences",
    );
  });
});
