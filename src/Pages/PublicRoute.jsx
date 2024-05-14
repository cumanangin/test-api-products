import React from "react";

const PublicRoute = ({ children }) => {
  const { checkIsJWTValid } = JWTHelper;
  return checkIsJWTValid(localStorage.getItem("token")) ? (
    <Navigate to="/" />
  ) : (
    children
  );
};

export default PublicRoute;
