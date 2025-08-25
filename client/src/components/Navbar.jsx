import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import SunnyIcon from "@mui/icons-material/Sunny";
import { IconButton } from "@mui/material";
import { Button, Drawer } from "antd";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BarChartIcon from "@mui/icons-material/BarChart";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Person2Icon from "@mui/icons-material/Person2";
import "./navbar.css";
const Navbar = ({ bgColor = "#1F2937", click, changeIcon }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div
      className="position-sticky  z-3  text-white"
      style={{
        backgroundColor: bgColor,
        width: "100%",
        transition: "all .2s ease-in-out",
        padding: "25px 35px",
        borderBottom: "1px solid #2B3544",
      }}
    >
      <div className="d-flex justify-content-between justify-content-lg-end align-items-center">
        <IconButton
          className="btn text-white border-0"
          type="button"
          onClick={click}
        >
          {changeIcon ? (
            <BedtimeIcon fontSize="small" />
          ) : (
            <SunnyIcon fontSize="small" />
          )}
        </IconButton>
        <Button className="d-lg-none py-4" type="primary" onClick={showDrawer}>
          <MenuIcon fontSize="large" />
        </Button>
        <Drawer
          title="Jomnay Manu"
          closable={{ "aria-label": "Close Button" }}
          onClose={onClose}
          open={open}
        >
          <div className="sidebar-mobile">
            <ul className="p-0 px-2 ">
              <li>
                <NavLink
                  className="link-tag d-flex align-item-center "
                  to="/dashboard"
                  end
                >
                  <>
                    <HomeIcon className="me-2" />
                    Dashboard
                  </>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="link-tag d-flex align-item-center "
                  to="/dashboard/expenses"
                >
                  <>
                    <AccountBalanceWalletIcon className="me-2" />
                    All Expenses
                  </>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="link-tag d-flex align-item-center "
                  to="/dashboard/daily"
                >
                  <>
                    <CalendarMonthIcon className="me-2" />
                    Daily Expenses
                  </>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="link-tag d-flex align-item-center "
                  to="/dashboard/monthly"
                >
                  <>
                    <BarChartIcon className="me-2" />
                    Monthly Summary
                  </>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="link-tag d-flex align-item-center  "
                  to="/dashboard/categories"
                >
                  <>
                    <LocalOfferIcon className="me-2" />
                    Categories
                  </>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="link-tag d-flex align-item-center  "
                  to="/dashboard/profile"
                >
                  <>
                    <Person2Icon className="me-2" />
                    Profile
                  </>
                </NavLink>
              </li>
            </ul>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
