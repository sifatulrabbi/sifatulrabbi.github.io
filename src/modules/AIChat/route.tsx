import React, { useEffect } from "react";

import AIChatPage from "./index";
import AIChatProvider from "./context/ai-chat-provider";

const AIChatRoute: React.FC = () => {
  useEffect(() => {
    document.body.setAttribute("data-theme", "dark");
    document.body.style.overflow = "auto";
  }, []);

  return (
    <AIChatProvider>
      <AIChatPage />
    </AIChatProvider>
  );
};

export default AIChatRoute;
