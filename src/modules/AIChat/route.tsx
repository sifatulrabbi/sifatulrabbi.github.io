import React from "react";

import AIChatPage from "./index";
import AIChatProvider from "./context/ai-chat-provider";

const AIChatRoute: React.FC = () => {
  return (
    <AIChatProvider>
      <AIChatPage />
    </AIChatProvider>
  );
};

export default AIChatRoute;
