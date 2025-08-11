import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectRoute = ({ children }) => {
  const [isAuth, setAuth] = useState(null); // null = loading

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:3030/auth/check-auth", {
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
