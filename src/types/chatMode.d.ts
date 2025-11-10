export interface ChatMessage {
    role: "user" | "assistant";
    content: string;
    timestamp: number;
}

export interface ChatHistory {
    messages: ChatMessage[];
    lastUpdated: number;
}

export interface ChatStorageService {
    saveMessage: (message: ChatMessage) => void;
    getHistory: () => ChatMessage[];
    clearHistory: () => void;
}
