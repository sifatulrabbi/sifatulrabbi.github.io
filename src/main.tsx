import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";

import "@/styles/index.scss";

const renderElement = document.getElementById("root");
const root = ReactDOM.createRoot(renderElement!);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
