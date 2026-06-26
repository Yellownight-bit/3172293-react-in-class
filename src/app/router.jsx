import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout, DashboardLayout } from "@/shared";
import { UserListPage } from "@/features/users";
import { UserRegisterForm } from "../features/users";
// import { ReportGonfigModal } from "../features/users";

const router = createBrowserRouter ([ 
    {
    path: "/dashboard",
    element: <Navigate to="/dashboard" replace />
    },
    {
    path: "/auth",
    element: <AuthLayout />,
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
            // { path: "/dashboard/userReport", element: <ReportGonfigModal/> },
        ],
    },
]);

export default router;