import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Atom } from "react-loading-indicators";

const LoaderOnRouteChange = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, [location]);

  if (!loading) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        zIndex: 9999,
      }}
    >
      <Atom color="#3244CDFF" size="large" speedPlus="-2" />
    </div>
  );
};

export default LoaderOnRouteChange;
