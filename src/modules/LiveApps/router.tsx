import { type RouteObject } from "react-router-dom";
import LiveAppsMain from "./index";
import HTMLViewer from "./HTMLViewer";

const personalFinanceRoutes: RouteObject[] = [
    {
        index: true,
        element: <LiveAppsMain />,
    },
    {
        path: "/live-apps/html-viewer",
        element: <HTMLViewer />,
    },
];

export default personalFinanceRoutes;
