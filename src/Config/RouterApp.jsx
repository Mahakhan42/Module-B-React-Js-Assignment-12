// Router_App.js
import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { PrivateRoutes } from "./Private_Routes";
import { Dashboard } from "../Pages/Dashboard";
import { PublicRoutes } from "./Public_Route";
import { Login } from "../Pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path="" element={<PrivateRoutes />}>
      <Route path="dashboard" element={<Dashboard />} />
    </Route>

    <Route path="" element={<PublicRoutes />}>
      <Route path="login" element={<Login />} />
    </Route>
    </Route>
  )
);

export const RouterApp = () => {
  return <RouterProvider router={router} />;
};
