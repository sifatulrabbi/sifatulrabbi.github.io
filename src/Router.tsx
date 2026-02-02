import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BlogsLayout from "@/layouts/BlogsLayout";
import BorwseBlogsPage from "@/modules/Blogs/BrowseBlogsPage";
import ReadBlogPage from "./modules/Blogs/ReadBlogsPage";
import TerminalRoute from "./modules/TerminalMode/route";
import AIChatRoute from "./modules/AIChat/route";
import liveAppsRoutes from "./modules/LiveApps/router";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <TerminalRoute />,
      },
      {
        path: "/blogs",
        element: <BlogsLayout />,
        children: [
          {
            path: "",
            element: <BorwseBlogsPage />,
          },
          {
            path: "/blogs/read/:articleid",
            element: <ReadBlogPage />,
          },
        ],
      },
      {
        path: "/live-apps",
        children: liveAppsRoutes,
      },
      {
        path: "/ai-chat",
        element: <AIChatRoute />,
      },
    ],
  },
]);

export default router;
