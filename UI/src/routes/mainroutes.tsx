import React from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "../pages/loginPage/loginPage";
import AdminPage from "../pages/adminPage/adminPage";
import UserOnboardingPage from "../pages/adminPage/adminPanel/userOnboardingPage";
import UserListPage from "../pages/adminPage/adminPanel/userListPage";
import NotFound from "../pages/401/NotFound";
import PrivateRoute from "./userProtector";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/adminpanel",
    element: <PrivateRoute />,
    children: [
      {
        path: "useronboardingpage",
        element: <UserOnboardingPage />,
      },
      { path: "userlistpage", element: <UserListPage /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

function MainRoutes() {
  return <RouterProvider router={router} />;
}

export default MainRoutes;
