import { createBrowserRouter, Navigate } from "react-router-dom";
import { DashboardLayout } from "@/shared";
import { UserListPage } from "@/features/users";
import { UserRegisterForm } from "../features/users";
import { HomePage } from "@/features/home"
import { Login } from "@/features/auth"
// import { ReportGonfigModal } from "../features/users";

const router = createBrowserRouter ([ 
    {
    path: "/dashboard",
    element: <Navigate to="/dashboard" replace />
    },
    {
    path: "/auth",
    element: <Login />,
    children: [
            {
            index: true,
            },
        ],
    },
    {
    path: "/dashboard",
    element: <DashboardLayout/>,
    children: [
            { index: true},
            // { path: "/dashboard/auth", element: <h1>Hello2</h1> },
            { path: "/dashboard/userList", element: <UserListPage/> },
            { path: "/dashboard/userCreate", element: <UserRegisterForm/> },
            { path: "/dashboard/Card", element: <HomePage/> },
            // { path: "/dashboard/userReport", element: <ReportGonfigModal/> },
        ],
    },
]);

export default router;