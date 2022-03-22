import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login.jsx";
import NotFound from "./shared/NotFound";

// import Layout from "./layout/Layout";
const Layout = React.lazy(() => import("./layout/Layout"));

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "dashboard", element: <Dashboard /> },
                { path: "login", element: <Login /> },
                { path: "404", element: <NotFound /> },
            ],
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
}
