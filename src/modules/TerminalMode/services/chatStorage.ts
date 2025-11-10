import type { ChatMessage, ChatHistory, ChatStorageService } from "@/types/chatMode";

const STORAGE_KEY = "portfolio-chat-history";
const MAX_MESSAGES = 50;

export const chatStorage: ChatStorageService = {
    saveMessage(message: ChatMessage): void {
        const history = this.getHistory();
        history.push(message);

        // Keep only the last MAX_MESSAGES
        const trimmedHistory = history.slice(-MAX_MESSAGES);

        const chatHistory: ChatHistory = {
            messages: trimmedHistory,
            lastUpdated: Date.now(),
        };

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(chatHistory));
        } catch (error) {
            console.error("Failed to save chat message to localStorage:", error);
        }
    },

    getHistory(): ChatMessage[] {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (!stored) return [];

            const chatHistory: ChatHistory = JSON.parse(stored);
            return chatHistory.messages || [];
        } catch (error) {
            console.error("Failed to load chat history from localStorage:", error);
            return [];
        }
    },

    clearHistory(): void {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch (error) {
            console.error("Failed to clear chat history:", error);
        }
    },
};
