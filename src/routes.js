import { useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";

export default function Router() {
    return useRoutes([
        {
            path: "/",
            element: <Layout />,
        },
    ]);
}
