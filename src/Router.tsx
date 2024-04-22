import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PortfolioLayout from "@/layouts/PortfolioLayout";
import BlogsLayout from "@/layouts/BlogsLayout";
import BorwseBlogsPage from "@/modules/Blogs/BrowseBlogsPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "",
                element: <PortfolioLayout />,
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
                        element: <div></div>,
                    },
                ],
            },
        ],
    },
]);

export default router;
