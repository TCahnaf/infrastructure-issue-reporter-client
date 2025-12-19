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
import ManagerUsers from "../pages/Admin/ManagerUsers";
import ManageIssues from "../pages/Admin/ManageIssues";
import AdminRoute from "./AdminRoute";
import AllPayments from "../pages/Admin/AllPayments";
import AssignedIssues from "../pages/Staff/AssignedIssues";
import StaffRoute from "./StaffRoute";
import DashStats from "../pages/Dashboard/DashStats";
import DashStatsStaff from "../pages/Dashboard/DashStatsStaff";
import DashHome from "../pages/Dashboard/DashHome";


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
            element: <IssuesList></IssuesList>
        },

        {
            path: '/issue/details/:id',
            element:<PrivateRoute><IssueDetail></IssueDetail></PrivateRoute>
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
                index:true,
                Component: DashHome

            },

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
                element:<AdminRoute><ManageStaff></ManageStaff></AdminRoute>
            },

            {
                path: 'manage-users',
                element:<AdminRoute><ManagerUsers></ManagerUsers></AdminRoute>
            },

            {
                path: 'all-issues',
                element:<AdminRoute><ManageIssues></ManageIssues></AdminRoute>
            },

            {
                path: 'all-payments',
               element: <AdminRoute><AllPayments></AllPayments></AdminRoute>
            },

            {
                path: 'issues-assigned',
                element: <StaffRoute><AssignedIssues></AssignedIssues></StaffRoute>
            }




        ]

    }
]);