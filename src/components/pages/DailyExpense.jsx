import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PieChartIcon from "@mui/icons-material/PieChart";
import Chip from "@mui/material/Chip";

const DailyExpense = ({ isDark }) => {
  return (
    <div>
      <div>
        <h2>Today's Expenses</h2>
        <p className="text-secondary">Track your spending for today</p>
      </div>
      <div className="row">
        <div className="col-4">
          <div
            className="card p-3 border-0"
            style={{
              backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
              color: isDark ? "#ffffff" : "#020817",
              boxShadow: isDark
                ? "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px"
                : "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center ">
              <p className="mb-0">Total Today</p>
              <AttachMoneyIcon className="text-secondary" fontSize="small" />
            </div>
            <h3 className="pt-2 mb-0">$96.49</h3>
            <p className="mb-0 text-secondary" style={{ fontSize: "12.8px" }}>
              5 transactions
            </p>
          </div>
        </div>
        <div className="col-4">
          <div
            className="card p-3 border-0"
            style={{
              backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
              color: isDark ? "#ffffff" : "#020817",
              boxShadow: isDark
                ? "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px"
                : "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center ">
              <p className="mb-0">Average per Transaction</p>
              <TrendingUpIcon className="text-secondary" fontSize="small" />
            </div>
            <h3 className="pt-2 mb-0">$19.30</h3>
            <p className="mb-0 text-secondary" style={{ fontSize: "12.8px" }}>
              Based on 5 expenses
            </p>
          </div>
        </div>
        <div className="col-4">
          <div
            className="card p-3 border-0"
            style={{
              backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
              color: isDark ? "#ffffff" : "#020817",
              boxShadow: isDark
                ? "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px"
                : "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center ">
              <p className="mb-0">Most Spent Category</p>
              <PieChartIcon className="text-secondary" fontSize="small" />
            </div>
            <h3 className="pt-2 mb-0">Food</h3>
            <p className="mb-0 text-secondary" style={{ fontSize: "12.8px" }}>
              $73.49 total
            </p>
          </div>
        </div>
      </div>
      <div
        className="col-12 p-4 mt-4"
        style={{
          backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
          borderRadius: "6px",
        }}
      >
        <h4>Today's Transactions</h4>
        <div className="mt-4 all-expense-list">
          <ul>
            <li
              className={`d-flex align-items-center justify-content-between ${
                isDark ? "dark-li" : "light-li"
              }`}
              style={{
                backgroundColor: isDark ? "transparent" : "#D5D4D4BA",
              }}
            >
              <div className="d-flex align-items-center">
                <span
                  className="me-3"
                  style={{
                    width: "14px",
                    height: "14px",
                    backgroundColor: "yellow",
                    borderRadius: "50%",
                  }}
                ></span>
                <div>
                  <p
                    className="mb-0"
                    style={{
                      fontSize: "17px",
                    }}
                  >
                    Electricity bill
                  </p>
                  <div className="d-flex ">
                    <p className="pe-2 mb-0 text-secondary">2024-01-30</p>
                    <Chip
                      size="small"
                      sx={{
                        color: isDark ? "white" : "#020817",
                        backgroundColor: isDark ? "#28364DC1" : "#65676B58",
                      }}
                      label="Utilities
"
                    />
                  </div>
                </div>
              </div>
              <h5 className="mb-0">$25.00</h5>
            </li>
            <li
              className={`d-flex align-items-center justify-content-between ${
                isDark ? "dark-li" : "light-li"
              }`}
              style={{
                backgroundColor: isDark ? "transparent" : "#D5D4D4BA",
              }}
            >
              <div className="d-flex align-items-center">
                <span
                  className="me-3"
                  style={{
                    width: "14px",
                    height: "14px",
                    backgroundColor: "yellow",
                    borderRadius: "50%",
                  }}
                ></span>
                <div>
                  <p
                    className="mb-0"
                    style={{
                      fontSize: "17px",
                    }}
                  >
                    Electricity bill
                  </p>
                  <div className="d-flex ">
                    <p className="pe-2 mb-0 text-secondary">2024-01-30</p>
                    <Chip
                      size="small"
                      sx={{
                        color: isDark ? "white" : "#020817",
                        backgroundColor: isDark ? "#28364DC1" : "#65676B58",
                      }}
                      label="Utilities
"
                    />
                  </div>
                </div>
              </div>
              <h5 className="mb-0">$25.00</h5>
            </li>
            <li
              className={`d-flex align-items-center justify-content-between ${
                isDark ? "dark-li" : "light-li"
              }`}
              style={{
                backgroundColor: isDark ? "transparent" : "#D5D4D4BA",
              }}
            >
              <div className="d-flex align-items-center">
                <span
                  className="me-3"
                  style={{
                    width: "14px",
                    height: "14px",
                    backgroundColor: "yellow",
                    borderRadius: "50%",
                  }}
                ></span>
                <div>
                  <p
                    className="mb-0"
                    style={{
                      fontSize: "17px",
                    }}
                  >
                    Electricity bill
                  </p>
                  <div className="d-flex ">
                    <p className="pe-2 mb-0 text-secondary">2024-01-30</p>
                    <Chip
                      size="small"
                      sx={{
                        color: isDark ? "white" : "#020817",
                        backgroundColor: isDark ? "#28364DC1" : "#65676B58",
                      }}
                      label="Utilities
"
                    />
                  </div>
                </div>
              </div>
              <h5 className="mb-0">$25.00</h5>
            </li>
            <li
              className={`d-flex align-items-center justify-content-between ${
                isDark ? "dark-li" : "light-li"
              }`}
              style={{
                backgroundColor: isDark ? "transparent" : "#D5D4D4BA",
              }}
            >
              <div className="d-flex align-items-center">
                <span
                  className="me-3"
                  style={{
                    width: "14px",
                    height: "14px",
                    backgroundColor: "yellow",
                    borderRadius: "50%",
                  }}
                ></span>
                <div>
                  <p
                    className="mb-0"
                    style={{
                      fontSize: "17px",
                    }}
                  >
                    Electricity bill
                  </p>
                  <div className="d-flex ">
                    <p className="pe-2 mb-0 text-secondary">2024-01-30</p>
                    <Chip
                      size="small"
                      sx={{
                        color: isDark ? "white" : "#020817",
                        backgroundColor: isDark ? "#28364DC1" : "#65676B58",
                      }}
                      label="Utilities
"
                    />
                  </div>
                </div>
              </div>
              <h5 className="mb-0">$25.00</h5>
            </li>
            <li
              className={`d-flex align-items-center justify-content-between ${
                isDark ? "dark-li" : "light-li"
              }`}
              style={{
                backgroundColor: isDark ? "transparent" : "#D5D4D4BA",
              }}
            >
              <div className="d-flex align-items-center">
                <span
                  className="me-3"
                  style={{
                    width: "14px",
                    height: "14px",
                    backgroundColor: "yellow",
                    borderRadius: "50%",
                  }}
                ></span>
                <div>
                  <p
                    className="mb-0"
                    style={{
                      fontSize: "17px",
                    }}
                  >
                    Electricity bill
                  </p>
                  <div className="d-flex ">
                    <p className="pe-2 mb-0 text-secondary">2024-01-30</p>
                    <Chip
                      size="small"
                      sx={{
                        color: isDark ? "white" : "#020817",
                        backgroundColor: isDark ? "#28364DC1" : "#65676B58",
                      }}
                      label="Utilities
"
                    />
                  </div>
                </div>
              </div>
              <h5 className="mb-0">$25.00</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DailyExpense;
