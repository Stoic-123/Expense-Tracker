import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import AllExpense from "./components/pages/AllExpense";
import DailyExpense from "./components/pages/DailyExpense";
import MonthlyExpense from "./components/pages/MonthlyExpense";
import Category from "./components/pages/Category";
import Profile from "./components/pages/Profile";
import Navbar from "./components/Navbar";
import NotFound from "./components/pages/NotFound";
import Signin from "./components/pages/Signin";
import Landing from "./components/pages/landing/Landing";
import ProtectRoute from "./utils/ProtectRoute";
import LoaderOnRouteChange from "./utils/LoaderOnRouteChange";
import Signup from "./components/pages/Signup";
import ForgotPass from "./components/pages/ForgotPass";

const AuthLayout = () => (
  <div
    className="d-flex  justify-content-center   pb-5"
    style={{
      backgroundImage: 'url("/assets/auth.svg")',
      backgroundSize: "cover",
    }}
  >
    <LoaderOnRouteChange />
    <Outlet />
  </div>
);
const MainLayout = ({ isDark, setCollapse, setIsDark, isCollapse }) => {
  const handleCollapse = () => {
    setCollapse((prev) => !prev);
  };
  const handleDarkMode = () => {
    setIsDark(true);
    localStorage.setItem("theme", "dark");
  };
  const handleLightMode = () => {
    setIsDark(false);
    localStorage.setItem("theme", "light");
  };
  return (
    <ProtectRoute>
      <LoaderOnRouteChange />

      <div className=" d-flex justify-content-between position-relative">
        <div
          className="vh-100 d-none d-lg-block position-sticky start-0 top-0"
          style={{
            width: isCollapse ? "5%" : "25%",
            backgroundColor: isDark ? "#1F2937" : "#123a8b",
            borderRight: isDark ? "1px solid #2B3544" : "1px solid #FFFFFFFF",
            transition: "all .2s ease-in-out",
          }}
        >
          <Sidebar
            isDark={isDark}
            isCollapse={isCollapse}
            handleCollapse={handleCollapse}
          />
        </div>
        <div
          className="w-100"
          style={{
            transition: "width .1s ease-in-out",
          }}
        >
          <Navbar
            bgColor={isDark ? "#1F2937" : "#123a8b"}
            click={isDark ? handleLightMode : handleDarkMode}
            changeIcon={isDark}
          />

          <div
            className="col-12 p-4"
            style={{
              backgroundColor: isDark ? "#111827" : "#ffffff",
              height: "auto",
              color: isDark ? "#ffffff" : "#252525",
              transition: "all .2s ease-in-out",
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </ProtectRoute>
  );
};
const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [isCollapse, setCollapse] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/auth" element={<Navigate to="/auth/signin" replace />} />
        <Route path="/auth/signin" element={<Signin />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/forgot-password" element={<ForgotPass />} />
      </Route>
      <Route
        element={
          <MainLayout
            isDark={isDark}
            setIsDark={setIsDark}
            isCollapse={isCollapse}
            setCollapse={setCollapse}
          />
        }
      >
        <Route path="/dashboard" element={<Dashboard isDark={isDark} />} />
        <Route
          path="/dashboard/expenses"
          element={<AllExpense isDark={isDark} />}
        />
        <Route
          path="/dashboard/daily"
          element={<DailyExpense isDark={isDark} />}
        />
        <Route
          path="/dashboard/monthly"
          element={<MonthlyExpense isDark={isDark} />}
        />
        <Route
          path="/dashboard/categories"
          element={<Category isDark={isDark} />}
        />
        <Route
          path="/dashboard/profile"
          element={<Profile isDark={isDark} />}
        />
      </Route>
      <Route path="/" element={<Navigate to="/landing" />} />
      <Route path="/landing" element={<Landing />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
