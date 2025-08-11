import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Atom } from "react-loading-indicators";
const ProtectRoute = ({ children }) => {
  const [isAuth, setAuth] = useState(null);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:3030/check-auth", {
          withCredentials: true,
        });
        setAuth(response.status === 200);
      } catch (error) {
        setAuth(false);
      }
    };
    checkAuth();
  }, []);
  return isAuth ? children : <Navigate to="/auth/signin" replace />;
};

export default ProtectRoute;
