import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "@/styles/index.scss";
import router from "./Router";

const renderElement = document.getElementById("root");
const root = ReactDOM.createRoot(renderElement!);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
);
