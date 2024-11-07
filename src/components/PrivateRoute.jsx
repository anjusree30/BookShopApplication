import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("auth"); // Check if user is logged in

  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

 
  return children;
}

export default PrivateRoute;
