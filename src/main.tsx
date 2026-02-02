import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "@/styles/index.css";
import router from "./router";

const renderElement = document.getElementById("root");
const root = ReactDOM.createRoot(renderElement!);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
