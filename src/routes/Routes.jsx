import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <h2 className="text-5xl">Home</h2>
        },
        {
            path: "/user",
            element: <h2 className="text-5xl">User</h2>
        },
        {
            path: "/grower",
            element: <h2 className="text-5xl">Grower</h2>
        },
        {
            path: "/admin",
            element: <h2 className="text-5xl">Admin</h2>
        },
        {
            path: "/*",
            element: <h2 className="text-5xl">Not Found</h2>
        }
    ]
)