import React, { useEffect } from "react";
import TerminalModePage from ".";
import TerminalModeProvider from "./TerminalModeProvider";
import { useNavigate } from "react-router-dom";

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
