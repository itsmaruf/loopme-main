import AdminPanel from "./AdminPanel/AdminPanel";

export const adminRoutes = [
  {
    path: "/admin/",
    element: <AdminPanel />,
  },
  {
    path: "/admin/panel",
    element: <h2>This is the panel for admin</h2>,
  },
];
