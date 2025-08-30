import { React, useState } from "react";
import "./landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, scale, spring } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddIcon from "@mui/icons-material/Add";
import PaidIcon from "@mui/icons-material/Paid";
import Marquee from "react-fast-marquee";
import { IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Button, Drawer } from "antd";
import MenuIcon from "@mui/icons-material/Menu";

const Landing = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(52,36,122,0.8), rgba(52,36,122,0)), url("./assets/landing-bg.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="hero-section vh-100"
      >
        <nav className="container py-4 d-flex justify-content-between align-items-center">
          <h2 className="logo text-white">Jomnay</h2>
          <Button
            className="d-lg-none py-4"
            type="primary"
            onClick={showDrawer}
          >
            <MenuIcon fontSize="large" />
          </Button>
          <Drawer
            title="Jomnay Manu"
            closable={{ "aria-label": "Close Button" }}
            onClose={onClose}
            open={open}
          >
            <ul className="bg-transparent mobile-manu mb-0 list-unstyled">
              <li>
                <NavLink
                  to="/landing"
                  className="text-decoration-none text-dark"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-decoration-none text-dark"
                  href="#"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/feature"
                  className="text-decoration-none text-dark"
                  href="#"
                >
                  Our Feature
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="text-decoration-none text-dark"
                  href="#"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="mt-4">
              <motion.button
                className="col-12"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, type: spring }}
                size="large"
                style={{
                  backgroundColor: "#8462FFFF",
                  border: "none",
                  padding: "10px 0px",
                  borderRadius: "6px",
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
                variant="contained"
              >
                <Link
                  style={{
                    padding: "10px 35px",
                  }}
                  className="text-decoration-none py-3 text-white"
                  to="/dashboard"
                >
                  Get Started
                </Link>
              </motion.button>
            </div>
          </Drawer>
          <motion.div
            className=" d-lg-block d-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <ul className="glass d-flex mb-0 gap-5 p-3 px-4  list-unstyled">
              <li>
                <a className="text-decoration-none text-white" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  Our Feature
                </a>
              </li>
              <li>
                <a className="text-decoration-none text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
          <div className=" d-lg-block d-none">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3, type: spring }}
              size="large"
              style={{
                backgroundColor: "#8462FFFF",
                border: "none",
                padding: "10px 0px",
                borderRadius: "6px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
              variant="contained"
            >
              <Link
                style={{
                  padding: "10px 35px",
                }}
                className="text-decoration-none py-3 text-white"
                to="/dashboard"
              >
                Get Started
              </Link>
            </motion.button>
          </div>
        </nav>
        <div className="mt-md-5 mt-0 px-2 px-md-0 pt-5 d-flex flex-column align-items-center">
          <div className="d-flex mini-glass p-1">
            <div
              style={{
                backgroundColor: "#D8FC5B",
                borderRadius: "25px",
                padding: "5px 15px",
              }}
            >
              <span className="fw-medium text-landing-hero">NEW</span>
            </div>
            <p
              style={{ padding: "5px 15px" }}
              className="mb-0 text-landing-hero text-white"
            >
              We Have Just Released New Features
            </p>
          </div>
          <h1
            style={{
              fontSize: "55px",
            }}
            className="text-center text-white fw-bold mt-2"
          >
            Master Your <br /> <span className="text-warning">Financial</span>{" "}
            Future
          </h1>
          <p
            style={{
              fontSize: "18px",
            }}
            className="text-center text-info mb-0 mt-2"
          >
            Professional expense tracking and financial insights platform.
            <br /> Make informed decisions with powerful analytics and intuitive
            design.
          </p>
          <div className="mt-3 ">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3, type: "spring" }}
              style={{
                backgroundColor: "#FFFFFFFF",
                border: "none",
                padding: "10px 0px",
                borderRadius: "6px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              }}
              variant="contained"
            >
              <Link
                className="text-dark d-flex fw-medium px-4 text-decoration-none"
                to="/dashboard"
              >
                <PlayCircleFilledWhiteIcon />
                <p className="mb-0 ms-2">View Demo</p>
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
      <div
        className="pb-5"
        style={{
          backgroundImage: "url('./assets/landing-bg-1.svg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container ">
          <div className="mx-auto col-12 pt-5">
            <div className="card border-0 p-3 rounded-5 glass-2">
              <img src="./assets/landing-1.png" className="rounded-4" alt="" />
            </div>
          </div>
        </div>
        <div className="pt-4">
          <Marquee
            className="mt-5 bg-transparent "
            speed={90}
            gradient={true}
            gradientColor="rgba(82, 65, 190, 3)
"
            gradientWidth={200}
            autoFill
            pauseOnHover
          >
            <div
              style={{
                borderRadius: "40px",
              }}
              className="card ms-3 py-2 glass text-white px-3"
            >
              <div className="d-flex  justify-content-between align-items-center">
                <div
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  className="d-flex me-3 justify-content-center align-items-center bg-primary"
                >
                  <AccountBalanceWalletIcon />
                </div>
                <p className="mb-0">Take control of your money</p>
              </div>
            </div>

            <div
              style={{
                borderRadius: "40px",
              }}
              className="card ms-3 py-2 glass text-white px-3"
            >
              <div className="d-flex   justify-content-between align-items-center">
                <div
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  className="d-flex me-3 justify-content-center align-items-center bg-primary"
                >
                  <ManageAccountsIcon />
                </div>
                <p className="mb-0">Stay on top of your budget</p>
              </div>
            </div>
            <div
              style={{
                borderRadius: "40px",
              }}
              className="card ms-3 py-2 glass text-white px-3"
            >
              <div className="d-flex   justify-content-between align-items-center">
                <div
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  className="d-flex me-3 justify-content-center align-items-center bg-primary"
                >
                  <AccountBalanceIcon />
                </div>
                <p className="mb-0">Every expense counts</p>
              </div>
            </div>
            <div
              style={{
                borderRadius: "40px",
              }}
              className="card ms-3 py-2 glass text-white px-3"
            >
              <div className="d-flex   justify-content-between align-items-center">
                <div
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  className="d-flex me-3 justify-content-center align-items-center bg-primary"
                >
                  <EmojiEventsIcon />
                </div>
                <p className="mb-0">Plan. Save. Achieve.</p>
              </div>
            </div>
            <div
              style={{
                borderRadius: "40px",
              }}
              className="card ms-3 py-2 glass text-white px-3"
            >
              <div className="d-flex   justify-content-between align-items-center">
                <div
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  className="d-flex me-3 justify-content-center align-items-center bg-primary"
                >
                  <AutoAwesomeIcon />
                </div>
                <p className="mb-0">Smarter spending, better savings.</p>
              </div>
            </div>
          </Marquee>
          <Marquee
            className="mt-5 bg-transparent "
            speed={90}
            gradient={true}
            gradientColor="rgba(82, 65, 190, 3)
"
            gradientWidth={200}
            autoFill
            pauseOnHover
            direction="right"
          >
            <div
              style={{
                borderRadius: "40px",
              }}
              className="card ms-3 py-2 glass text-white px-3"
            >
              <div className="d-flex  justify-content-between align-items-center">
                <div
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  className="d-flex me-3 justify-content-center align-items-center bg-primary"
                >
                  <AccountBalanceWalletIcon />
                </div>
                <p className="mb-0">Take control of your money</p>
              </div>
            </div>

            <div
              style={{
                borderRadius: "40px",
              }}
              className="card ms-3 py-2 glass text-white px-3"
            >
              <div className="d-flex   justify-content-between align-items-center">
                <div
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  className="d-flex me-3 justify-content-center align-items-center bg-primary"
                >
                  <ManageAccountsIcon />
                </div>
                <p className="mb-0">Stay on top of your budget</p>
              </div>
            </div>
            <div
              style={{
                borderRadius: "40px",
              }}
              className="card ms-3 py-2 glass text-white px-3"
            >
              <div className="d-flex   justify-content-between align-items-center">
                <div
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  className="d-flex me-3 justify-content-center align-items-center bg-primary"
                >
                  <AccountBalanceIcon />
                </div>
                <p className="mb-0">Every expense counts</p>
              </div>
            </div>
            <div
              style={{
                borderRadius: "40px",
              }}
              className="card ms-3 py-2 glass text-white px-3"
            >
              <div className="d-flex   justify-content-between align-items-center">
                <div
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  className="d-flex me-3 justify-content-center align-items-center bg-primary"
                >
                  <EmojiEventsIcon />
                </div>
                <p className="mb-0">Plan. Save. Achieve.</p>
              </div>
            </div>
            <div
              style={{
                borderRadius: "40px",
              }}
              className="card ms-3 py-2 glass text-white px-3"
            >
              <div className="d-flex   justify-content-between align-items-center">
                <div
                  style={{
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                  }}
                  className="d-flex me-3 justify-content-center align-items-center bg-primary"
                >
                  <AutoAwesomeIcon />
                </div>
                <p className="mb-0">Smarter spending, better savings.</p>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#5241BE",
        }}
        className="pb-3 overflow-hidden "
      >
        <div className="container pt-5 ">
          <div className="col-12">
            <div className="card p-4 glass">
              <div className="glass mx-auto  text-center mt-4 mb-2 px-3  text-warning ">
                <p className="mb-0">✨ Powerful Interface Design</p>
              </div>
              <h2 className="text-center text-white">
                Experience Our <br /> Intuitive Interface
              </h2>
              <div className="row feature-landing gy-4 my-4">
                <div className=" col-12 col-md-6 col-lg-4">
                  <div
                    style={{
                      height: "444.74px",
                    }}
                    className="card glass-3 p-3"
                  >
                    <div className="glass-4 p-3">
                      <div>
                        <h5 className="text-white">Daily Spending Trend</h5>
                        <p className="text-light">
                          This line chart tracks your daily spending
                          fluctuations over the past week, highlighting a dip
                          and a recent rise.
                        </p>
                      </div>
                      <img
                        className="img-fluid rounded-4"
                        src="./assets/landing-2.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    style={{
                      height: "444.74px",
                    }}
                    className="card glass-3 p-3"
                  >
                    <div className="glass-4 p-3">
                      <div>
                        <h5 className="text-white">Spending by Category</h5>
                        <p className="text-light">
                          This pie chart provides a visual breakdown of your
                          total spending across different categories.
                        </p>
                      </div>
                      <img
                        className="img-fluid rounded-4"
                        src="./assets/landing-3.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    style={{
                      height: "444.74px",
                    }}
                    className="card glass-3 p-3"
                  >
                    <div className="glass-4 p-3">
                      <div>
                        <h5 className="text-white">Category Breakdown</h5>
                        <p className="text-light">
                          This bar chart details the exact amount spent in each
                          category, showing equal distribution across food,
                          transportation, gym, shopping, and entertainment.
                        </p>
                      </div>
                      <img
                        className="img-fluid rounded-4"
                        src="./assets/landing-5.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div
                    style={{
                      height: "535.03px",
                    }}
                    className="card weekly-card glass-3 p-3"
                  >
                    <div className="glass-4 p-3">
                      <div>
                        <h5 className="text-white">Weekly Breakdown</h5>
                        <p className="text-light">
                          This bar chart summarizes your spending trends across
                          the last four weeks, with Week 3 showing the highest
                          expenditure.
                        </p>
                      </div>
                      <img
                        className="img-fluid rounded-4"
                        src="./assets/landing-4.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div
                    style={{
                      height: "535.03px",
                    }}
                    className="card glass-3 p-3"
                  >
                    <div className="glass-4 p-3">
                      <div>
                        <h5 className="text-white">Categories</h5>
                        <p className="text-light">
                          This feature lets you manage and track expense
                          categories, showing total spending and expense counts
                          for categories like food, transport, and utilities,
                          with data updated as of 11:45 PM +07 on Tuesday,
                          August 19, 2025.
                        </p>
                      </div>
                      <img
                        className="img-fluid rounded-4"
                        src="./assets/landing-6.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-5 pt-4 ">
            <p className="text-info fw-medium text-center">How it Works</p>
            <h2 className="text-white  text-center">
              Add Your All Daily Expenses
            </h2>
            <p className="text-center pt-2 text-light">
              With just a few clicks, you can log your daily expenses, <br />{" "}
              monitor where your money goes, and make better financial decisions
              every day.
            </p>
            <div className="row mt-5 pt-4 gy-5 gy-lg-0">
              <div className="col-lg-4 col-12">
                <div className="card position-relative glass p-3">
                  <h5
                    style={{
                      fontSize: "20px",
                    }}
                    className="text-white work-landing text-end"
                  >
                    Sign Up & Set Up Your Profile
                  </h5>
                  <p className="mb-0 py-3 text-info">
                    Create your account and personalize your settings. Add your
                    financial details and categories to start tracking your
                    expenses easily.
                  </p>
                  <div
                    style={{
                      borderRadius: "50%",
                      width: "70px",
                      height: "70px",
                      left: "5%",
                      top: "-20%",
                    }}
                    className="position-absolute work-icon-landing bg-light d-flex align-items-center justify-content-center"
                  >
                    <PersonAddIcon
                      style={{
                        color: "dodgerblue",
                      }}
                      fontSize="large"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="card position-relative glass p-3">
                  <h5
                    style={{
                      fontSize: "20px",
                    }}
                    className="text-white work-landing text-end"
                  >
                    Log Your Daily Expenses{" "}
                  </h5>
                  <p className="mb-0 py-3 text-info">
                    Quickly add daily expenses by selecting categories like
                    food, transport, or entertainment. The system will
                    automatically organize and calculate your spending.
                  </p>
                  <div
                    style={{
                      borderRadius: "50%",
                      width: "70px",
                      height: "70px",
                      left: "5%",
                      top: "-20%",
                    }}
                    className="position-absolute work-icon-landing  bg-light d-flex align-items-center justify-content-center"
                  >
                    <AddIcon
                      style={{
                        color: "dodgerblue",
                      }}
                      fontSize="large"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="card position-relative glass p-3">
                  <h5
                    style={{
                      fontSize: "20px",
                    }}
                    className="text-white work-landing text-end"
                  >
                    Analyze Your Spending
                  </h5>
                  <p className="mb-0 py-3 text-info">
                    Access your dashboard for insights like daily trends,
                    category breakdowns, and weekly summaries to help you manage
                    your budget effectively.
                  </p>
                  <div
                    style={{
                      borderRadius: "50%",
                      width: "70px",
                      height: "70px",
                      left: "5%",
                      top: "-20%",
                    }}
                    className="position-absolute work-icon-landing  bg-light d-flex align-items-center justify-content-center"
                  >
                    <PaidIcon
                      style={{
                        color: "dodgerblue",
                      }}
                      fontSize="large"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="pt-4 ">
            <div className="row pb-3">
              <div className="col-lg-6 col-12">
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="bg-primary text-white d-flex justify-content-center align-items-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  >
                    <AccountBalanceWalletIcon />
                  </div>
                  <h4 className="text-white mb-0">Jomnay</h4>
                </div>
                <p className="mb-0 my-3 text-info">
                  Take control of your finances with smart expense tracking,
                  insightful analytics, and simple budgeting tools—anytime,{" "}
                  anywhere.
                </p>
                <div className="d-flex gap-3 align-items-center mt-3">
                  <IconButton
                    href="https://web.facebook.com/itmelong168?rdid=m6bzECzehsr9pCQo&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F15g23fmeM3%2F%3F_rdc%3D1%26_rdr#"
                    sx={{
                      backgroundColor: "#0D6EFD",
                      border: "1px solid #0D6EFD",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "dodgerblue",
                      },
                    }}
                  >
                    <FacebookIcon fontSize="medium" />
                  </IconButton>
                  <IconButton
                    href="https://github.com/Stoic-123"
                    sx={{
                      color: "white",
                      border: "1px solid white",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "dodgerblue",
                      },
                    }}
                  >
                    <GitHubIcon fontSize="medium" />
                  </IconButton>
                  <IconButton
                    href="https://t.me/Lo_ng999"
                    sx={{
                      color: "white",
                      border: "1px solid white",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "dodgerblue",
                      },
                    }}
                  >
                    <TelegramIcon fontSize="medium" />
                  </IconButton>
                </div>
              </div>
            </div>
            <hr className="text-white" />
            <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center">
              <p className="text-white mb-0">©2025 All Rights Reserved</p>
              <p className="text-white mb-0 mt-3 mt-md-0">
                Terms & Conditions Privacy & Policy
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Landing;
