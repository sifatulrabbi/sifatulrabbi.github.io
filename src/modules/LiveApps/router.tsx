import { type RouteObject } from "react-router-dom";
import LiveAppsMain from "./index";
import HTMLViewer from "./HTMLViewer";
import HTMLToMarkdown from "./HTMLToMarkdown";

const personalFinanceRoutes: RouteObject[] = [
  {
    index: true,
    element: <LiveAppsMain />,
  },
  {
    path: "/live-apps/html-viewer",
    element: <HTMLViewer />,
  },
  {
    path: "/live-apps/html-to-markdown",
    element: <HTMLToMarkdown />,
  },
];

export default personalFinanceRoutes;
