import { createBrowserRouter } from "react-router-dom";
import AdminPortal from "../layouts/adminPortal/AdminPortal";
import { adminRoutes } from "../layouts/adminPortal/AdminRoutes";
import { growerRoutes } from "../layouts/growerPortal/GrowerRouter";
import { userRoutes } from "../layouts/userPortal/UserRouter";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <h2 className="text-5xl">Home</h2>,
  },
  {
    path: "/user",
    children: userRoutes,
  },
  {
    path: "/grower",
    children: growerRoutes,
  },
  {
    path: "/admin",
    children: adminRoutes,
  },
  {
    path: "/*",
    element: <h2 className="text-5xl">Not Found</h2>,
  },
]);
