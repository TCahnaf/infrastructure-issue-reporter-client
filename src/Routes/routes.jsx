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
import ReportIssue from "../pages/Dashboard/ReportIssue";
import MyIssues from "../pages/Dashboard/MyIssues";
import ProfileUpdate from "../components/ProfileUpdate";
import PaymentSuccess from "../pages/Payments/PaymentSuccess";
import PaymentCancel from "../pages/Payments/PaymentCancel";
import ManageStaff from "../pages/Admin/ManageStaff";


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
        Component: Dashboard,
        children: [

            {
                path:'create-issue',
                Component: ReportIssue
            },

            {
                path: 'my-issues',
                Component: MyIssues
            },

            {
                path: 'profile-page',
                Component: ProfileUpdate
            },

            {
                path: 'payment-success',
                Component:PaymentSuccess
            },

            {
                path: 'payment-cancelled',
                Component: PaymentCancel
            },

            {
                path: 'manage-staff',
                Component: ManageStaff
            }




        ]

    }
]);