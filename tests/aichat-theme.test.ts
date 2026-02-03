import { parseThemeSetting, toggleThemeSetting } from "../src/modules/AIChat/theme";

describe("AI Chat theme helpers", () => {
  test("parseThemeSetting defaults to dark for invalid values", () => {
    expect(parseThemeSetting(null)).toBe("dark");
    expect(parseThemeSetting("system")).toBe("dark");
    expect(parseThemeSetting("invalid")).toBe("dark");
  });

  test("parseThemeSetting returns light when value is light", () => {
    expect(parseThemeSetting("light")).toBe("light");
  });

  test("toggleThemeSetting flips between light and dark", () => {
    expect(toggleThemeSetting("dark")).toBe("light");
    expect(toggleThemeSetting("light")).toBe("dark");
  });
});
