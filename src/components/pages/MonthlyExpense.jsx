import React from "react";
import MonthlyChart from "../MonthlyChart";
import { Flex } from "antd";
import MonthlyProgress from "../MonthlyProgress";
const MonthlyExpense = ({ isDark }) => {
  return (
    <div>
      <div>
        <h2>Monthly Summary</h2>
        <p className="mb-0 text-secondary">
          Analyze your monthly spending patterns
        </p>
      </div>
      <div className="row mt-4">
        <div className="col-6">
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
            <h4 className="mb-3">Total Spent</h4>
            <h2 className="mb-0">$2450.00</h2>
            <p className="text-secondary mb-0">45 transactions this month</p>
          </div>
        </div>
        <div className="col-6">
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
            <h4 className="mb-3">Average Daily</h4>
            <h2 className="mb-0">$81.67</h2>
            <p className="text-secondary mb-0">Based on 30-day average</p>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6">
          <div
            className="card p-3 border-0"
            style={{
              backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
              color: isDark ? "#ffffff" : "#020817",
              boxShadow: isDark
                ? "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px"
                : "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              height: "401.06px",
            }}
          >
            <h3>Weekly Breakdown</h3>
            <div className="mt-2">
              <MonthlyChart />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div
            className="card p-3 border-0"
            style={{
              backgroundColor: isDark ? "#020817" : "#EDEDEDFF",
              color: isDark ? "#ffffff" : "#020817",
              boxShadow: isDark
                ? "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(225, 226, 227, 0.15) 0px 0px 0px 1px"
                : "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              height: "401.06px",
            }}
          >
            <h3>Category Breakdown</h3>
            <div className="mt-2">
              <Flex gap="small" vertical>
                <MonthlyProgress
                  leftLabel={"Food"}
                  rightLabel={"$680.00"}
                  percent={60}
                />
                <MonthlyProgress
                  leftLabel={"Transportation"}
                  rightLabel={"$680.00"}
                  percent={60}
                />
                <MonthlyProgress
                  leftLabel={"Gym"}
                  rightLabel={"$680.00"}
                  percent={60}
                />
                <MonthlyProgress
                  leftLabel={"Shopping"}
                  rightLabel={"$680.00"}
                  percent={60}
                />
                <MonthlyProgress
                  leftLabel={"Entertainment"}
                  rightLabel={"$680.00"}
                  percent={60}
                />
              </Flex>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyExpense;
