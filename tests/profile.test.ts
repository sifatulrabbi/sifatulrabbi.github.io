import { aboutMe, yearsOfExperience } from "../src/content/profile";

const careerStart = new Date(2022, 0, 1);

describe("years of experience since January 2022", () => {
  test.each([
    ["exactly 4 years", "4", new Date(2026, 0, 1)],
    ["4 years 2 months", "4.5", new Date(2026, 2, 1)],
    ["exactly 4 years 7 months", "4.5", new Date(2026, 7, 1)],
    ["just past 4 years 7 months", "5", new Date(2026, 7, 2)],
    ["4 years 10 months 14 days", "5", new Date(2026, 10, 15)],
    ["exactly 5 years", "5", new Date(2027, 0, 1)],
    ["5 years 3 months", "5.5", new Date(2027, 3, 1)],
  ])("%s reads as %s", (_, expected, today) => {
    expect(yearsOfExperience({ since: careerStart, today })).toBe(expected);
  });
});

test("the about-me paragraph states the computed years", () => {
  expect(aboutMe(new Date(2026, 10, 15))).toContain("for the last 5 years");
  expect(aboutMe(new Date(2027, 3, 1))).toContain("for the last 5.5 years");
});
