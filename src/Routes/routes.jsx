import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";
import HomePage from "../pages/Home/HomePage";
import IssuesList from "../pages/Issues/IssuesList";
import IssueDetail from "../pages/Issues/IssueDetail";
import Dashboard from "../layouts/Dashboard";

export const router  = createBrowserRouter([{
    path:"/",
    Component:Home,
    children: [
        {
            index: true,
            Component: HomePage

        },

        {
            path: '/issues',
            Component: IssuesList
        },

        {
            path: '/issue/details/:id',
            Component: IssueDetail
        }
    ]},

    {
        path: "dashboard",
        Component: Dashboard

    }
]);