export interface Attachment {
  id: string;
  name: string;
  type: string;
  url: string;
}

export interface UserStep {
  id: string;
  type: "user";
  createdAt: string;
  content: { text: string };
  attachments?: Attachment[];
  status?: "complete";
}

export type AIStepStatus = "pending" | "streaming" | "complete" | "error";

export interface TextBlock {
  id: string;
  type: "text";
  text: string;
}

export interface ReasoningBlock {
  id: string;
  type: "reasoning";
  text: string;
}

export interface ArtifactBlock {
  id: string;
  type: "artifact";
  artifactId: string;
}

export interface ToolCall {
  toolCallId: string;
  toolName: string;
  argumentsJson: string;
}

export interface ToolCallBlock {
  id: string;
  type: "tool_call";
  toolCall: ToolCall;
}

export type AIBlock =
  | TextBlock
  | ReasoningBlock
  | ArtifactBlock
  | ToolCallBlock;

export interface AIStep {
  id: string;
  type: "ai";
  createdAt: string;
  status: AIStepStatus;
  blocks: AIBlock[];
}

export interface ToolResultStep {
  id: string;
  type: "tool_result";
  createdAt: string;
  toolCallId: string;
  toolName?: string;
  status: "complete" | "error";
  output: { text?: string; json?: unknown };
}

export type Step = UserStep | AIStep | ToolResultStep;

export type ArtifactKind = "code" | "markdown" | "html" | "json" | "text";

export interface Artifact {
  id: string;
  title: string;
  kind: ArtifactKind;
  language?: string;
  createdAt: string;
  updatedAt: string;
  content: string;
  version?: number;
}

export interface Thread {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  model?: string;
  steps: Step[];
}

export interface AIChatState {
  threads: Thread[];
  artifactsById: Record<string, Artifact>;
  activeThreadId: string | null;
  sidebarOpen: boolean;
  artifactsOpen: boolean;
  selectedArtifactId: string | null;
  composerText: string;
  themeSetting: "light" | "dark";
}

export interface AIChatActions {
  createThread: () => void;
  selectThread: (id: string) => void;
  sendUserMessage: (text: string) => void;
  setComposerText: (text: string) => void;
  selectArtifact: (id: string | null) => void;
  toggleSidebar: () => void;
  toggleArtifacts: () => void;
  setThemeSetting: (theme: "light" | "dark") => void;
}

export interface AIChatContextValue extends AIChatState, AIChatActions {}
