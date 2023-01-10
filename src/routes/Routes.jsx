import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <h2 className="text-5xl">Home</h2>
        }
    ]
)