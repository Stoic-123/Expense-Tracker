import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WalletIcon from "@mui/icons-material/Wallet";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import axios from "axios";
import MyLineChart from "../LineChart";
import MyPieChart from "../PieChart";
import Chip from "@mui/material/Chip";
import "./dashboard.css";

const Dashboard = ({ isDark }) => {
  const [dashboardData, setDashboardData] = useState({});

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3030/expense/get-dashboard-data",
          { withCredentials: true }
        );
        // dashboardData is inside response.data.data
        setDashboardData(response.data.data);
      } catch (error) {
        console.log("Error fetching dashboard data:", error.message);
      }
    };

    fetchDashboardData();
  }, []);
  return (
    <div>
      <h2>Dashboard</h2>
      <p className="text-secondary">
        Welcome back! Here's your expense overview.
      </p>
      <div className="row gx-md-4 gx-0 gy-3 gy-md-0">
        <div className="col-12 col-md-3">
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
              <p className="mb-0">Total Spent This Month</p>
              <AttachMoneyIcon className="text-secondary" fontSize="small" />
            </div>
            <h3 className="pt-2 mb-0">${dashboardData.total_spent}</h3>
            <p className="mb-0 text-success" style={{ fontSize: "12.8px" }}>
              {dashboardData.total_percent > 0
                ? `+${dashboardData.total_percent}% from last month`
                : `${dashboardData.total_percent}% from last month`}
            </p>
          </div>
        </div>
        <div className="col-12 col-md-3">
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
              <p className="mb-0">Average Daily Spending</p>
              <TrendingUpIcon className="text-secondary" fontSize="small" />
            </div>
            <h3 className="pt-2 mb-0">${dashboardData.total_average}</h3>
            <p className="mb-0 text-success" style={{ fontSize: "12.8px" }}>
              {dashboardData.average_percent > 0
                ? `+${dashboardData.average_percent}% from last month`
                : `${dashboardData.average_percent}% from last month`}
            </p>
          </div>
        </div>
        <div className="col-12 col-md-3">
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
              <p className="mb-0">Total Transactions</p>
              <WalletIcon className="text-secondary" fontSize="small" />
            </div>
            <h3 className="pt-2 mb-0">{dashboardData.total_transaction}</h3>
            <p className="mb-0 text-success" style={{ fontSize: "12.8px" }}>
              {dashboardData.transaction_percent > 0
                ? `+${dashboardData.transaction_percent}% from last month`
                : `${dashboardData.transaction_percent}% from last month`}{" "}
            </p>
          </div>
        </div>
        <div className="col-12 col-md-3">
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
              <p className="mb-0">Active Categories</p>
              <LocalOfferIcon className="text-secondary" fontSize="small" />
            </div>
            <h3 className="pt-2 mb-0">{dashboardData.total_category}</h3>
            <p className="mb-0 text-success" style={{ fontSize: "12.8px" }}>
              {dashboardData.category_percent > 0
                ? `+${dashboardData.category_percent}% from last month`
                : `${dashboardData.category_percent}% from last month`}{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-4 gx-4 gy-3 gy-md-0">
        <div className="col-12 col-md-6">
          <div
            className="card p-4 border-0"
            style={{
              backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
              color: isDark ? "#ffffff" : "#020817",
              boxShadow: isDark
                ? "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px"
                : "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              height: "450px",
            }}
          >
            <h4>Daily Spending Trend</h4>
            <MyLineChart />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div
            className="card p-4 border-0"
            style={{
              backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
              color: isDark ? "#ffffff" : "#020817",
              boxShadow: isDark
                ? "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px"
                : "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              height: "450px",
            }}
          >
            <h4>Spending by Category</h4>
            <MyPieChart />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="col-12">
          <div
            className="card p-4 border-0"
            style={{
              backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
              color: isDark ? "#ffffff" : "#020817",
              boxShadow: isDark
                ? "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px"
                : "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              height: "450px",
            }}
          >
            <h4>Recent Expenses</h4>
            <div className="expense-list">
              <ul
                className="mt-4"
                style={{
                  listStyleType: "none",
                }}
              >
                <li className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-3"
                      style={{
                        width: "14px",
                        height: "14px",
                        backgroundColor: "red",
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
                        Lunch at cafe
                      </p>
                      <div className="d-flex ">
                        <p className="pe-2 mb-0 text-secondary">2024-01-15</p>
                        <Chip
                          size="small"
                          sx={{
                            color: isDark ? "white" : "#020817",
                            backgroundColor: isDark ? "#28364DC1" : "#65676B58",
                          }}
                          label="Food"
                        />
                      </div>
                    </div>
                  </div>
                  <h5 className="mb-0">$25.50</h5>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-3"
                      style={{
                        width: "14px",
                        height: "14px",
                        backgroundColor: "blue",
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
                        Gas station
                      </p>
                      <div className="d-flex ">
                        <p className="pe-2 mb-0 text-secondary">2024-01-25</p>
                        <Chip
                          size="small"
                          sx={{
                            color: isDark ? "white" : "#020817",
                            backgroundColor: isDark ? "#28364DC1" : "#65676B58",
                          }}
                          label="Transport"
                        />
                      </div>
                    </div>
                  </div>
                  <h5 className="mb-0">$45.50</h5>
                </li>
                <li className="d-flex align-items-center justify-content-between">
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
                        Grocery shopping
                      </p>
                      <div className="d-flex ">
                        <p className="pe-2 mb-0 text-secondary">2024-02-05</p>
                        <Chip
                          size="small"
                          sx={{
                            color: isDark ? "white" : "#020817",
                            backgroundColor: isDark ? "#28364DC1" : "#65676B58",
                          }}
                          label="Food"
                        />
                      </div>
                    </div>
                  </div>
                  <h5 className="mb-0">$87.80</h5>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-3"
                      style={{
                        width: "14px",
                        height: "14px",
                        backgroundColor: "dodgerblue",
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
                        Netflix subscription
                      </p>
                      <div className="d-flex ">
                        <p className="pe-2 mb-0 text-secondary">2024-03-09</p>
                        <Chip
                          size="small"
                          sx={{
                            color: isDark ? "white" : "#020817",
                            backgroundColor: isDark ? "#28364DC1" : "#65676B58",
                          }}
                          label="Entertainment"
                        />
                      </div>
                    </div>
                  </div>
                  <h5 className="mb-0">$45.60</h5>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <span
                      className="me-3"
                      style={{
                        width: "14px",
                        height: "14px",
                        backgroundColor: "pink",
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
                  <h5 className="mb-0">$120.00</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
