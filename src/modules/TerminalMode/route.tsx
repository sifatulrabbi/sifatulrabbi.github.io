import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import TerminalModePage from "./index";
import TerminalModeProvider from "./context/TerminalModeProvider";

const TerminalRoute: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.setAttribute("data-theme", "dark");
    document.body.style.overflow = "auto";
  }, []);

  return (
    <TerminalModeProvider exitTerminalMode={() => navigate(-1)}>
      <TerminalModePage closeTerminal={() => navigate(-1)} />
    </TerminalModeProvider>
  );
};

export default TerminalRoute;
