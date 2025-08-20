import React from "react";
import "./landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, scale, spring } from "framer-motion";
import { Link } from "react-router-dom";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { BorderBeam } from "@stianlarsen/border-beam";
import Marquee from "react-fast-marquee";

const Landing = () => {
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
          <motion.div
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
          <div>
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
        <div className="mt-5 pt-5 d-flex flex-column align-items-center">
          <div className="d-flex mini-glass p-1">
            <div
              style={{
                backgroundColor: "#D8FC5B",
                borderRadius: "25px",
                padding: "5px 15px",
              }}
            >
              <span className="fw-medium">NEW</span>
            </div>
            <p style={{ padding: "5px 15px" }} className="mb-0 text-white">
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
          <div className="mx-auto col-10 pt-5">
            <div className="card border-0 p-4 rounded-5 glass-2">
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
        className="pb-5"
      >
        <div className="container pt-5">
          <div className="col-12">
            <div className="card p-4 glass">
              <BorderBeam
                colorFrom="#FFFFFFFF"
                colorTo="#8CFF09FF"
                size={100}
                duration={9}
              />
              <div className="glass mx-auto  text-center mt-4 mb-2 px-3  text-warning ">
                <p className="mb-0">✨ Powerful Interface Design</p>
              </div>
              <h2 className="text-center text-white">
                Experience Our <br /> Intuitive Interface
              </h2>
              <div className="row gy-4 my-4">
                <div className="col-4">
                  <div
                    style={{
                      height: "444.74px",
                    }}
                    className=".card glass-3 p-3"
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
                <div className="col-4">
                  <div
                    style={{
                      height: "444.74px",
                    }}
                    className=".card glass-3 p-3"
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
                <div className="col-4">
                  <div
                    style={{
                      height: "444.74px",
                    }}
                    className=".card glass-3 p-3"
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
                <div className="col-6">
                  <div
                    style={{
                      height: "535.03px",
                    }}
                    className=".card glass-3 p-3"
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
                <div className="col-6">
                  <div
                    style={{
                      height: "535.03px",
                    }}
                    className=".card glass-3 p-3"
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
        </div>
      </div>
    </div>
  );
};

export default Landing;
