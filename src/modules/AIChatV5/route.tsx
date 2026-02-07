import React from "react";
import AIChatV5Page from "./index";
import AIChatProvider from "@/modules/AIChat/context/ai-chat-provider";

const AIChatV5Route: React.FC = () => (
  <AIChatProvider>
    <AIChatV5Page />
  </AIChatProvider>
);

export default AIChatV5Route;
