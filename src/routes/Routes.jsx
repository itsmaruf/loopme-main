import { createBrowserRouter } from "react-router-dom";
import Broken from "../pages/broken/Broken";
import { adminRoutes } from "../portals/admin/router.admin";
import { userRoutes } from "../portals/user/router.user";

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
    path: "/admin",
    children: adminRoutes,
  },
  {
    path: "*",
    element: <Broken />,
  },
]);
