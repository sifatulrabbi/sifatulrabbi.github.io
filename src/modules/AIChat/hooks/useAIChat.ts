import React from "react";
import { AIChatContext } from "../context/ai-chat-context";
import type { AIChatContextValue } from "@/types";

export const useAIChat = (): AIChatContextValue => {
  const context = React.useContext(AIChatContext);
  if (!context) {
    throw new Error("useAIChat must be used within an AIChatProvider");
  }
  return context;
};

export default useAIChat;
