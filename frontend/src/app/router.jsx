import { createBrowserRouter, Navigate } from "react-router-dom";
import { DashboardLayout } from "@/shared";
import { ProtectedRoute } from "@/shared";
import { UserListPage } from "@/features/users";
import { UserRegisterForm } from "@/features/users";
import { HomePage } from "@/features/home";
import { Login } from "@/features/auth";
import { AccessPage } from "@/features/access";

// import { ReportGonfigModal } from "../features/users";

const router = createBrowserRouter([
    {
        // Redirigimos la raíz "/" hacia "/auth" para que el usuario empiece en el login
        path: "/",
        element: <Navigate to="/auth" replace />,
    },
    {
        path: "/auth",
        element: <Login />,
    },
    { path: "/dashboard/access",
        element: <AccessPage />,
    },
    {
        path: "/dashboard",
        element: (
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <Navigate to="/dashboard/Card" replace /> },
            // { path: "/dashboard/auth", element: <h1>Hello2</h1> },
            { path: "userList", element: <UserListPage /> },
            { path: "userCreate", element: <UserRegisterForm /> },
            { path: "Card", element: <HomePage /> },
            // { path: "/dashboard/userReport", element: <ReportGonfigModal/> },
        ],
    },
]);

export default router;