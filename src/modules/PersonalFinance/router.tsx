import { type RouteObject } from "react-router-dom";
import PersonalFinanceLandingPage from "./index";

const personalFinanceRoutes: RouteObject[] = [
    {
        index: true,
        element: <PersonalFinanceLandingPage />,
    },
];

export default personalFinanceRoutes;
