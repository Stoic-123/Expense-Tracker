import React from "react";
import "./sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import WalletIcon from "@mui/icons-material/Wallet";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BarChartIcon from "@mui/icons-material/BarChart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Person2Icon from "@mui/icons-material/Person2";
import { IconButton } from "@mui/material";
const Sidebar = ({ handleCollapse, isCollapse, isDark }) => {
  return (
    <div>
      <div
        style={{
          borderBottom: isDark ? "1px solid #2B3544" : "1px solid #FFFFFFFF",
          transition: "all .2s ease-in-out",
        }}
        className="d-flex align-items-center p-3 justify-content-center "
      >
        {!isCollapse ? (
          <>
            <WalletIcon className="text-primary" fontSize="large" />
            <h5 className="text-white mb-0 px-2">ExpenseTracker</h5>
            <IconButton
              className="bg-transparent text-white border-0 "
              onClick={handleCollapse}
            >
              <MenuIcon />
            </IconButton>
          </>
        ) : (
          <IconButton
            className="bg-transparent text-white border-0 "
            onClick={handleCollapse}
          >
            <MenuIcon />
          </IconButton>
        )}
      </div>
      <div className="p-1 sidebar">
        <ul className=" text-center p-0 px-2 ">
          <li>
            <NavLink
              className="link-tag d-flex align-item-center "
              to="/dashboard"
              end
            >
              {!isCollapse ? (
                <>
                  <HomeIcon className="me-2" />
                  Dashboard
                </>
              ) : (
                <HomeIcon className="me-2" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link-tag d-flex align-item-center "
              to="/dashboard/expenses"
            >
              {!isCollapse ? (
                <>
                  <AccountBalanceWalletIcon className="me-2" />
                  All Expenses
                </>
              ) : (
                <AccountBalanceWalletIcon className="me-2" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link-tag d-flex align-item-center "
              to="/dashboard/daily"
            >
              {!isCollapse ? (
                <>
                  <CalendarMonthIcon className="me-2" />
                  Daily Expenses
                </>
              ) : (
                <CalendarMonthIcon className="me-2" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link-tag d-flex align-item-center "
              to="/dashboard/monthly"
            >
              {!isCollapse ? (
                <>
                  <BarChartIcon className="me-2" />
                  Monthly Summary
                </>
              ) : (
                <BarChartIcon className="me-2" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link-tag d-flex align-item-center  "
              to="/dashboard/categories"
            >
              {!isCollapse ? (
                <>
                  <LocalOfferIcon className="me-2" />
                  Categories
                </>
              ) : (
                <LocalOfferIcon className="me-2" />
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link-tag d-flex align-item-center  "
              to="/dashboard/profile"
            >
              {!isCollapse ? (
                <>
                  <Person2Icon className="me-2" />
                  Profile
                </>
              ) : (
                <Person2Icon className="me-2" />
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
