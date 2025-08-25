import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
const apiUrl =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:5000";
const ProtectRoute = ({ children }) => {
  const [isAuth, setAuth] = useState(null); // null = loading

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get(`${apiUrl}/auth/check-auth`, {
          withCredentials: true,
        });
        setAuth(true); // success
      } catch (error) {
        setAuth(false); // failed
      }
    };
    checkAuth();
  }, []);

  if (isAuth === null) {
    return null;
  }

  return isAuth ? children : <Navigate to="/auth/signin" replace />;
};

export default ProtectRoute;
