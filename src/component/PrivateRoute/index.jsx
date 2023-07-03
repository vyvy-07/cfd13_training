import React from "react";
import { useAuthen } from "../AuthenContext";
import { LOCAL_STOGARE } from "../../constants/localStogare";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ redirectPath = "/" }) => {
  const { openAuthModal } = useAuthen();
  const token = localStorage.getItem(LOCAL_STOGARE.token);
  if (!token) {
    openAuthModal(true);
    return <Navigate to={redirectPath} />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
