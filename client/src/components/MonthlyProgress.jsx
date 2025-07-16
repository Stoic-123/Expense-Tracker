import React from "react";
import { Progress } from "antd";
const MonthlyProgress = ({ leftLabel, rightLabel, percent }) => {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 4,
          }}
        >
          <span>{leftLabel}</span>
          <span>{rightLabel}</span>
        </div>
        <Progress
          style={{ width: "100%" }}
          percent={percent}
          status="active"
          format={() => null} // Hide the percentage label
          strokeColor="#3B82F6"
          trailColor="#1E293B86" // Light gray background
        />
      </div>
    </div>
  );
};

export default MonthlyProgress;
