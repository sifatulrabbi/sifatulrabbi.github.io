export type AIChatThemeSetting = "light" | "dark";

export const parseThemeSetting = (
  value: string | null | undefined,
): AIChatThemeSetting => {
  return value === "light" ? "light" : "dark";
};

export const toggleThemeSetting = (
  current: AIChatThemeSetting,
): AIChatThemeSetting => {
  return current === "light" ? "dark" : "light";
};
