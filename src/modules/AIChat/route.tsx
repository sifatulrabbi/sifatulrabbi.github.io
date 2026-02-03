import React, { useEffect } from "react";

import AIChatPage from "./index";
import AIChatProvider from "./context/ai-chat-provider";

const AIChatRoute: React.FC = () => {
  useEffect(() => {
    const previousTheme = document.body.getAttribute("data-theme");
    const previousOverflow = document.body.style.overflow;

    document.body.setAttribute("data-theme", "dark");
    document.body.style.overflow = "auto";

    return () => {
      if (previousTheme) {
        document.body.setAttribute("data-theme", previousTheme);
      } else {
        document.body.removeAttribute("data-theme");
      }
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <AIChatProvider>
      <AIChatPage />
    </AIChatProvider>
  );
};

export default AIChatRoute;
