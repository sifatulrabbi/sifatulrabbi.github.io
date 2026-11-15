const careerStart = new Date(2022, 0, 1);

export function yearsOfExperience({
  since,
  today,
}: {
  since: Date;
  today: Date;
}): string {
  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0,
  ).getDate();
  const months =
    (today.getFullYear() - since.getFullYear()) * 12 +
    (today.getMonth() - since.getMonth()) +
    (today.getDate() - since.getDate()) / daysInMonth;
  const years = Math.floor(months / 12);
  const extraMonths = months - years * 12;
  if (extraMonths === 0) return `${years}`;
  if (extraMonths > 7) return `${years + 1}`;
  return `${years}.5`;
}

export function aboutMe(today: Date): string {
  const years = yearsOfExperience({ since: careerStart, today });
  return `I build software products end to end, from the backend to the UI, and for the last ${years} years most of that work has been customer-facing AI agents and the SaaS products around them. I mostly write TypeScript, Python, and Go, terminal-first in Neovim. I like getting useful work into production quickly without major compromises, and I enjoy seeing people use what I've built.`;
}

export const profile = {
  hero: {
    title: "Senior Full-Stack Developer",
    focus: "AI Agents and SaaS",
  },
  availability:
    "Open to senior full-stack and AI-agent roles. Remote, available UTC+0 hours or adjusted for a good overlap with your team.",
  contact: {
    email: "sifatulrabbii@gmail.com",
    socials: [
      {
        label: "GitHub",
        handle: "github.com/sifatulrabbi",
        url: "https://github.com/sifatulrabbi",
      },
      {
        label: "LinkedIn",
        handle: "linkedin.com/in/sifatulrabbi",
        url: "https://www.linkedin.com/in/sifatulrabbi/",
      },
      {
        label: "X",
        handle: "x.com/temujin_h",
        url: "https://x.com/temujin_h",
      },
    ],
    closingLine:
      "Feel free to reach out for collaborations, opportunities, or just to say hi!",
  },
} as const;
