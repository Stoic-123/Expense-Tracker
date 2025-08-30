import React, { useEffect, useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PieChartIcon from "@mui/icons-material/PieChart";
import Chip from "@mui/material/Chip";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dailyExpense.css";
import axios from "axios";
import NoData from "../NoData";
import { Button } from "@mui/material";
const apiUrl =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:5000";

const DailyExpense = ({ isDark }) => {
  const [dailyExpense, setDailyExpense] = useState({});
  const [dailyList, setDailyList] = useState([]);
  const [seeMore, setSeeMore] = useState(10);
  const handleSeeMore = () => {
    setSeeMore((prev) => prev + 10);
  };
  useEffect(() => {
    const fetchDailyExpense = async () => {
      try {
        const data = await axios.get(`${apiUrl}/expense/get-daily-expense`, {
          withCredentials: true,
        });
        setDailyExpense(data.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDailyExpense();
  }, []);
  useEffect(() => {
    const fetchDailyList = async () => {
      const data = await axios.get(`${apiUrl}/expense/get-transaction-list`, {
        withCredentials: true,
      });
      setDailyList(data.data.data);
    };
    fetchDailyList();
  }, []);
  return (
    <div>
      <div>
        <h2>Today's Expenses</h2>
        <p className="text-secondary">Track your spending for today</p>
      </div>
      <div className="row gy-3 gy-md-0">
        <div className="col-12 col-md-4">
          <div
            className="card p-3 border-radius border-0"
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
            <h3 className="pt-2 mb-0">${dailyExpense.daily_amount}</h3>
            <p className="mb-0 text-secondary" style={{ fontSize: "12.8px" }}>
              {dailyExpense.transaction}
              {dailyExpense.transaction <= 1 && " transaction"}
              {dailyExpense.transaction > 1 && " transactions"}
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div
            className="card p-3 border-radius border-0"
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
            <h3 className="pt-2 mb-0">
              ${dailyExpense.average_per_transaction}
            </h3>
            <p className="mb-0 text-secondary" style={{ fontSize: "12.8px" }}>
              Based on {dailyExpense.transaction}{" "}
              {dailyExpense.transaction <= 1 && "expense"}
              {dailyExpense.transaction > 1 && "expenses"}
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div
            className="card p-3 border-radius border-0"
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
            <h3 className="pt-2 mb-0">{dailyExpense.most_spent_category}</h3>
            <p className="mb-0 text-secondary" style={{ fontSize: "12.8px" }}>
              ${dailyExpense.total_most_spent_category} total
            </p>
          </div>
        </div>
      </div>
      <div
        className="col-12 border-radius p-4 mt-4"
        style={{
          backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px",
          borderRadius: "6px",
        }}
      >
        <h4>Today's Transactions</h4>
        <div
          className="mt-4 all-expense-list"
          style={{
            minHeight: "400px",
          }}
        >
          <ul>
            {dailyList.length === 0 && <NoData />}
            {dailyList.slice(0, seeMore).map((data) => (
              <li
                key={data.id}
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
                      backgroundColor: `${data.category_color}`,
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
                      {data.description}
                    </p>
                    <div className="d-flex ">
                      <p className="pe-2 mb-0 text-secondary">
                        {new Date(data.date).toLocaleDateString()}
                      </p>
                      <Chip
                        size="small"
                        sx={{
                          color: isDark ? "white" : "#020817",
                          backgroundColor: isDark ? "#28364DC1" : "#65676B58",
                        }}
                        label={data.category_name}
                      />
                    </div>
                  </div>
                </div>
                <h5 className="mb-0">${data.amount}</h5>
              </li>
            ))}
            {seeMore < dailyList.length && (
              <div className="d-flex justify-content-center pt-2">
                <Button variant="contained" onClick={handleSeeMore}>
                  See more...
                </Button>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DailyExpense;
