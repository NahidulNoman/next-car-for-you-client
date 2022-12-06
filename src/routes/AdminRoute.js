import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Admin from "../hooks/Admin";
import UseLoading from "../hooks/UseLoading";
import { AuthContext } from "../UserContext/UserContext";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = Admin(user?.email);
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <UseLoading></UseLoading>;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
