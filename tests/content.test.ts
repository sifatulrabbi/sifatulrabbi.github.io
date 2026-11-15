import { experiences } from "../src/content/experiences";
import { profile } from "../src/content/profile";
import { skills } from "../src/content/skills";
import { rootDirectory } from "../src/modules/TerminalMode/directories";
import {
  ListExp,
  PrintContact,
  PrintExperiences,
  PrintSkills,
} from "../src/modules/TerminalMode/terminalService";

function run<T extends { exec(): unknown; output: string }>(cmd: T): string {
  cmd.exec();
  return cmd.output;
}

describe("experiences come from one source", () => {
  const printed = run(new PrintExperiences(""));
  const listedAll = run(new ListExp("list_exp all", ""));
  const files = [...rootDirectory.cd("experiences").children.values()].map(
    (f) => f.fileContent ?? "",
  );

  test.each(experiences.map((e) => [e.company, e]))(
    "%s shows the same title, company, and period everywhere",
    (_, exp) => {
      for (const view of [printed, listedAll]) {
        expect(view).toContain(exp.title);
        expect(view).toContain(exp.company);
        expect(view).toContain(exp.period);
      }
      const file = files.find((f) => f.includes(exp.company));
      expect(file).toBeDefined();
      expect(file).toContain(exp.title);
      expect(file).toContain(exp.period);
    },
  );

  test("every highlight is printed", () => {
    for (const exp of experiences) {
      for (const highlight of exp.highlights) {
        expect(printed).toContain(highlight);
      }
    }
  });

  test("the experiences directory has one file per experience", () => {
    expect(files).toHaveLength(experiences.length);
  });
});

describe("contact", () => {
  const html = run(new PrintContact(""));

  test("the visible email is the address the mailto link opens", () => {
    const link = html.match(/href="mailto:([^"]+)"[^>]*>\s*([^<\s]+)\s*</);
    expect(link).not.toBeNull();
    expect(link![2]).toBe(link![1]);
    expect(link![1]).toBe(profile.contact.email);
  });

  test("every social link is shown", () => {
    for (const social of profile.contact.socials) {
      expect(html).toContain(`href="${social.url}"`);
    }
  });

  test("the availability line is shown", () => {
    expect(html).toContain(profile.availability);
  });
});

describe("skills", () => {
  test("every skill is printed under its group", () => {
    const html = run(new PrintSkills(""));
    for (const [group, items] of Object.entries(skills)) {
      expect(html).toContain(group);
      for (const item of items) {
        expect(html).toContain(item);
      }
    }
  });
});
