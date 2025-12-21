import { FiFolder, FiFileText, FiMail, FiCode } from "react-icons/fi";

export const ASCII_ART = `
███████╗ ██╗ ███████╗ █████╗ ████████╗██╗   ██╗ ██╗
██╔════╝ ██║ ██╔════╝██╔══██╗╚══██╔══╝██║   ██║ ██║
███████╗ ██║ █████╗  ███████║   ██║   ██║   ██║ ██║
╚════██║ ██║ ██╔══╝  ██╔══██║   ██║   ██║   ██║ ██║
███████║ ██║ ██║     ██║  ██║   ██║   ╚██████╔╝ ███████╗
╚══════╝ ╚═╝ ╚═╝     ╚═╝  ╚═╝   ╚═╝    ╚═════╝  ╚══════╝

██████╗   █████╗  ██████╗  ██████╗  ██╗
██╔══██╗ ██╔══██╗ ██╔══██╗ ██╔══██╗ ██║
██████╔╝ ███████║ ██████╔╝ ██████╔╝ ██║
██╔══██╗ ██╔══██║ ██╔══██╗ ██╔══██╗ ██║
██║  ██║ ██║  ██║ ██████╔╝ ██████╔╝ ██║
╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═════╝  ╚═════╝  ╚═╝
`.trim();

export const ABOUT_ME = `I love building software and collaborating with awesome people. I often use Python, TypeScript, or Go to hack out most of my curiosities on Neovim. I enjoy exploring the tech and generative AI world. My intuitions and experience in full-stack development makes me more product oriented and enables me to plan and deploy features from scratch.`;

export type CommandButtonInfo = {
  id: string;
  command: string;
  label: string;
  icon: React.ReactNode;
  description: string;
};

export const AVAILABLE_COMMANDS: CommandButtonInfo[] = [
  {
    id: "experiences",
    command: "print experiences",
    label: "Experiences",
    icon: <FiFolder />,
    description: "View my work experience",
  },
  {
    id: "projects",
    command: "print projects",
    label: "Projects",
    icon: <FiCode />,
    description: "Browse my projects",
  },
  {
    id: "skills",
    command: "print skills",
    label: "Skills",
    icon: <FiFileText />,
    description: "See my technical skills",
  },
  {
    id: "contact",
    command: "print contact",
    label: "Contact",
    icon: <FiMail />,
    description: "Get in touch",
  },
];
