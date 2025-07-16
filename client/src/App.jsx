import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import AllExpense from "./components/pages/AllExpense";
import DailyExpense from "./components/pages/DailyExpense";
import MonthlyExpense from "./components/pages/MonthlyExpense";
import Category from "./components/pages/Category";
import Profile from "./components/pages/Profile";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { DarkMode } from "@mui/icons-material";
const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [isCollapse, setCollapse] = useState(false);
  const handleCollapse = () => {
    setCollapse((prev) => !prev);
  };
  const handleDarkMode = () => {
    setIsDark(true);
  };
  const handleLightMode = () => {
    setIsDark(false);
  };
  return (
    <div className=" d-flex justify-content-between position-relative">
      <div
        className="vh-100 position-sticky start-0 top-0"
        style={{
          width: isCollapse ? "5%" : "20%",
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
        style={{
          width: isCollapse ? "95%" : "80%",
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
            height: "200vh",
            color: isDark ? "#ffffff" : "#252525",
            transition: "all .2s ease-in-out",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard isDark={isDark} />} />
            <Route path="/expenses" element={<AllExpense isDark={isDark} />} />
            <Route path="/daily" element={<DailyExpense isDark={isDark} />} />
            <Route
              path="/monthly"
              element={<MonthlyExpense isDark={isDark} />}
            />
            <Route path="/categories" element={<Category isDark={isDark} />} />
            <Route path="/profile" element={<Profile isDark={isDark}/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
