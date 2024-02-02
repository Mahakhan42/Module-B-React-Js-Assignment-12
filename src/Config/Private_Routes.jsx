// Private_Routes.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  console.log("isLoggedIn", isLoggedIn);

  return isLoggedIn ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};
