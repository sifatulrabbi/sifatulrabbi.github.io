import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PortfolioLayout from "@/layouts/PortfolioLayout";
import BlogsLayout from "@/layouts/BlogsLayout";
import BorwseBlogsPage from "@/modules/Blogs/BrowseBlogsPage";
import ReadBlogPage from "./modules/Blogs/ReadBlogsPage";
import personalFinanceRoutes from "./modules/PersonalFinance/router";
import liveAppsRoutes from "./modules/LiveApps/router";

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "",
                element: <PortfolioLayout />,
            },
            // Home tabs as routes for proper navigation
            {
                path: "/experiences",
                element: <PortfolioLayout />,
            },
            {
                path: "/projects",
                element: <PortfolioLayout />,
            },
            {
                path: "/skills",
                element: <PortfolioLayout />,
            },
            {
                path: "/contact",
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
                        element: <ReadBlogPage />,
                    },
                ],
            },
            {
                path: "/personal-finance",
                children: personalFinanceRoutes,
            },
            {
                path: "/live-apps",
                children: liveAppsRoutes,
            },
        ],
    },
]);

export default router;
