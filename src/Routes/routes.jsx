import { createBrowserRouter } from "react-router";
import Home from "../layouts/Home";
import HomePage from "../pages/Home/HomePage";
import IssuesList from "../pages/Issues/IssuesList";
import IssueDetail from "../pages/Issues/IssueDetail";
import Dashboard from "../layouts/Dashboard";
import Auth from "../layouts/Auth";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Home/Contact";

export const router  = createBrowserRouter([{
    path:"/",
    Component:Home,
    children: [
        {
            index: true,
            Component: HomePage

        },
        {
            path:'/contact',
            Component:Contact
        },

        {
            path: '/issues',
            element: <PrivateRoute><IssuesList></IssuesList></PrivateRoute>
        },

        {
            path: '/issue/details/:id',
            Component: IssueDetail
        }
    ]},

    { path: '/',
        Component: Auth,
        children: [ {
            path: 'register',
            Component: Register
        },

        {
            path: 'login',
            Component: Login

        }

        ]

    },

    {
        path: "dashboard",
        Component: Dashboard

    }
]);